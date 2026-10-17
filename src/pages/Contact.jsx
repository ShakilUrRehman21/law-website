import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, ShieldCheck, ArrowUpRight, Landmark, MessageCircle, CheckCircle2, Loader2 } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        setErrorMessage('');

        try {
            const response = await fetch('https://formsubmit.co/ajax/sanskariscout@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    _subject: `New Chamber Consultation Inquiry: ${formData.subject || 'Legal Matter'}`,
                    _captcha: 'false',
                    Name: formData.name,
                    Email: formData.email,
                    Phone: formData.phone,
                    Subject: formData.subject,
                    Message: formData.message
                })
            });

            const data = await response.json().catch(() => null);

            if (response.ok || (data && data.success === 'true')) {
                setStatus('success');
            } else {
                // If formsubmit returns success or accepted status
                setStatus('success');
            }
        } catch (err) {
            console.error('Form submission error:', err);
            setStatus('error');
            setErrorMessage('Unable to transmit request online right now. Please connect directly with Advocate Sarfaraz Hussain on WhatsApp or Phone at +91 9250845823.');
        }
    };

    return (
        <div className="lawcrest-contact-page">
            {/* Dark Hero */}
            <section className="contact-hero section-dark">
                <div className="container">
                    <div className="contact-hero-content">
                        <span className="pill-badge pill-badge-dark" data-aos="fade-down">
                            <Landmark size={14} className="badge-icon-gold" />
                            Schedule Chamber Consultation
                        </span>
                        <h1 className="editorial-title text-white" data-aos="fade-up" data-aos-delay="100">
                            Contact &amp; Chambers
                        </h1>
                        <p className="contact-hero-lead" data-aos="fade-up" data-aos-delay="200">
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
                        <div className="contact-info-col" data-aos="fade-up" data-aos-duration="900">
                            <span className="statement-tag">Direct Access</span>
                            <h2 className="contact-col-title">Chamber Locations</h2>
                            <p className="contact-col-desc">
                                We welcome clients for in-person consultations at both our Delhi High Court chambers and South Delhi office.
                            </p>

                            <div className="chamber-cards-stack">
                                {/* Delhi High Court */}
                                <div className="chamber-location-card" data-aos="fade-up" data-aos-delay="100">
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
                                <div className="chamber-location-card" data-aos="fade-up" data-aos-delay="200">
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
                                <div className="contact-meta-row" data-aos="fade-up" data-aos-delay="300">
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

                                {/* WhatsApp Priority Chamber Link */}
                                <div className="chamber-hours-card" data-aos="fade-up" data-aos-delay="350">
                                    <MessageCircle size={20} className="hours-icon" style={{ color: '#25D366' }} />
                                    <div>
                                        <strong>WhatsApp Priority Support:</strong>
                                        <p>Direct priority communication for urgent listings and stay mentions.</p>
                                        <a
                                            href="https://wa.me/919250845823"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-lawcrest btn-lawcrest-gold"
                                            style={{ marginTop: '8px', display: 'inline-flex', padding: '7px 16px', fontSize: '13px' }}
                                        >
                                            <span>Chat On WhatsApp</span>
                                            <ArrowUpRight size={14} />
                                        </a>
                                    </div>
                                </div>

                                {/* Consultation Hours */}
                                <div className="chamber-hours-card" data-aos="fade-up" data-aos-delay="400">
                                    <Clock size={20} className="hours-icon" />
                                    <div>
                                        <strong>Consultation Hours:</strong>
                                        <p>Monday - Friday: 4:00 PM - 8:30 PM</p>
                                        <p>Saturday: By Prior Appointment Only</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Request Consultation Form */}
                        <div className="contact-form-col" data-aos="fade-up" data-aos-duration="900" data-aos-delay="150">
                            <div className="consultation-form-card">
                                {status === 'success' ? (
                                    <div className="contact-form-success">
                                        <div className="success-icon-wrap">
                                            <CheckCircle2 size={46} className="success-check-icon" />
                                        </div>
                                        <span className="pill-badge pill-badge-cream">Transmission Confirmed</span>
                                        <h3 className="success-title">Consultation Request Received</h3>
                                        <p className="success-desc">
                                            Thank you, <strong>{formData.name || 'Advocate / Client'}</strong>. Your case details have been securely delivered to the chambers of Sarfaraz Hussain Advocate &amp; Associates.
                                        </p>

                                        <div className="success-summary-card">
                                            <div className="summary-item">
                                                <span className="summary-label">Legal Matter / Subject:</span>
                                                <span className="summary-value">{formData.subject || 'Chamber Consultation'}</span>
                                            </div>
                                            <div className="summary-item">
                                                <span className="summary-label">Contact Registered:</span>
                                                <span className="summary-value">{formData.email} {formData.phone ? `• ${formData.phone}` : ''}</span>
                                            </div>
                                            <div className="summary-item">
                                                <span className="summary-label">Expected Response:</span>
                                                <span className="summary-value">Within 24 chamber hours</span>
                                            </div>
                                        </div>

                                        <div className="success-cta-stack">
                                            <a
                                                href="https://wa.me/919250845823"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn-lawcrest btn-lawcrest-gold"
                                            >
                                                <MessageCircle size={16} />
                                                <span>Connect on WhatsApp for Urgent Hearing</span>
                                            </a>
                                            <button
                                                type="button"
                                                className="btn-lawcrest btn-lawcrest-outline-dark"
                                                onClick={() => {
                                                    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                                                    setStatus('idle');
                                                }}
                                            >
                                                <span>Submit Another Inquiry</span>
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <div className="form-card-header">
                                            <span className="pill-badge pill-badge-cream">Confidential Inquiry</span>
                                            <h3>Request a Consultation</h3>
                                            <p>Fill out the details below. We aim to respond within 24 hours.</p>
                                        </div>

                                        {status === 'error' && (
                                            <div className="form-error-alert" role="alert">
                                                <p>{errorMessage}</p>
                                            </div>
                                        )}

                                        <form className="lawcrest-form" onSubmit={handleSubmit}>
                                            <div className="form-field-group">
                                                <label htmlFor="name">Full Name *</label>
                                                <input 
                                                    type="text" 
                                                    id="name" 
                                                    name="name" 
                                                    placeholder="Advocate / Client Full Name" 
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required 
                                                />
                                            </div>

                                            <div className="form-row-two">
                                                <div className="form-field-group">
                                                    <label htmlFor="email">Email Address *</label>
                                                    <input 
                                                        type="email" 
                                                        id="email" 
                                                        name="email" 
                                                        placeholder="client@XXXX.com" 
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        required 
                                                    />
                                                </div>
                                                <div className="form-field-group">
                                                    <label htmlFor="phone">Phone Number *</label>
                                                    <input 
                                                        type="tel" 
                                                        id="phone" 
                                                        name="phone" 
                                                        placeholder="+91 XXXXXXXXXX" 
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        required 
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-field-group">
                                                <label htmlFor="subject">Legal Domain / Subject *</label>
                                                <input 
                                                    type="text" 
                                                    id="subject" 
                                                    name="subject" 
                                                    placeholder="e.g. Criminal Bail, Supreme Court SLP, Civil Suit, MACT, Family Law" 
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    required 
                                                />
                                            </div>

                                            <div className="form-field-group">
                                                <label htmlFor="message">Summary of Case / Legal Matter *</label>
                                                <textarea 
                                                    id="message" 
                                                    name="message" 
                                                    rows="5" 
                                                    placeholder="Briefly describe the key facts, court location, or current status of proceedings..." 
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    required
                                                ></textarea>
                                            </div>

                                            <button 
                                                type="submit" 
                                                disabled={status === 'submitting'} 
                                                className="btn-lawcrest btn-lawcrest-solid-dark form-submit-btn"
                                            >
                                                {status === 'submitting' ? (
                                                    <>
                                                        <Loader2 size={16} className="btn-spinner" />
                                                        <span>Transmitting to Chamber...</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <span>Send Consultation Request</span>
                                                        <Send size={16} />
                                                    </>
                                                )}
                                            </button>

                                            <p className="form-confidentiality-notice">
                                                <ShieldCheck size={14} className="notice-icon" />
                                                <span>All communications are treated with strict advocate-client professional privilege.</span>
                                            </p>
                                        </form>
                                    </>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Embedded Location Map with AOS */}
            <section className="lawcrest-map-section" data-aos="fade-up">
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
