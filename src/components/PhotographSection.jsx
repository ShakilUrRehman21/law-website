import React, { useState } from 'react';
import { Camera, ZoomIn, X, ChevronLeft, ChevronRight, Award } from 'lucide-react';
import './PhotographSection.css';

export const photographsData = [
    {
        id: 1,
        src: '/images/1.jpg',
        title: 'National Press Conference & Media Address',
        category: 'High Court Briefing',
        caption: 'Advocate Sarfaraz Hussain addressing national news media and press representatives regarding landmark constitutional orders and courtroom defense.'
    },
    {
        id: 2,
        src: '/images/2.jpg',
        title: 'Chambers Briefing & High-Stakes Trial Strategy',
        category: 'Defense Strategy',
        caption: 'Senior Advocate Sarfaraz Hussain reviewing evidentiary records and coordinating trial strategies with fellow legal counsel.'
    },
    {
        id: 3,
        src: '/images/3.jpg',
        title: 'Judicial Proceedings & Legal Delegation',
        category: 'Appellate Advocacy',
        caption: 'Consultation discussions prior to filing Special Leave Petitions (SLP) before the Supreme Court of India.'
    },
    {
        id: 4,
        src: '/images/4.jpg',
        title: 'Delhi High Court & Supreme Court Premises',
        category: 'Courtroom Standing',
        caption: 'Advocate Sarfaraz Hussain alongside chamber colleagues outside the Delhi High Court chambers after a decisive hearing.'
    }
];

export default function PhotographSection({ isDark = false }) {
    const [lightboxIndex, setLightboxIndex] = useState(null);

    const openLightbox = (index) => {
        setLightboxIndex(index);
    };

    const closeLightbox = () => {
        setLightboxIndex(null);
    };

    const prevPhoto = () => {
        setLightboxIndex((prev) => (prev > 0 ? prev - 1 : photographsData.length - 1));
    };

    const nextPhoto = () => {
        setLightboxIndex((prev) => (prev < photographsData.length - 1 ? prev + 1 : 0));
    };

    return (
        <section className={`sarfaraz-photo-section ${isDark ? 'section-dark' : 'section-cream'}`} id="press-photographs">
            <div className="container">
                <div className="photo-section-header" data-aos="fade-up">
                    <div className="photo-header-badge" data-aos="fade-right" data-aos-delay="100">
                        <Camera size={14} />
                        <span>Visual Archives</span>
                    </div>
                    <h2 className="photo-main-heading" data-aos="fade-up" data-aos-delay="150">
                        <span>Photographs</span>
                    </h2>
                    <div className="photo-heading-bar" data-aos="fade-right" data-aos-delay="200"></div>
                    <p className="photo-sub-heading" data-aos="fade-up" data-aos-delay="250">
                        Archival photographs capturing Advocate Sarfaraz Hussain across major national trials, Supreme Court &amp; High Court proceedings, and press briefings.
                    </p>
                </div>

                {/* 2x2 Photogrid with responsive layout */}
                <div className="photographs-grid">
                    {photographsData.map((photo, index) => (
                        <div
                            key={photo.id}
                            className="photo-card-wrapper"
                            data-aos="zoom-in-up"
                            data-aos-delay={index * 150 + 100}
                        >
                            <div 
                                className="photo-card-inner"
                                onClick={() => openLightbox(index)}
                                role="button"
                                tabIndex={0}
                                aria-label={`View ${photo.title}`}
                                onKeyDown={(e) => { if (e.key === 'Enter') openLightbox(index); }}
                            >
                                <div className="photo-img-box">
                                    <img src={photo.src} alt={photo.title} loading="lazy" />
                                    <div className="photo-overlay-glass">
                                        <span className="photo-category-pill">{photo.category}</span>
                                        <div className="photo-zoom-icon">
                                            <ZoomIn size={20} />
                                        </div>
                                    </div>
                                </div>
                                <div className="photo-caption-info">
                                    <h4 className="photo-title">{photo.title}</h4>
                                    <p className="photo-text">{photo.caption}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {lightboxIndex !== null && (
                <div className="photo-lightbox-backdrop" onClick={closeLightbox}>
                    <div className="photo-lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <button className="lightbox-close" onClick={closeLightbox} aria-label="Close lightbox">
                            <X size={24} />
                        </button>
                        
                        <button className="lightbox-nav-btn prev" onClick={prevPhoto} aria-label="Previous photo">
                            <ChevronLeft size={28} />
                        </button>

                        <div className="lightbox-image-container">
                            <img 
                                src={photographsData[lightboxIndex].src} 
                                alt={photographsData[lightboxIndex].title} 
                            />
                            <div className="lightbox-caption-strip">
                                <span className="strip-badge">{photographsData[lightboxIndex].category}</span>
                                <h3>{photographsData[lightboxIndex].title}</h3>
                                <p>{photographsData[lightboxIndex].caption}</p>
                                <div className="strip-counter">
                                    {lightboxIndex + 1} / {photographsData.length}
                                </div>
                            </div>
                        </div>

                        <button className="lightbox-nav-btn next" onClick={nextPhoto} aria-label="Next photo">
                            <ChevronRight size={28} />
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
