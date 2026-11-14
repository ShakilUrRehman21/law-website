import { useEffect, useRef } from 'react';
import { reducedMotion } from '../lib/gsap';

// Slow-moving folded-cloth shader for the home hero, drawn with three.js.
// three is loaded on demand so it never blocks the first paint.

const vertex = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const fragment = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uRes;
  uniform vec2 uPointer;
  uniform vec3 uDeep;
  uniform vec3 uMid;
  uniform vec3 uSheen;

  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  void main() {
    vec2 uv = vUv;
    vec2 p = uv * vec2(uRes.x / uRes.y, 1.0) * 2.4;
    float t = uTime * 0.05;

    // Long diagonal folds, gently displaced by the pointer.
    p += (uPointer - 0.5) * 0.18;
    float fold = sin(p.x * 1.15 + p.y * 0.55 + sin(p.y * 1.6 + t * 2.3) * 1.25 + t * 1.6);
    fold += 0.55 * sin(p.y * 2.1 - p.x * 0.7 + sin(p.x * 1.4 - t * 1.8) * 0.9 - t);
    fold += 0.25 * sin((p.x + p.y) * 3.3 + t * 2.7);
    fold /= 1.8;

    float light = smoothstep(-0.9, 1.0, fold);
    vec3 col = mix(uDeep, uMid, light);
    col = mix(col, uSheen, pow(smoothstep(0.55, 1.0, fold), 3.0) * 0.55);

    // Darken toward the left where the type sits, and toward the bottom edge.
    col *= mix(0.72, 1.0, smoothstep(0.0, 0.85, uv.x));
    col *= mix(0.8, 1.0, smoothstep(0.0, 0.35, uv.y));

    col += (hash(uv * uRes + fract(uTime)) - 0.5) * 0.03;
    gl_FragColor = vec4(col, 1.0);
  }
`;

const hex = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);

export default function SilkCanvas({ className }) {
  const host = useRef(null);

  useEffect(() => {
    let disposed = false;
    let cleanup = () => {};

    import('three').then((THREE) => {
      if (disposed || !host.current) return;
      const el = host.current;
      const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false, powerPreference: 'low-power' });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      el.appendChild(renderer.domElement);

      const uniforms = {
        uTime: { value: 0 },
        uRes: { value: new THREE.Vector2(1, 1) },
        uPointer: { value: new THREE.Vector2(0.5, 0.5) },
        uDeep: { value: new THREE.Vector3(...hex('#2a100a')) },
        uMid: { value: new THREE.Vector3(...hex('#5e2a1b')) },
        uSheen: { value: new THREE.Vector3(...hex('#a8714f')) },
      };
      const scene = new THREE.Scene();
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
      const mesh = new THREE.Mesh(
        new THREE.PlaneGeometry(2, 2),
        new THREE.ShaderMaterial({ vertexShader: vertex, fragmentShader: fragment, uniforms }),
      );
      scene.add(mesh);

      const resize = () => {
        const { width, height } = el.getBoundingClientRect();
        renderer.setSize(width, height, false);
        uniforms.uRes.value.set(width, height);
        renderer.render(scene, camera);
      };
      const ro = new ResizeObserver(resize);
      ro.observe(el);
      resize();

      const target = new THREE.Vector2(0.5, 0.5);
      const onMove = (e) => {
        const r = el.getBoundingClientRect();
        target.set((e.clientX - r.left) / r.width, 1 - (e.clientY - r.top) / r.height);
      };
      window.addEventListener('pointermove', onMove, { passive: true });

      let visible = true;
      const io = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting));
      io.observe(el);

      const still = reducedMotion();
      const clock = new THREE.Clock();
      let raf = 0;
      const loop = () => {
        raf = requestAnimationFrame(loop);
        if (!visible || document.hidden) return;
        uniforms.uTime.value = 40 + clock.getElapsedTime();
        uniforms.uPointer.value.lerp(target, 0.03);
        renderer.render(scene, camera);
      };
      if (still) {
        uniforms.uTime.value = 40;
        renderer.render(scene, camera);
      } else {
        loop();
      }
      requestAnimationFrame(() => el.classList.add('is-ready'));

      cleanup = () => {
        cancelAnimationFrame(raf);
        window.removeEventListener('pointermove', onMove);
        ro.disconnect();
        io.disconnect();
        mesh.geometry.dispose();
        mesh.material.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    });

    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  return <div ref={host} className={`silk ${className ?? ''}`} aria-hidden="true" />;
}
