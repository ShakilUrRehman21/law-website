import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="lawcrest-footer">
            <div className="container">
                {/* Upper Footer Grid */}
                <div className="lawcrest-footer-grid">
                    {/* Column 1: Firm Overview */}
                    <div className="lawcrest-footer-col col-main">
                        <div className="footer-brand">
                            <h3>Sarfaraz Hussain</h3>
                            <span className="footer-role">Advocate • Delhi High Court & Supreme Court of India</span>
                        </div>
                        <p className="footer-desc">
                            Authoritative, trustworthy, and firmly established legal representation across Delhi & NCR. Protecting your rights and defending your future with steadfast excellence.
                        </p>
                        <div className="footer-badges">
                            <span className="footer-badge">Delhi High Court</span>
                            <span className="footer-badge">Supreme Court of India</span>
                            <span className="footer-badge">District & Sessions Courts</span>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="lawcrest-footer-col">
                        <h4 className="footer-heading">Navigation</h4>
                        <ul className="footer-nav-list">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Advocate</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/practice-areas">Practice Areas</Link></li>
                            <li><Link to="/gallery">Court Gallery</Link></li>
                            <li><Link to="/contact">Schedule Consultation</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Practice Areas */}
                    <div className="lawcrest-footer-col">
                        <h4 className="footer-heading">Practice Areas</h4>
                        <ul className="footer-nav-list">
                            <li><Link to="/practice-areas">Criminal Litigation & Bail</Link></li>
                            <li><Link to="/practice-areas">Civil Suits & Appeals</Link></li>
                            <li><Link to="/practice-areas">Family & Matrimonial Law</Link></li>
                            <li><Link to="/practice-areas">138 NI Act Cheque Bounce</Link></li>
                            <li><Link to="/practice-areas">MACT & Consumer Matters</Link></li>
                            <li><Link to="/practice-areas">Waqf & Property Disputes</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact & Chamber Locations */}
                    <div className="lawcrest-footer-col col-contact">
                        <h4 className="footer-heading">Chambers & Contact</h4>
                        <ul className="footer-contact-list">
                            <li>
                                <MapPin size={18} className="contact-icon" />
                                <div>
                                    <strong>Delhi High Court Chamber:</strong>
                                    <span>Lawyers Chamber Block-I, Consultation Room, New Delhi-110003</span>
                                </div>
                            </li>
                            <li>
                                <MapPin size={18} className="contact-icon" />
                                <div>
                                    <strong>Chamber Office:</strong>
                                    <span>G-74, 4th Floor, Muradi Rd, Batla House, Jamia Nagar, Okhla, New Delhi-110025</span>
                                </div>
                            </li>
                            <li>
                                <Phone size={18} className="contact-icon" />
                                <div>
                                    <a href="tel:+919250845823">+91 9250845823</a>
                                </div>
                            </li>
                            <li>
                                <Mail size={18} className="contact-icon" />
                                <div>
                                    <a href="mailto:aa.affanhus@gmail.com">aa.affanhus@gmail.com</a>
                                </div>
                            </li>
                            <li>
                                <Clock size={18} className="contact-icon" />
                                <div>
                                    <span>Mon - Fri: 4:00 PM - 8:00 PM<br />Sat: By Appointment</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Giant Typographic Watermark Branding */}
                <div className="lawcrest-giant-watermark" aria-hidden="true">
                    <span>SARFARAZ LAW</span>
                </div>

                {/* Bottom Bar with Compliance Notice */}
                <div className="lawcrest-footer-bottom">
                    <p className="copyright-text">
                        &copy; {new Date().getFullYear()} Sarfaraz Hussain Advocate Law Offices. All Rights Reserved.
                    </p>
                    <p className="compliance-text">
                        <strong>Bar Council of India Disclaimer:</strong> As per the Bar Council rules, this website is meant solely for informational purposes and does not solicit work or advertise legal services.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
