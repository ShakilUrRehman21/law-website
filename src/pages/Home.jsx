import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Shield,
    Scale,
    Users,
    FileText,
    Home as HomeIcon,
    BookOpen,
    Search,
    Briefcase,
    TrendingUp,
    UserCheck,
    Phone,
    ArrowUpRight,
    ArrowLeft,
    ArrowRight,
    Plus,
    Minus,
    CheckCircle2,
    Star,
    Award,
    MapPin,
    MessageCircle,
    Calendar,
    ChevronRight,
    Sparkles
} from 'lucide-react';
import './Home.css';

// Existing team members from original data with rich senior-level attributes
const teamMembers = [
    { 
        id: "sarfaraz",
        name: "Sarfaraz Hussain", 
        role: "Advocate • Delhi High Court", 
        court: "Supreme Court of India & Delhi High Court",
        experience: "25+ Years Dedicated Standing",
        specialty: "Criminal Litigation, Special Leave Petitions (SLP), Writs & Bail Matters",
        img: "/sarfaraz_hussain.png", 
        featured: true,
        category: "senior",
        
    },
    { 
        id: "mf-khan",
        name: "M. F. Khan", 
        role: "Former Public Prosecutor • Supreme Court", 
        court: "Supreme Court of India",
        experience: "Senior Prosecution & Constitutional Counsel",
        specialty: "High-Stakes Criminal Appeals, Murder & Special Acts Litigation",
        img: "/mf_khan.png",
        featured: false,
        category: "senior",
        
    },
    { 
        id: "ali",
        name: "Ali", 
        role: "Junior Advocate", 
        court: "Delhi High Court & District Courts",
        experience: "Courtroom Litigation Associate",
        specialty: "Bail Hearings, Trial Procedures & Evidentiary Analysis",
        img: "/ali.png",
        featured: false,
        category: "junior",
        
    },
    { 
        id: "sabahat",
        name: "Sabahat Hussain", 
        role: "Associate Advocate", 
        court: "Delhi High Court & Sessions Courts",
        experience: "Civil & Commercial Associate",
        specialty: "Civil Suits, Injunctions, Property Disputes & Specific Performance",
        img: "/sabahat.png",
        featured: false,
        category: "associate",
        
    },
    { 
        id: "anita",
        name: "Anita", 
        role: "Junior Advocate", 
        court: "District & Sessions Courts, Delhi",
        experience: "Matrimonial & Claims Associate",
        specialty: "Family & Matrimonial Law, Custody & MACT Tribunal Claims",
        img: "/anita.png",
        featured: false,
        category: "junior",
        
    },
    { 
        id: "affan",
        name: "Affan Husain", 
        role: "Intern", 
        court: "Chamber Research & Judicial Filings",
        experience: "Legal Research Scholar",
        specialty: "Case Precedents, Judicial Research & Registry Compliance",
        img: "/affan.png",
        featured: false,
        category: "junior",
        
    },
    { 
        id: "zaki",
        name: "Mohd. Zaki", 
        role: "Associate Advocate", 
        court: "Delhi High Court & District Courts",
        experience: "Dispute Resolution Associate",
        specialty: "138 NI Act Cheque Dishonour, Consumer Forums & Waqf Matters",
        img: "/zaki.png",
        featured: false,
        category: "associate",
        
    }
];

// Existing Practice Highlights & Breakdown
const practiceAreasData = [
    {
        id: "criminal",
        title: "Criminal Litigation",
        tag: "Apex & High Court Defense",
        description: "Robust defense in complex criminal trials, bail matters, and appellate proceedings before the High Court and Supreme Court of India.",
        items: [
            "1. Special Leave Petitions (SLP) in Supreme Court of India",
            "2. Regular, Interim & Anticipatory Bail Proceedings",
            "3. Criminal Writs & Appeals (Murder, Robbery, POCSO, NDPS)",
            "4. 138 NI Act Cheque Bounce Defense & Revisions",
            "5. FIR Quashing under Section 482 Cr.P.C."
        ]
    },
    {
        id: "civil",
        title: "Civil Litigation",
        tag: "High Court & District Courts",
        description: "Strategic representation in property disputes, contracts, injunctions, and commercial rights across Delhi & NCR courts.",
        items: [
            "1. Comprehensive Civil Suits & Temporary Injunctions",
            "2. Regular First Appeals (RFA) & Civil Revisions",
            "3. Specific Performance & Breach of Contracts",
            "4. Recovery Suits (Order 37 CPC) & Money Claims",
            "5. High Court Writ Petitions under Article 226"
        ]
    },
    {
        id: "family",
        title: "Family Law",
        tag: "Matrimonial & Custody Counsel",
        description: "Compassionate yet firm handling of divorce proceedings, child custody disputes, maintenance, and family estate settlements.",
        items: [
            "1. Mutual Consent & Contested Divorce Proceedings",
            "2. Guardianship & Child Custody Determinations",
            "3. Maintenance & Alimony under Section 125 Cr.P.C.",
            "4. Domestic Violence (DV Act) Proceedings",
            "5. Family Settlement & Inheritance Matters"
        ]
    },
    {
        id: "consumer-mact",
        title: "Consumer & MACT Cases",
        tag: "Claims & Compensation Tribunals",
        description: "Protecting consumer rights and securing maximum financial compensation in motor vehicle accident claims.",
        items: [
            "1. Motor Accident Claims Tribunals (MACT) Proceedings",
            "2. Maximum Compensation for Victims & Families",
            "3. National, State & District Consumer Commissions",
            "4. Deficiencies in Service & Product Liability Claims",
            "5. Countering Unjustified Insurance Repudiations"
        ]
    },
    {
        id: "waqf-property",
        title: "Waqf Matters & Property",
        tag: "Real Estate & Tribunal Litigation",
        description: "Specialized representation before Waqf Boards, Tribunals, and civil courts for property disputes and title claims.",
        items: [
            "1. Waqf Property Management & Title Claims",
            "2. Waqf Tribunal & High Court Proceedings",
            "3. Real Estate Title Verification & Documentation",
            "4. Partition, Eviction & Possession Suits",
            "5. Landlord & Tenant Legal Conflicts"
        ]
    }
];

// FAQ items based on existing practice and consultation process
const faqItems = [
    {
        q: "What types of legal services does Sarfaraz Hussain Advocate Law Offices provide?",
        a: "We offer comprehensive legal counsel and litigation services across Criminal Law (including SLP in Supreme Court, Bail, POCSO, 138 NI Act), Civil Suits & Appeals, Family & Matrimonial disputes, Consumer Commission cases, Motor Accident Claims (MACT), and Waqf matters."
    },
    {
        q: "Which courts and judicial tribunals do you appear before?",
        a: "Our advocates regularly practice before the Supreme Court of India, the High Court of Delhi, all District and Sessions Courts across Delhi & NCR, Waqf Tribunals, MACT Courts, and Consumer Dispute Redressal Commissions."
    },
    {
        q: "How can I schedule a consultation with Advocate Sarfaraz Hussain?",
        a: "You can schedule a consultation by clicking the 'Book a Consultation' button on this website, calling our chamber directly at +91 9818225972, or messaging us on WhatsApp. In-person chamber meetings are conducted at the Delhi High Court Chamber and Batla House office."
    },
    {
        q: "What documents should I bring to the initial consultation?",
        a: "Please bring all relevant case documents, including copies of FIRs, court notices, agreements, contracts, prior orders/judgments, or correspondence related to the dispute so that we can conduct an in-depth factual and statutory assessment."
    },
    {
        q: "How do you handle emergency matters such as anticipatory bail or stay orders?",
        a: "Urgent matters involving arrest threats, anticipatory bail, or interim injunction stay orders receive immediate priority. Our team prepares urgent listings and mentions before the appropriate roster bench without delay."
    }
];

const Home = () => {
    // FAQ state
    const [openFaq, setOpenFaq] = useState(0);

    // Practice areas ONE-AT-A-TIME carousel state
    const [currentPractice, setCurrentPractice] = useState(0);

    // Team Filter and Spotlight state
    const [teamFilter, setTeamFilter] = useState('all');
    const [selectedAttorney, setSelectedAttorney] = useState(teamMembers[0]);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? -1 : index);
    };

    // Practice carousel Next & Prev handlers
    const handleNextPractice = () => {
        setCurrentPractice((prev) => (prev + 1) % practiceAreasData.length);
    };

    const handlePrevPractice = () => {
        setCurrentPractice((prev) => (prev - 1 + practiceAreasData.length) % practiceAreasData.length);
    };

    // Filtered team members
    const filteredTeam = teamMembers.filter((m) => {
        if (teamFilter === 'all') return true;
        if (teamFilter === 'senior') return m.category === 'senior';
        if (teamFilter === 'associate') return m.category === 'associate' || m.category === 'junior';
        return true;
    });

    return (
        <div className="lawcrest-home">

            {/* 1. HERO SECTION (Clean Split Layout, Normal Rectangular Shape, ZERO Overlap) */}
            <section className="lawcrest-hero section-dark">
                <div className="container">
                    <div className="hero-split-grid">
                        
                        {/* Left Column: Headline, Subtitle, CTA Actions */}
                        <div className="hero-content-col">
                            <div className="hero-badge-wrap">
                                <span className="pill-badge pill-badge-dark">
                                    Advocate & Legal Counsel
                                </span>
                            </div>

                            <h1 className="hero-massive-headline">
                                Your Only Trusted<br />Law Firm
                            </h1>

                            <p className="hero-body-text">
                                Protecting Your Rights. Defending Your Future.<br />
                                Experienced legal representation across Delhi & NCR. Authoritative, trustworthy, and firmly established.
                            </p>
                            
                            <div className="hero-cta-actions">
                                <Link to="/contact" className="btn-lawcrest btn-lawcrest-solid-light">
                                    <span>Book a Consultation</span>
                                    <ArrowUpRight size={16} />
                                </Link>
                            </div>

                            <div className="hero-trust-summary">
                                <div className="trust-pill-tag">
                                    <CheckCircle2 size={15} className="pill-check" />
                                    <span>25+ Years Standing</span>
                                </div>
                                <div className="trust-pill-tag">
                                    <CheckCircle2 size={15} className="pill-check" />
                                    <span>Supreme Court & Delhi High Court</span>
                                </div>
                                <div className="trust-pill-tag">
                                    <CheckCircle2 size={15} className="pill-check" />
                                    <span>10,000+ Cases Success</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Normal Rectangular Portrait Card (No Arch, No Weird Lines) */}
                        <div className="hero-portrait-col">
                            <div className="hero-normal-card">
                                <div className="normal-image-wrapper">
                                    <img 
                                        src="/sarfaraz_hussain.png" 
                                        alt="Advocate Sarfaraz Hussain" 
                                        className="normal-portrait-photo"
                                    />
                                </div>
                                <div className="normal-card-caption">
                                    <div className="caption-text">
                                        <strong>Sarfaraz Hussain</strong>
                                        <span>Advocate, Supreme Court of India & Delhi High Court</span>
                                    </div>
                                    <div className="caption-badge">
                                        <span>Chamber Block-I</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 2. JURISDICTIONS & TRUST RIBBON (Cream Background) */}
            <section className="lawcrest-trust-ribbon section-cream">
                <div className="container">
                    <div className="trust-ribbon-content">
                        <div className="trust-ribbon-label">
                            <span>Practicing Across Courts & Tribunals</span>
                        </div>
                        <div className="trust-ribbon-badges">
                            <span className="trust-badge">Supreme Court of India</span>
                            <span className="trust-badge">Delhi High Court</span>
                            <span className="trust-badge">District & Sessions Courts</span>
                            <span className="trust-badge">Waqf Tribunals</span>
                            <span className="trust-badge">MACT Courts</span>
                            <span className="trust-badge">Consumer Commissions</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. EDITORIAL ABOUT STATEMENT & STATS (Cream Background) */}
            <section className="lawcrest-about-statement section-cream">
                <div className="container">
                    <div className="about-statement-grid">
                        <div className="about-label-col">
                            <span className="statement-tag">About Us</span>
                        </div>
                        <div className="about-text-col">
                            <p className="statement-large-text">
                                At Sarfaraz Hussain Advocate Law Offices, we've been turning complex legal challenges into favorable outcomes across Delhi & NCR, handling over 10,000+ cases. We take pride in delivering tailored solutions that match your rights, cases, and future.
                            </p>
                        </div>
                    </div>

                    {/* Stats 4-Column Bar with hairline borders */}
                    <div className="lawcrest-stats-grid">
                        <div className="stat-card">
                            <span className="stat-number">1000+</span>
                            <span className="stat-title">Happy Clients</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-number">10000+</span>
                            <span className="stat-title">Cases Success</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-number">2500+</span>
                            <span className="stat-title">Recovery Matters</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-number">800+</span>
                            <span className="stat-title">Cases Handled</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. WHY CLIENTS TRUST US (Split Sticky Layout on Cream) */}
            <section className="lawcrest-why-trust section-cream">
                <div className="container">
                    <div className="section-title-wrap">
                        <h2 className="editorial-title">Why Clients Trust Us</h2>
                        <p className="editorial-subtitle">
                            We fight tirelessly for every client because your future is too important to leave to chance. Integrity. Excellence. Empathy.
                        </p>
                    </div>

                    <div className="why-trust-grid">
                        {/* Left Column: Portrait Card */}
                        <div className="why-trust-image-card">
                            <div className="image-frame">
                                <img src="/sarfaraz_hussain.png" alt="Advocate Sarfaraz Hussain" />
                                <div className="image-card-caption">
                                    <strong>Sarfaraz Hussain</strong>
                                    <span>Advocate • Supreme Court & Delhi High Court</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Numbered List */}
                        <div className="why-trust-list">
                            <div className="trust-item">
                                <span className="trust-item-num">1.</span>
                                <div className="trust-item-body">
                                    <h3 className="trust-item-title">Case Investigation</h3>
                                    <p className="trust-item-desc">
                                        Thorough fact-finding and evidence gathering to build an unshakable legal foundation before entering any courtroom.
                                    </p>
                                </div>
                            </div>

                            <div className="trust-item">
                                <span className="trust-item-num">2.</span>
                                <div className="trust-item-body">
                                    <h3 className="trust-item-title">Strategic Litigation</h3>
                                    <p className="trust-item-desc">
                                        Tactical courtroom approach and decisive arguments designed to achieve the most favorable outcome for your matter.
                                    </p>
                                </div>
                            </div>

                            <div className="trust-item">
                                <span className="trust-item-num">3.</span>
                                <div className="trust-item-body">
                                    <h3 className="trust-item-title">Legal Analysis</h3>
                                    <p className="trust-item-desc">
                                        In-depth interpretation of statutory precedents, High Court rulings, and constitutional provisions relevant to your case.
                                    </p>
                                </div>
                            </div>

                            <div className="trust-item">
                                <span className="trust-item-num">4.</span>
                                <div className="trust-item-body">
                                    <h3 className="trust-item-title">Dedicated Representation</h3>
                                    <p className="trust-item-desc">
                                        Personalized attention, constant transparency, and unwavering support from your initial consultation through final judgment.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. PRACTICE AREAS: SEEN ONE AT A TIME + FUNCTIONAL NEXT / PREV BUTTONS */}
            <section className="lawcrest-practice-one-at-a-time section-dark">
                <div className="container">
                    
                    {/* Header with Title and Working Next/Prev Buttons */}
                    <div className="practice-slider-header">
                        <div>
                            <span className="pill-badge pill-badge-dark">Areas of Expertise</span>
                            <h2 className="editorial-title text-white">Our Practice Areas</h2>
                            <p className="editorial-subtitle text-muted-dark">
                                Comprehensive legal solutions tailored to your unique challenges and statutory proceedings.
                            </p>
                        </div>

                        {/* Working Carousel Navigation Controls */}
                        <div className="practice-slider-controls">
                            <div className="slide-counter-badge">
                                <span className="current-num">0{currentPractice + 1}</span>
                                <span className="divider-slash">/</span>
                                <span className="total-num">0{practiceAreasData.length}</span>
                            </div>

                            <div className="slider-arrow-btns">
                                <button
                                    onClick={handlePrevPractice}
                                    className="slider-btn"
                                    aria-label="Previous Practice Area"
                                    title="Previous Practice Area"
                                >
                                    <ArrowLeft size={19} />
                                </button>
                                <button
                                    onClick={handleNextPractice}
                                    className="slider-btn"
                                    aria-label="Next Practice Area"
                                    title="Next Practice Area"
                                >
                                    <ArrowRight size={19} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Viewport showing EXACTLY ONE card at a time */}
                    <div className="single-card-viewport">
                        <div 
                            className="single-card-track"
                            style={{ transform: `translateX(-${currentPractice * 100}%)` }}
                        >
                            {practiceAreasData.map((area, idx) => (
                                <div key={area.id} className="single-practice-slide">
                                    <div className="slide-card-container">
                                        
                                        {/* Left Side: Domain Details & Action */}
                                        <div className="slide-card-left">
                                            <div className="slide-meta-row">
                                                <span className="slide-tag-pill">{area.tag}</span>
                                                <span className="slide-number-display">0{idx + 1}</span>
                                            </div>

                                            <h3 className="slide-title">{area.title}</h3>
                                            <p className="slide-description">{area.description}</p>

                                            <div className="slide-actions-group">
                                                <Link to="/contact" className="btn-lawcrest btn-lawcrest-solid-light">
                                                    <span>Consult on {area.title}</span>
                                                    <ArrowUpRight size={16} />
                                                </Link>
                                                <Link to="/practice-areas" className="btn-lawcrest btn-lawcrest-outline-light">
                                                    <span>View All Domains</span>
                                                </Link>
                                            </div>
                                        </div>

                                        {/* Right Side: Numbered Breakdown */}
                                        <div className="slide-card-right">
                                            <div className="proceedings-box">
                                                <h4 className="proceedings-heading">Litigation & Proceedings Covered:</h4>
                                                <ul className="proceedings-list">
                                                    {area.items.map((item, itemIdx) => (
                                                        <li key={itemIdx} className="proceeding-item">
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Indicator Dots */}
                    <div className="practice-dots-row">
                        {practiceAreasData.map((area, dotIdx) => (
                            <button
                                key={dotIdx}
                                onClick={() => setCurrentPractice(dotIdx)}
                                className={`practice-indicator-dot ${currentPractice === dotIdx ? 'active' : ''}`}
                                aria-label={`Go to ${area.title}`}
                                title={area.title}
                            >
                                <span className="dot-label">{area.title}</span>
                            </button>
                        ))}
                    </div>

                </div>
            </section>

            {/* 6. MEET OUR ATTORNEYS: INTERACTIVE SHOWCASE (Senior Developer Experience) */}
            <section className="lawcrest-team-interactive section-cream">
                <div className="container">
                    
                    {/* Header */}
                    <div className="section-title-wrap text-center">
                        <span className="pill-badge pill-badge-cream">Legal Counsel</span>
                        <h2 className="editorial-title">Meet Our Attorneys</h2>
                        <p className="editorial-subtitle">
                            Lawyers you can actually talk to. We're not hiding behind desks or legal jargon — we're here to listen, strategize, and guide.
                        </p>

                        {/* Interactive Category Filter Pills */}
                        <div className="team-filter-pill-group">
                            <button
                                className={`team-filter-btn ${teamFilter === 'all' ? 'active' : ''}`}
                                onClick={() => setTeamFilter('all')}
                            >
                                All Counsel ({teamMembers.length})
                            </button>
                            <button
                                className={`team-filter-btn ${teamFilter === 'senior' ? 'active' : ''}`}
                                onClick={() => setTeamFilter('senior')}
                            >
                                Senior Advocates (2)
                            </button>
                            <button
                                className={`team-filter-btn ${teamFilter === 'associate' ? 'active' : ''}`}
                                onClick={() => setTeamFilter('associate')}
                            >
                                Associates & Staff (5)
                            </button>
                        </div>
                    </div>

                    {/* Spotlight Hero Box (Click any card to inspect) */}
                    <div className="attorney-spotlight-dossier">
                        <div className="spotlight-portrait-box">
                            <img src={selectedAttorney.img} alt={selectedAttorney.name} />
                            <div className="spotlight-active-badge">
                                <Sparkles size={14} />
                                <span>Active</span>
                            </div>
                        </div>

                        <div className="spotlight-content-box">
                            <div className="spotlight-header-meta">
                                <span className="spotlight-court-tag">{selectedAttorney.court}</span>
                                <span className="spotlight-exp-tag">{selectedAttorney.experience}</span>
                            </div>

                            <h3 className="spotlight-attorney-name">{selectedAttorney.name}</h3>
                            <p className="spotlight-attorney-role">{selectedAttorney.role}</p>

                            <div className="spotlight-specialty-block">
                                <span className="block-label">Core Focus & Specialization:</span>
                                <p className="block-val">{selectedAttorney.specialty}</p>
                            </div>

                            <div className="spotlight-actions-row">
                                <Link to="/contact" className="btn-lawcrest btn-lawcrest-outline-dark">
                                    <span>Book Consultation</span>
                                    <ArrowUpRight size={15} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Interactive Tilted Cards Deck */}
                    <div className="lawcrest-interactive-team-deck">
                        {filteredTeam.map((member, index) => {
                            const isSelected = selectedAttorney.id === member.id;
                            const rotationClass = index % 2 === 0 ? 'tilt-left' : 'tilt-right';

                            return (
                                <div
                                    key={member.id}
                                    className={`interactive-team-card ${rotationClass} ${isSelected ? 'selected' : ''}`}
                                    onClick={() => setSelectedAttorney(member)}
                                >
                                    <div className="card-photo-wrapper">
                                        <img src={member.img} alt={member.name} />
                                        
                                        {/* Floating Quick Action Overlay */}
                                        <div className="card-action-bar">
                                            <a 
                                                href={`tel:${member.phone}`}
                                                className="quick-icon-btn"
                                                title="Call Advocate"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <Phone size={14} />
                                            </a>
                                            <a 
                                                href="https://wa.me/919818225972" 
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="quick-icon-btn"
                                                title="WhatsApp"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <MessageCircle size={14} />
                                            </a>
                                        </div>
                                    </div>

                                    <div className="card-info-footer">
                                        <h4 className="card-member-name">{member.name}</h4>
                                        <span className="card-member-role">{member.role}</span>
                                        <div className="card-select-hint">
                                            <span>{isSelected ? '✓ Viewing' : 'Click to inspect profile'}</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </section>

            {/* 7. CLIENT TESTIMONIALS (Cream Background) */}
            <section className="lawcrest-testimonials section-cream">
                <div className="container">
                    <div className="section-title-wrap text-center">
                        <span className="pill-badge pill-badge-cream">Client Feedback</span>
                        <h2 className="editorial-title">Testimonials</h2>
                        <p className="editorial-subtitle">
                            Our clients share their honest experiences so you can feel confident before you walk in.
                        </p>
                    </div>

                    <div className="testimonials-grid">
                        <div className="testimonial-card">
                            <div className="testimonial-stars">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} fill="#c5a059" color="#c5a059" />
                                ))}
                            </div>
                            <p className="testimonial-quote">
                                "Advocate Sarfaraz Hussain provided exceptional defense in our high-stakes criminal bail matter. His strategic courtroom acumen and profound statutory clarity resulted in a swift and favorable outcome."
                            </p>
                            <div className="testimonial-author">
                                <strong>Rajesh Sharma</strong>
                                <span>Criminal Litigation Matter</span>
                            </div>
                        </div>

                        <div className="testimonial-card">
                            <div className="testimonial-stars">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} fill="#c5a059" color="#c5a059" />
                                ))}
                            </div>
                            <p className="testimonial-quote">
                                "Handled our multi-crore property dispute before the Delhi High Court with exemplary precision. Highly trustworthy, disciplined, and transparent legal counsel throughout."
                            </p>
                            <div className="testimonial-author">
                                <strong>Khurshid Alam</strong>
                                <span>Civil & Property Dispute</span>
                            </div>
                        </div>

                        <div className="testimonial-card">
                            <div className="testimonial-stars">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} fill="#c5a059" color="#c5a059" />
                                ))}
                            </div>
                            <p className="testimonial-quote">
                                "In an extremely sensitive matrimonial and custody matter, the firm guided us with genuine compassion and decisive legal strategy, securing fair settlements."
                            </p>
                            <div className="testimonial-author">
                                <strong>Shabana Parveen</strong>
                                <span>Family Law Settlement</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. FREQUENTLY ASKED QUESTIONS (Dark Obsidian like Lawcrest) */}
            <section className="lawcrest-faq section-dark">
                <div className="container">
                    <div className="faq-header-bar">
                        <div>
                            <span className="pill-badge pill-badge-dark">Got Questions?</span>
                            <h2 className="editorial-title text-white">Frequently Asked Questions</h2>
                            <p className="editorial-subtitle text-muted-dark">
                                We've gathered the most common questions so you start with clarity, not confusion.
                            </p>
                        </div>
                        <Link to="/contact" className="btn-lawcrest btn-lawcrest-outline-light">
                            <span>Contact Us</span>
                            <ArrowUpRight size={16} />
                        </Link>
                    </div>

                    <div className="faq-split-layout">
                        {/* Left Side: Chamber Info Card */}
                        <div className="faq-visual-card">
                            <div className="faq-chamber-preview">
                                <div className="chamber-preview-top">
                                    <div className="chamber-emblem">
                                        <img src="/hero-logo.png" alt="Advocate Emblem" />
                                    </div>
                                    <div className="chamber-title-text">
                                        <h4>Delhi High Court Chambers</h4>
                                        <p>Lawyers Chamber Block-I, New Delhi</p>
                                    </div>
                                </div>

                                <div className="chamber-feature-list">
                                    <div className="chamber-feature">
                                        <CheckCircle2 size={18} className="feat-icon" />
                                        <span>Personal Case Evaluation by Senior Advocates</span>
                                    </div>
                                    <div className="chamber-feature">
                                        <CheckCircle2 size={18} className="feat-icon" />
                                        <span>Strict Confidentiality Guaranteed</span>
                                    </div>
                                    <div className="chamber-feature">
                                        <CheckCircle2 size={18} className="feat-icon" />
                                        <span>Transparent Assessment of Merits & Risks</span>
                                    </div>
                                </div>  
                            </div>
                        </div>

                        {/* Right Side: Accordion */}
                        <div className="faq-accordion-list">
                            {faqItems.map((item, idx) => {
                                const isOpen = openFaq === idx;
                                return (
                                    <div key={idx} className={`faq-item ${isOpen ? 'active' : ''}`}>
                                        <button
                                            className="faq-question-btn"
                                            onClick={() => toggleFaq(idx)}
                                            aria-expanded={isOpen}
                                        >
                                            <span className="faq-question-text">{item.q}</span>
                                            <span className="faq-toggle-icon">
                                                {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                                            </span>
                                        </button>
                                        <div className="faq-answer-collapse">
                                            <div className="faq-answer-body">
                                                <p>{item.a}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. GRAND CTA BANNER (Dark Obsidian Gradient) */}
            <section className="lawcrest-cta-banner section-dark">
                <div className="container">
                    <div className="cta-banner-inner">
                        <span className="pill-badge pill-badge-dark">Get Legal Clarity</span>
                        <h2 className="cta-headline">
                            Protecting Your Rights.<br />Defending Your Future.
                        </h2>
                        <p className="cta-subtext">
                            Connect with Advocate Sarfaraz Hussain and our dedicated legal team for decisive, experienced counsel.
                        </p>
                        <div className="cta-btn-group">
                            <Link to="/contact" className="btn-lawcrest btn-lawcrest-solid-light">
                                <span>Schedule Consultation</span>
                                <ArrowUpRight size={16} />
                            </Link>
                            <a href="tel:+919818225972" className="btn-lawcrest btn-lawcrest-outline-light">
                                <Phone size={15} />
                                <span>Call Chamber Now</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;
