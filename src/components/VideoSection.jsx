import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Maximize2, ShieldCheck, Film, Tv, ArrowUpRight, X } from 'lucide-react';
import './VideoSection.css';

export const videoList = [
    {
        id: 1,
        src: '/videos/1.mp4',
        title: 'National Courtroom Briefing & Judicial Escort',
        channel: 'National Legal Media',
        tag: 'Court Proceedings',
        timestamp: '7:29',
        description: 'Advocate Sarfaraz Hussain walking with clients and counsel amidst heavy national media attention during high-profile court hearings.'
    },
    {
        id: 2,
        src: '/videos/2.mp4',
        title: "India TV Prime Debate: 20 घंटे से JNU 'बंधक'",
        channel: 'India TV Special Broadcast',
        tag: 'Prime News Broadcast',
        timestamp: 'Live Debate',
        description: 'Prime-time national news coverage and analysis on the prominent JNU detention and legal developments.'
    },
    {
        id: 3,
        src: '/videos/3.mp4',
        title: 'High Court Press Conference & Counsel Statement',
        channel: 'Press Trust & National Media',
        tag: 'Live Press Briefing',
        timestamp: 'Press Statement',
        description: 'Advocate Sarfaraz Hussain addressing national news reporters and cameras detailing key High Court orders and statutory remedies.'
    },
    {
        id: 4,
        src: '/videos/4.mp4',
        title: 'CNN-IBN: Ex-Top Cop Sharma to Walk Free',
        channel: 'CNN-IBN Special Report',
        tag: 'Shivani Bhatnagar Trial',
        timestamp: 'Headline Trial',
        description: 'Landmark defense verdict in the high-profile Shivani Bhatnagar Murder Case, where Advocate Sarfaraz Hussain appeared as defense counsel.'
    },
    {
        id: 5,
        src: '/videos/5.mp4',
        title: 'TV9 National News: Delhi High Court Entry',
        channel: 'TV9 News Network',
        tag: 'High Court Coverage',
        timestamp: 'Judicial Report',
        description: 'Live broadcast coverage following Advocate Sarfaraz Hussain and legal team arriving for landmark hearing proceedings.'
    }
];

export default function VideoSection({ isDark = false, showHeader = true }) {
    const [activeModalVideo, setActiveModalVideo] = useState(null);

    const openTheater = (video) => {
        setActiveModalVideo(video);
    };

    const closeTheater = () => {
        setActiveModalVideo(null);
    };

    return (
        <section className={`sarfaraz-video-section ${isDark ? 'section-dark' : 'section-cream'}`} id="media-videos">
            <div className="container">
                {showHeader && (
                    <div className="video-section-header" data-aos="fade-up">
                        <div className="video-header-badge" data-aos="fade-right" data-aos-delay="100">
                            <Film size={14} />
                            <span>Broadcast Archive</span>
                        </div>
                        <h2 className="video-main-heading" data-aos="fade-up" data-aos-delay="150">
                            <span>VIDEO</span>
                        </h2>
                        <div className="video-heading-bar" data-aos="fade-right" data-aos-delay="200"></div>
                        <p className="video-sub-heading" data-aos="fade-up" data-aos-delay="250">
                            Documented national news broadcasts, landmark trial coverages, and high-stakes press interviews featuring Advocate Sarfaraz Hussain.
                        </p>
                    </div>
                )}

                {/* 5-Video Grid Layout matching original & elevated with luxury aesthetics */}
                <div className="video-cards-grid">
                    {videoList.map((video, index) => (
                        <div
                            key={video.id}
                            className={`video-card-item ${index >= 3 ? 'video-card-wide' : ''}`}
                            data-aos="fade-up"
                            data-aos-delay={(index % 3) * 120 + 100}
                        >
                            <div className="video-frame-container">
                                <div className="video-top-tag-row">
                                    <span className="video-channel-badge">
                                        <Tv size={13} />
                                        {video.channel}
                                    </span>
                                    {video.timestamp && (
                                        <span className="video-duration-pill">{video.timestamp}</span>
                                    )}
                                </div>

                                <div className="video-player-wrapper">
                                    <video
                                        controls
                                        preload="metadata"
                                        playsInline
                                        className="sarfaraz-native-video"
                                    >
                                        <source src={video.src} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    
                                    <button
                                        type="button"
                                        className="theater-expand-btn"
                                        onClick={() => openTheater(video)}
                                        title="Watch in Theater Mode"
                                        aria-label="Expand video in theater mode"
                                    >
                                        <Maximize2 size={16} />
                                    </button>
                                </div>

                                <div className="video-caption-box">
                                    <div className="video-case-tag">{video.tag}</div>
                                    <h3 className="video-card-title">{video.title}</h3>
                                    <p className="video-card-desc">{video.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Verification Note */}
                <div className="video-footer-banner" data-aos="fade-up" data-aos-delay="150">
                    <div className="video-footer-left">
                        <ShieldCheck size={22} className="shield-icon" />
                        <div>
                            <strong>Verified Public Judicial &amp; News Media Archives</strong>
                            <p>Broadcasting rights and press coverage courtesy of respective national networks (CNN-IBN, India TV, TV9).</p>
                        </div>
                    </div>
                    <Link
                        to="/gallery"
                        className="btn-lawcrest btn-lawcrest-outline-dark"
                    >
                        <span>Explore Full Media Archive</span>
                        <ArrowUpRight size={14} />
                    </Link>
                </div>
            </div>

            {/* Theater Mode Modal */}
            {activeModalVideo && (
                <div className="video-theater-backdrop" onClick={closeTheater}>
                    <div className="video-theater-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="theater-modal-header">
                            <div className="theater-modal-title">
                                <span className="theater-pill">{activeModalVideo.tag}</span>
                                <h3>{activeModalVideo.title}</h3>
                            </div>
                            <button
                                className="theater-close-btn"
                                onClick={closeTheater}
                                aria-label="Close video player"
                            >
                                <X size={22} />
                            </button>
                        </div>
                        <div className="theater-video-wrapper">
                            <video
                                controls
                                autoPlay
                                playsInline
                                className="theater-modal-video"
                            >
                                <source src={activeModalVideo.src} type="video/mp4" />
                                Your browser does not support HTML5 video.
                            </video>
                        </div>
                        <div className="theater-modal-footer">
                            <p>{activeModalVideo.description}</p>
                            <span className="theater-source-tag">Source: {activeModalVideo.channel}</span>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
