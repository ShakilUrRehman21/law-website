import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 30) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location]);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Practice Areas', path: '/practice-areas' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className={`lawcrest-header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container lawcrest-header-container">
                <Link to="/" className="lawcrest-logo">
                    <span className="lawcrest-logo-title">Sarfaraz Law</span>
                    <span className="lawcrest-logo-badge">Advocate & Associates</span>
                </Link>

                <nav className="lawcrest-desktop-nav">
                    <ul className="lawcrest-nav-list">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `lawcrest-nav-link ${isActive ? 'active' : ''}`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="lawcrest-header-actions">
                    <Link to="/contact" className="lawcrest-header-btn">
                        <span>Book a Consultation</span>
                        <ArrowUpRight size={16} className="btn-icon" />
                    </Link>

                    <button
                        type="button"
                        className="lawcrest-mobile-toggle"
                        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open navigation menu"}
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            <div className={`lawcrest-mobile-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="lawcrest-mobile-inner">
                    <ul className="lawcrest-mobile-list">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <NavLink
                                    to={link.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={({ isActive }) =>
                                        `lawcrest-mobile-link ${isActive ? 'active' : ''}`
                                    }
                                >
                                    <span>{link.name}</span>
                                    <ArrowUpRight size={14} className="mobile-link-arrow" />
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <div className="lawcrest-mobile-cta">
                        <Link 
                            to="/contact" 
                            className="btn-lawcrest btn-lawcrest-solid-light mobile-cta-btn"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <span>Book a Consultation</span>
                            <ArrowUpRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile Backdrop Overlay */}
            {isMobileMenuOpen && (
                <div 
                    className="lawcrest-mobile-backdrop" 
                    onClick={() => setIsMobileMenuOpen(false)} 
                    aria-hidden="true" 
                />
            )}
        </header>
    );
};

export default Header;
