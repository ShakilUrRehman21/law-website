import React from 'react';
import { MapPin, Phone, Mail, Clock, Send, ShieldCheck, ArrowUpRight } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="lawcrest-contact-page">
            {/* Dark Hero */}
            <section className="contact-hero section-dark">
                <div className="container">
                    <div className="contact-hero-content">
                        <span className="pill-badge pill-badge-dark">Schedule Consultation</span>
                        <h1 className="editorial-title text-white">Contact & Chambers</h1>
                        <p className="contact-hero-lead">
                            Schedule a privileged legal consultation to discuss your matters. Our dedicated team is prepared to provide decisive representation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Split Contact Section (Cream Background) */}
            <section className="contact-main-section section-cream">
                <div className="container">
                    <div className="contact-split-grid">
                        
                        {/* Left Column: Chamber Info & Addresses */}
                        <div className="contact-info-col">
                            <span className="statement-tag">Direct Access</span>
                            <h2 className="contact-col-title">Chamber Locations</h2>
                            <p className="contact-col-desc">
                                We welcome clients for in-person consultations at both our Delhi High Court chambers and South Delhi office.
                            </p>

                            <div className="chamber-cards-stack">
                                {/* Delhi High Court */}
                                <div className="chamber-location-card">
                                    <div className="chamber-icon-box">
                                        <MapPin size={22} />
                                    </div>
                                    <div className="chamber-details-box">
                                        <h3>Delhi High Court Chamber</h3>
                                        <p>Lawyers Chamber Block-I, Consultation Room, New Delhi-110003</p>
                                        <span className="chamber-note">Primary Litigation Chamber</span>
                                    </div>
                                </div>

                                {/* Batla House Office */}
                                <div className="chamber-location-card">
                                    <div className="chamber-icon-box">
                                        <MapPin size={22} />
                                    </div>
                                    <div className="chamber-details-box">
                                        <h3>South Delhi Office</h3>
                                        <p>G-74, 4th Floor, Muradi Rd, Batla House, Jamia Nagar, Okhla, New Delhi, Delhi 110025</p>
                                        <span className="chamber-note">Evening Client Consultations</span>
                                    </div>
                                </div>

                                {/* Phone & Email */}
                                <div className="contact-meta-row">
                                    <div className="meta-box">
                                        <div className="meta-icon"><Phone size={18} /></div>
                                        <div>
                                            <h4>Direct Phone</h4>
                                            <a href="tel:+919250845823">+91 9250845823</a>
                                        </div>
                                    </div>

                                    <div className="meta-box">
                                        <div className="meta-icon"><Mail size={18} /></div>
                                        <div>
                                            <h4>Official Email</h4>
                                            <a href="mailto:aa.affanhus@gmail.com">aa.affanhus@gmail.com</a>
                                        </div>
                                    </div>
                                </div>

                                {/* Consultation Hours */}
                                <div className="chamber-hours-card">
                                    <Clock size={20} className="hours-icon" />
                                    <div>
                                        <strong>Consultation Hours:</strong>
                                        <p>Monday - Friday: 4:00 PM - 8:00 PM</p>
                                        <p>Saturday: By Prior Appointment Only</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Request Consultation Form */}
                        <div className="contact-form-col">
                            <div className="consultation-form-card">
                                <div className="form-card-header">
                                    <span className="pill-badge pill-badge-cream">Confidential Inquiry</span>
                                    <h3>Request a Consultation</h3>
                                    <p>Fill out the details below. We aim to respond within 24 hours.</p>
                                </div>

                                <form className="lawcrest-form" action="https://formsubmit.co/sanskariscout@gmail.com" method="POST">
                                    <input type="hidden" name="_captcha" value="false" />
                                    <input type="hidden" name="_next" value="https://advocate-sarfaraz-website.vercel.app/" />

                                    <div className="form-field-group">
                                        <label htmlFor="name">Full Name *</label>
                                        <input type="text" id="name" name="name" placeholder="Advocate / Client Full Name" required />
                                    </div>

                                    <div className="form-row-two">
                                        <div className="form-field-group">
                                            <label htmlFor="email">Email Address *</label>
                                            <input type="email" id="email" name="email" placeholder="client@example.com" required />
                                        </div>
                                        <div className="form-field-group">
                                            <label htmlFor="phone">Phone Number *</label>
                                            <input type="tel" id="phone" name="phone" placeholder="+91 98XXX XXXXX" required />
                                        </div>
                                    </div>

                                    <div className="form-field-group">
                                        <label htmlFor="subject">Legal Domain / Subject *</label>
                                        <input type="text" id="subject" name="subject" placeholder="e.g. Criminal Bail, Civil Suit, MACT, Family Law" required />
                                    </div>

                                    <div className="form-field-group">
                                        <label htmlFor="message">Summary of Case / Legal Matter *</label>
                                        <textarea id="message" name="message" rows="5" placeholder="Briefly describe the key facts, court location, or current status of proceedings..." required></textarea>
                                    </div>

                                    <button type="submit" className="btn-lawcrest btn-lawcrest-solid-dark form-submit-btn">
                                        <span>Send Consultation Request</span>
                                        <Send size={16} />
                                    </button>

                                    <p className="form-confidentiality-notice">
                                        <ShieldCheck size={14} className="notice-icon" />
                                        <span>All communications are treated with strict advocate-client professional privilege.</span>
                                    </p>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Embedded Location Map */}
            <section className="lawcrest-map-section">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50736.76256254008!2d77.2162897582031!3d28.566107100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce38a6cfefc51%3A0x52b130a99342d649!2sSarfaraz%20Hussain-Advocate!5e1!3m2!1sen!2sus!4v1772139932318!5m2!1sen!2sus"
                    width="100%"
                    height="450"
                    style={{ border: 0, display: 'block' }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Law Office Location"
                ></iframe>
            </section>
        </div>
    );
};

export default Contact;
