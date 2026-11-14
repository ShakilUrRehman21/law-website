// Duotone portrait: every photo is rendered in the same ink-and-paper treatment
// so pictures taken in different places read as one set.
export default function Portrait({ src, alt, className, eager = false, position = '50% 20%' }) {
  return (
    <div className={`portrait ${className ?? ''}`}>
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        style={{ objectPosition: position }}
      />
    </div>
  );
}
