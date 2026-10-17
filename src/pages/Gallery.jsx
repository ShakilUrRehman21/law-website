import React, { useState } from 'react';
import { Camera, ArrowUpRight, Tv, Film, ZoomIn, Play, X } from 'lucide-react';
import VideoSection from '../components/VideoSection';
import './Gallery.css';

const allGalleryImages = [
    {
        id: 1,
        src: '/images/1.jpg',
        title: 'National Press Conference & Media Address',
        category: 'High Court Briefing',
        description: 'Advocate Sarfaraz Hussain addressing national news media and press representatives regarding landmark constitutional orders.'
    },
    {
        id: 2,
        src: '/images/2.jpg',
        title: 'Chambers Briefing & High-Stakes Trial Strategy',
        category: 'Defense Strategy',
        description: 'Senior Advocate Sarfaraz Hussain reviewing evidentiary records and coordinating trial strategies with fellow legal counsel.'
    },
    {
        id: 3,
        src: '/images/3.jpg',
        title: 'Judicial Proceedings & Legal Delegation',
        category: 'Appellate Advocacy',
        description: 'Consultation discussions prior to filing Special Leave Petitions (SLP) before the Supreme Court of India.'
    },
    {
        id: 4,
        src: '/images/4.jpg',
        title: 'Delhi High Court & Supreme Court Premises',
        category: 'Courtroom Standing',
        description: 'Advocate Sarfaraz Hussain alongside chamber colleagues outside the Delhi High Court chambers after a decisive hearing.'
    },
    {
        id: 5,
        src: '/gallery-1.jpg',
        title: 'Notable Courtroom Appearance',
        category: 'Litigation & Media',
        description: 'Advocate Sarfaraz Hussain appearing in high-profile judicial proceedings before the bench.'
    },
    {
        id: 6,
        src: '/gallery-2.jpg',
        title: 'Press Conference & Legal Briefing',
        category: 'Media Address',
        description: 'Addressing national and regional press regarding landmark constitutional and statutory verdicts.'
    }
];



const Gallery = () => {
    const [mediaFilter, setMediaFilter] = useState('all');
    const [activeLightboxImage, setActiveLightboxImage] = useState(null);

    return (
        <div className="lawcrest-gallery-page">
            {/* Dark Hero */}
            <section className="gallery-hero section-dark">
                <div className="container">
                    <div className="gallery-hero-content">
                        <span className="pill-badge pill-badge-dark" data-aos="fade-down">
                            <Film size={14} className="badge-icon-gold" />
                            Visual &amp; Media Archive
                        </span>
                        <h1 className="editorial-title text-white" data-aos="fade-up" data-aos-delay="100">
                            Court Gallery &amp; Broadcasts
                        </h1>
                        <p className="gallery-hero-lead" data-aos="fade-up" data-aos-delay="200">
                            Comprehensive visual records, documented television broadcasts (CNN-IBN, India TV, TV9), and courtroom media archives reflecting 25+ years of advocacy.
                        </p>

                        <div className="gallery-tab-pills" data-aos="fade-up" data-aos-delay="300">
                            <button
                                className={`gallery-filter-pill ${mediaFilter === 'all' ? 'active' : ''}`}
                                onClick={() => setMediaFilter('all')}
                            >
                                All Archives ({allGalleryImages.length + 5})
                            </button>
                            <button
                                className={`gallery-filter-pill ${mediaFilter === 'photos' ? 'active' : ''}`}
                                onClick={() => setMediaFilter('photos')}
                            >
                                <Camera size={14} />
                                Photographs ({allGalleryImages.length})
                            </button>
                            <button
                                className={`gallery-filter-pill ${mediaFilter === 'videos' ? 'active' : ''}`}
                                onClick={() => setMediaFilter('videos')}
                            >
                                <Tv size={14} />
                                News Broadcasts (5)
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Broadcasts Section (Shown when 'all' or 'videos' is selected) */}
            {(mediaFilter === 'all' || mediaFilter === 'videos') && (
                <VideoSection isDark={false} showHeader={true} />
            )}

            {/* Photographs Grid Section (Shown when 'all' or 'photos' is selected) */}
            {(mediaFilter === 'all' || mediaFilter === 'photos') && (
                <section className="gallery-grid-section section-cream">
                    <div className="container">
                        <div className="section-title-wrap text-center" data-aos="fade-up">
                            <span className="statement-tag">Documented Moments</span>
                            <h2 className="editorial-title">Courtroom &amp; Press Photographs</h2>
                            <p className="editorial-subtitle">
                                Visual records showcasing landmark trial appearances, High Court media scrums, and chamber deliberations.
                            </p>
                        </div>

                        <div className="lawcrest-gallery-cards">
                            {allGalleryImages.map((item, index) => (
                                <div
                                    key={item.id}
                                    className="gallery-feature-card"
                                    data-aos="zoom-in-up"
                                    data-aos-delay={(index % 2) * 150 + 80}
                                >
                                    <div
                                        className="gallery-photo-wrapper"
                                        onClick={() => setActiveLightboxImage(item)}
                                        role="button"
                                        tabIndex={0}
                                        aria-label={`View photo ${item.title}`}
                                        onKeyDown={(e) => { if (e.key === 'Enter') setActiveLightboxImage(item); }}
                                    >
                                        <img src={item.src} alt={item.title} loading="lazy" />
                                        <div className="gallery-tag-pill">{item.category}</div>
                                        <div className="gallery-zoom-overlay">
                                            <ZoomIn size={22} />
                                            <span>Click to Expand</span>
                                        </div>
                                    </div>
                                    <div className="gallery-card-content">
                                        <h3 className="gallery-card-title">{item.title}</h3>
                                        <p className="gallery-card-desc">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>
                </section>
            )}

            {/* Single Photo Lightbox Modal */}
            {activeLightboxImage && (
                <div className="photo-lightbox-backdrop" onClick={() => setActiveLightboxImage(null)}>
                    <div className="photo-lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="lightbox-close"
                            onClick={() => setActiveLightboxImage(null)}
                            aria-label="Close image preview"
                        >
                            <X size={24} />
                        </button>
                        <div className="lightbox-image-container">
                            <img src={activeLightboxImage.src} alt={activeLightboxImage.title} />
                            <div className="lightbox-caption-strip">
                                <span className="strip-badge">{activeLightboxImage.category}</span>
                                <h3>{activeLightboxImage.title}</h3>
                                <p>{activeLightboxImage.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
