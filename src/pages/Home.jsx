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
    Award,
    MapPin,
    MessageCircle,
    Calendar,
    ChevronRight,
    Sparkles,
    GraduationCap,
    Landmark
} from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import './Home.css';

// Senior & Associate Attorneys with verified credentials and imagery
export const teamMembers = [
    { 
        id: "sarfaraz",
        name: "Sarfaraz Hussain", 
        role: "Founder & Lead Counsel", 
        qualification: "B.E. (Civil), LL.B, LL.M (Criminal Law)",
        court: "Supreme Court of India & Delhi High Court",
        experience: "25+ Years Dedicated Standing",
        specialty: "Criminal Litigation, Special Leave Petitions (SLP), Writs, Bail & Civil Disputes",
        cases: "Shivani Bhatnagar Murder Case (for S.P. Sharma), JNU Matters, Najeeb Ahmed Disappearance, Ayodhya Ram Janmabhoomi (Supreme Court)",
        img: "/sarfaraz_hussain.png", 
        phone: "+919250845823",
        featured: true,
        category: "senior",
        bio: "Delhi-based Civil Engineer cum Senior Advocate with 25+ years of distinguished courtroom advocacy. Known for landmark defenses in the Supreme Court of India and Delhi High Court, heading a panel of experienced advocates across Delhi-NCR."
    },
    { 
        id: "mf-khan",
        name: "M. F. Khan", 
        role: "Senior Prosecution & Constitutional Counsel", 
        qualification: "LL.B, LL.M • Ex-Public Prosecutor",
        court: "Supreme Court of India",
        experience: "30+ Years Apex Court Standing",
        specialty: "High-Stakes Criminal Appeals, Murder Trials, Constitutional Petitions & Special Acts",
        cases: "Former Public Prosecutor before the Supreme Court of India; landmark appeals and constitutional references.",
        img: "/mf_khan.png",
        phone: "+919250845823",
        featured: false,
        category: "senior",
        bio: "Former Public Prosecutor at the Supreme Court of India with three decades of appellate trial mastery. Provides strategic counsel on high-stakes criminal appeals and statutory interpretations."
    },
    { 
        id: "affan",
        name: "Affan Husain", 
        role: "Advocate • Litigation Counsel", 
        qualification: "B.A. LL.B (Hons.)",
        court: "Delhi High Court & District Courts",
        experience: "Litigation & Defense Counsel",
        specialty: "Criminal Defense, Trial Court Advocacy, SLP Precedents & High Court Filings",
        cases: "Assisting lead counsel in High Court criminal revisions, bail applications, and Supreme Court filings.",
        img: "/images/team-06.jpg", // Affan Husain, Advocate
        phone: "+919250845823",
        featured: false,
        category: "advocate",
        bio: "Dedicated courtroom advocate focusing on criminal trials, judicial precedents, evidentiary scrutiny, and registry compliance across Delhi High Court and Sessions courts."
    },
    { 
        id: "sabahat",
        name: "Sabahat Hussain", 
        role: "Associate Advocate", 
        qualification: "LL.B, B.Com",
        court: "Delhi High Court & Sessions Courts",
        experience: "Civil & Commercial Associate",
        specialty: "Civil Suits, Injunctions, Property Disputes & Specific Performance",
        cases: "Representation in commercial contract litigation, temporary injunctions, partition suits, and civil appeals.",
        img: "/sabahat.png",
        phone: "+919250845823",
        featured: false,
        category: "associate",
        bio: "Specializes in complex civil litigation, recovery suits under Order 37 CPC, commercial contracts, and real estate title adjudication before High Court and District benches."
    },
    { 
        id: "zaki",
        name: "Mohd. Zaki", 
        role: "Associate Advocate", 
        qualification: "B.A. LL.B",
        court: "Delhi High Court & District Courts",
        experience: "Dispute Resolution & Tribunal Associate",
        specialty: "138 NI Act Cheque Dishonour, Consumer Forums & Waqf Tribunal Matters",
        cases: "Appeared in extensive Negotiable Instruments Act trials and Waqf property management disputes.",
        img: "/zaki.png",
        phone: "+919250845823",
        featured: false,
        category: "associate",
        bio: "Experienced in summary commercial proceedings, 138 NI Act trials, Consumer Commission redressals, and statutory disputes before the Waqf Tribunal of Delhi."
    },
    { 
        id: "ali",
        name: "Ali", 
        role: "Junior Advocate", 
        qualification: "LL.B",
        court: "Delhi High Court & District Courts",
        experience: "Courtroom Litigation Associate",
        specialty: "Bail Hearings, Trial Procedures & Evidentiary Analysis",
        cases: "Active in daily District Court trial hearings, remand proceedings, and interim bail representations.",
        img: "/ali.png",
        phone: "+919250845823",
        featured: false,
        category: "junior",
        bio: "Handles swift courtroom appearances, trial court filings, witness cross-examination preparation, and emergency bail motions across all Delhi court complexes."
    },
    { 
        id: "anita",
        name: "Anita", 
        role: "Junior Advocate", 
        qualification: "B.A. LL.B",
        court: "District & Sessions Courts, Delhi",
        experience: "Matrimonial & Claims Associate",
        specialty: "Family & Matrimonial Law, Custody & MACT Tribunal Claims",
        cases: "Assisted in mutual consent divorce agreements, Section 125 maintenance, and motor accident compensation.",
        img: "/anita.png",
        phone: "+919250845823",
        featured: false,
        category: "junior",
        bio: "Focuses on empathetic yet firm resolution of family disputes, guardianship, domestic violence proceedings, and MACT compensation claims."
    }
];

// Practice Highlights & Breakdown
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

// FAQ items
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
        a: "You can schedule a consultation by clicking the 'Book a Consultation' button on this website, calling our chamber directly at +91 9250845823, or messaging us on WhatsApp. In-person chamber meetings are conducted at the Delhi High Court Chamber and Batla House office."
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
    const [openFaq, setOpenFaq] = useState(0);
    const [currentPractice, setCurrentPractice] = useState(0);
    const [teamFilter, setTeamFilter] = useState('all');
    const [selectedAttorney, setSelectedAttorney] = useState(teamMembers[0]);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? -1 : index);
    };

    const handleNextPractice = () => {
        setCurrentPractice((prev) => (prev + 1) % practiceAreasData.length);
    };

    const handlePrevPractice = () => {
        setCurrentPractice((prev) => (prev - 1 + practiceAreasData.length) % practiceAreasData.length);
    };

    const filteredTeam = teamMembers.filter((m) => {
        if (teamFilter === 'all') return true;
        if (teamFilter === 'senior') return m.category === 'senior';
        if (teamFilter === 'advocate') return m.category === 'advocate';
        if (teamFilter === 'associate') return m.category === 'associate' || m.category === 'junior';
        return true;
    });

    return (
        <div className="lawcrest-home">

            {/* 1. HERO SECTION (Split Layout with High Impact Entrance Animations) */}
            <section className="lawcrest-hero section-dark">
                <div className="container">
                    <div className="hero-split-grid">
                        
                        {/* Left Column: Headline, Subtitle, CTA Actions */}
                        <div className="hero-content-col">
                            <div className="hero-badge-wrap" data-aos="fade-down" data-aos-duration="700">
                                <span className="pill-badge pill-badge-dark">
                                    <Landmark size={14} className="badge-icon-gold" />
                                    Advocate &amp; Legal Counsel • Delhi High Court &amp; Supreme Court
                                </span>
                            </div>

                            <h1 className="hero-massive-headline" data-aos="fade-up" data-aos-duration="850" data-aos-delay="100">
                                Your Only Trusted<br />Law Firm
                            </h1>

                            <p className="hero-body-text" data-aos="fade-up" data-aos-duration="850" data-aos-delay="200">
                                Protecting Your Rights. Defending Your Future.<br />
                                Premier legal representation across Delhi &amp; NCR. Authoritative, trustworthy, and firmly established with over 25 years of courtroom excellence.
                            </p>
                            
                            <div className="hero-cta-actions" data-aos="fade-up" data-aos-duration="850" data-aos-delay="300">
                                <Link to="/contact" className="btn-lawcrest btn-lawcrest-solid-light">
                                    <span>Book a Consultation</span>
                                    <ArrowUpRight size={16} />
                                </Link>
                                <a href="tel:+919250845823" className="btn-lawcrest btn-lawcrest-outline-light">
                                    <Phone size={15} />
                                    <span>+91 9250845823</span>
                                </a>
                            </div>

                            <div className="hero-trust-summary" data-aos="fade-up" data-aos-duration="850" data-aos-delay="400">
                                <div className="trust-pill-tag">
                                    <CheckCircle2 size={15} className="pill-check" />
                                    <span>25+ Years Standing</span>
                                </div>
                                <div className="trust-pill-tag">
                                    <CheckCircle2 size={15} className="pill-check" />
                                    <span>Supreme Court &amp; Delhi High Court</span>
                                </div>
                                <div className="trust-pill-tag">
                                    <CheckCircle2 size={15} className="pill-check" />
                                    <span>10,000+ Cases Success</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Portrait Card */}
                        <div className="hero-portrait-col">
                            <div className="hero-normal-card" data-aos="zoom-in" data-aos-duration="950" data-aos-delay="200">
                                <div className="normal-image-wrapper">
                                    <img 
                                        src="/sarfaraz_hussain.png" 
                                        alt="Advocate Sarfaraz Hussain" 
                                        className="normal-portrait-photo"
                                    />
                                    <div className="hero-portrait-overlay-glow"></div>
                                </div>
                                <div className="normal-card-caption">
                                    <div className="caption-text">
                                        <strong>Sarfaraz Hussain</strong>
                                        <span>Advocate, Supreme Court of India &amp; Delhi High Court</span>
                                        <small className="caption-sub">B.E. (Civil), LL.B, LL.M (Crl.)</small>
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
                    <div className="trust-ribbon-content" data-aos="fade-up" data-aos-duration="800">
                        <div className="trust-ribbon-label">
                            <span>Practicing Across Courts &amp; Tribunals</span>
                        </div>
                        <div className="trust-ribbon-badges">
                            {["Supreme Court of India", "Delhi High Court", "District & Sessions Courts", "Waqf Tribunals", "MACT Courts", "Consumer Commissions"].map((badge, bIdx) => (
                                <span key={bIdx} className="trust-badge" data-aos="zoom-in" data-aos-delay={bIdx * 70}>
                                    {badge}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. EDITORIAL ABOUT STATEMENT & ANIMATED STATS (Cream Background) */}
            <section className="lawcrest-about-statement section-cream">
                <div className="container">
                    <div className="about-statement-grid" data-aos="fade-up" data-aos-duration="800">
                        <div className="about-label-col">
                            <span className="statement-tag">About Us</span>
                        </div>
                        <div className="about-text-col">
                            <p className="statement-large-text">
                                At Sarfaraz Hussain Advocate Law Offices, we've been turning complex legal challenges into favorable outcomes across Delhi &amp; NCR, handling over 10,000+ cases. We take pride in delivering tailored solutions that protect your statutory rights, family dignity, and constitutional liberty.
                            </p>
                        </div>
                    </div>

                    {/* Stats 4-Column Bar with Animated Counters */}
                    <div className="lawcrest-stats-grid">
                        <div className="stat-card" data-aos="fade-up" data-aos-delay="100">
                            <span className="stat-number">
                                <AnimatedCounter end={1000} suffix="+" />
                            </span>
                            <span className="stat-title">Consulted Clients</span>
                        </div>

                        <div className="stat-card" data-aos="fade-up" data-aos-delay="200">
                            <span className="stat-number">
                                <AnimatedCounter end={10000} suffix="+" />
                            </span>
                            <span className="stat-title">Cases Resolved</span>
                        </div>

                        <div className="stat-card" data-aos="fade-up" data-aos-delay="300">
                            <span className="stat-number">
                                <AnimatedCounter end={2500} suffix="+" />
                            </span>
                            <span className="stat-title">Civil &amp; Recovery Matters</span>
                        </div>

                        <div className="stat-card" data-aos="fade-up" data-aos-delay="400">
                            <span className="stat-number">
                                <AnimatedCounter end={800} suffix="+" />
                            </span>
                            <span className="stat-title">Waqf &amp; Special Writs</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. WHY CLIENTS TRUST US (Split Layout with Scroll Reveals) */}
            <section className="lawcrest-why-trust section-cream">
                <div className="container">
                    <div className="section-title-wrap" data-aos="fade-up">
                        <h2 className="editorial-title">Why Clients Trust Us</h2>
                        <p className="editorial-subtitle">
                            We fight tirelessly for every client because your future is too important to leave to chance. Integrity. Strategic Acumen. Unshakable Empathy.
                        </p>
                    </div>

                    <div className="why-trust-grid">
                        {/* Left Column: Portrait Card */}
                        <div className="why-trust-image-card" data-aos="fade-up" data-aos-duration="850">
                            <div className="image-frame">
                                <img src="/images/scales_of_justice.png" alt="Scales of Justice - Sarfaraz Law" />
                                <div className="image-card-caption">
                                    <strong>Scales of Justice</strong>
                                    <span>Pillars of Integrity, Equity &amp; Law</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Numbered List */}
                        <div className="why-trust-list">
                            <div className="trust-item" data-aos="fade-up" data-aos-delay="100">
                                <span className="trust-item-num">1.</span>
                                <div className="trust-item-body">
                                    <h3 className="trust-item-title">Case Investigation</h3>
                                    <p className="trust-item-desc">
                                        Thorough fact-finding and evidence gathering to build an unshakable legal foundation before entering any courtroom.
                                    </p>
                                </div>
                            </div>

                            <div className="trust-item" data-aos="fade-up" data-aos-delay="200">
                                <span className="trust-item-num">2.</span>
                                <div className="trust-item-body">
                                    <h3 className="trust-item-title">Strategic Litigation</h3>
                                    <p className="trust-item-desc">
                                        Tactical courtroom approach and decisive arguments designed to achieve the most favorable outcome for your matter.
                                    </p>
                                </div>
                            </div>

                            <div className="trust-item" data-aos="fade-up" data-aos-delay="300">
                                <span className="trust-item-num">3.</span>
                                <div className="trust-item-body">
                                    <h3 className="trust-item-title">Legal Precedents Analysis</h3>
                                    <p className="trust-item-desc">
                                        In-depth interpretation of statutory precedents, High Court rulings, and Supreme Court constitutional provisions.
                                    </p>
                                </div>
                            </div>

                            <div className="trust-item" data-aos="fade-up" data-aos-delay="400">
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

            {/* 5. PRACTICE AREAS: ONE AT A TIME SLIDER (Dark Section) */}
            <section className="lawcrest-practice-one-at-a-time section-dark">
                <div className="container">
                    
                    {/* Header with Title and Working Next/Prev Buttons */}
                    <div className="practice-slider-header" data-aos="fade-up">
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
                    <div className="single-card-viewport" data-aos="zoom-in" data-aos-duration="900" data-aos-delay="100">
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
                                                <h4 className="proceedings-heading">Litigation &amp; Proceedings Covered:</h4>
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
                    <div className="practice-dots-row" data-aos="fade-up" data-aos-delay="200">
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

            {/* 6. MEET OUR ATTORNEYS: ELEVATED LUXURY LAWYER SHOWCASE */}
            <section className="lawcrest-team-interactive section-cream" id="attorneys">
                <div className="container">
                    
                    {/* Section Header */}
                    <div className="section-title-wrap text-center" data-aos="fade-up">
                        <span className="pill-badge pill-badge-cream">
                            <Scale size={14} className="badge-icon-gold" />
                            Legal Counsel &amp; Advocates
                        </span>
                        <h2 className="editorial-title">Meet Our Legal Counsel</h2>
                        <p className="editorial-subtitle">
                            Advocates you can personally consult and strategize with. Experienced courtroom leaders, former apex prosecutors, and sharp litigation associates.
                        </p>

                        {/* Interactive Category Filter Pills */}
                        <div className="team-filter-pill-group" data-aos="fade-up" data-aos-delay="150">
                            <button
                                className={`team-filter-btn ${teamFilter === 'all' ? 'active' : ''}`}
                                onClick={() => setTeamFilter('all')}
                            >
                                All Legal Counsel ({teamMembers.length})
                            </button>
                            <button
                                className={`team-filter-btn ${teamFilter === 'senior' ? 'active' : ''}`}
                                onClick={() => setTeamFilter('senior')}
                            >
                                Senior Partners &amp; Apex Advocates (2)
                            </button>
                            <button
                                className={`team-filter-btn ${teamFilter === 'advocate' ? 'active' : ''}`}
                                onClick={() => setTeamFilter('advocate')}
                            >
                                Litigation Counsel (1)
                            </button>
                            <button
                                className={`team-filter-btn ${teamFilter === 'associate' ? 'active' : ''}`}
                                onClick={() => setTeamFilter('associate')}
                            >
                                Associate Advocates (4)
                            </button>
                        </div>
                    </div>

                    {/* Spotlight Hero Dossier (Prominently displays selected lawyer) */}
                    <div className="attorney-spotlight-dossier" data-aos="zoom-in" data-aos-duration="900" data-aos-delay="150">
                        <div className="spotlight-portrait-box">
                            <img src={selectedAttorney.img} alt={selectedAttorney.name} />
                            <div className="spotlight-active-badge">
                                <Sparkles size={14} />
                                <span>Active Standing</span>
                            </div>
                            <div className="spotlight-court-strip">
                                <span>{selectedAttorney.court}</span>
                            </div>
                        </div>

                        <div className="spotlight-content-box">
                            <div className="spotlight-header-meta">
                                <span className="spotlight-exp-tag">
                                    <Award size={13} />
                                    {selectedAttorney.experience}
                                </span>
                                <span className="spotlight-qual-tag">
                                    <GraduationCap size={13} />
                                    {selectedAttorney.qualification}
                                </span>
                            </div>

                            <h3 className="spotlight-attorney-name">{selectedAttorney.name}</h3>
                            <p className="spotlight-attorney-role">{selectedAttorney.role}</p>

                            <p className="spotlight-bio-text">{selectedAttorney.bio}</p>

                            <div className="spotlight-specialty-block">
                                <span className="block-label">Core Focus &amp; Practice Domains:</span>
                                <p className="block-val">{selectedAttorney.specialty}</p>
                            </div>

                            {selectedAttorney.cases && (
                                <div className="spotlight-cases-block">
                                    <span className="block-label">Notable Cases &amp; Appearances:</span>
                                    <p className="block-val-cases">{selectedAttorney.cases}</p>
                                </div>
                            )}

                            <div className="spotlight-actions-row">
                                <Link to="/contact" className="btn-lawcrest btn-lawcrest-solid-dark">
                                    <span>Consult With {selectedAttorney.name.split(' ')[0]}</span>
                                    <ArrowUpRight size={15} />
                                </Link>
                                <a 
                                    href={`tel:${selectedAttorney.phone}`}
                                    className="btn-lawcrest btn-lawcrest-outline-dark"
                                >
                                    <Phone size={14} />
                                    <span>Direct Chamber Line</span>
                                </a>
                                <a 
                                    href="https://wa.me/919250845823" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="btn-lawcrest btn-lawcrest-gold"
                                >
                                    <MessageCircle size={15} />
                                    <span>WhatsApp</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Interactive Lawyers Card Grid with Smooth Selection and Micro-Interactions */}
                    <div className="lawcrest-interactive-team-deck">
                        {filteredTeam.map((member, index) => {
                            const isSelected = selectedAttorney.id === member.id;

                            return (
                                <div
                                    key={member.id}
                                    className={`interactive-team-card ${isSelected ? 'selected' : ''}`}
                                    data-aos="fade-up"
                                    data-aos-delay={(index % 4) * 120 + 80}
                                >
                                    <div 
                                        className="team-card-inner-clickable"
                                        onClick={() => setSelectedAttorney(member)}
                                        role="button"
                                        tabIndex={0}
                                        aria-label={`Select ${member.name} dossier`}
                                        onKeyDown={(e) => { if (e.key === 'Enter') setSelectedAttorney(member); }}
                                    >
                                        <div className="card-photo-wrapper">
                                            <img src={member.img} alt={member.name} loading="lazy" />
                                            
                                            {/* Selection check pill */}
                                            {isSelected && (
                                                <div className="card-selected-pill">
                                                    <CheckCircle2 size={13} />
                                                    <span>Inspecting Dossier</span>
                                                </div>
                                            )}

                                            {/* Floating Quick Action Overlay */}
                                            <div className="card-action-bar">
                                                <a 
                                                    href={`tel:${member.phone}`}
                                                    className="quick-icon-btn"
                                                    title={`Call ${member.name}`}
                                                    onClick={(e) => e.stopPropagation()}
                                                    aria-label={`Call ${member.name}`}
                                                >
                                                    <Phone size={14} />
                                                </a>
                                                <a 
                                                    href="https://wa.me/919250845823" 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="quick-icon-btn"
                                                    title="WhatsApp Chamber"
                                                    onClick={(e) => e.stopPropagation()}
                                                    aria-label="WhatsApp chamber"
                                                >
                                                    <MessageCircle size={14} />
                                                </a>
                                            </div>
                                        </div>

                                        <div className="card-info-footer">
                                            <h4 className="card-member-name">{member.name}</h4>
                                            <span className="card-member-role">{member.role}</span>
                                            <span className="card-court-info">{member.court}</span>
                                            <div className="card-select-hint">
                                                <span>{isSelected ? '✓ Viewing In Detail' : 'Click to inspect full dossier'}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </section>

            {/* 9. FREQUENTLY ASKED QUESTIONS (Dark Obsidian Section) */}
            <section className="lawcrest-faq section-dark">
                <div className="container">
                    <div className="faq-header-bar" data-aos="fade-up">
                        <div>
                            <span className="pill-badge pill-badge-dark">Got Questions?</span>
                            <h2 className="editorial-title text-white">Frequently Asked Questions</h2>
                            <p className="editorial-subtitle text-muted-dark">
                                Key information regarding consultation procedures, courtroom jurisdictions, and legal representations.
                            </p>
                        </div>
                        <Link to="/contact" className="btn-lawcrest btn-lawcrest-outline-light">
                            <span>Contact Us</span>
                            <ArrowUpRight size={16} />
                        </Link>
                    </div>

                    <div className="faq-split-layout">
                        {/* Left Side: Chamber Info Card */}
                        <div className="faq-visual-card" data-aos="fade-right" data-aos-duration="900">
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
                                        <span>Transparent Assessment of Merits &amp; Risks</span>
                                    </div>
                                </div>  
                            </div>
                        </div>

                        {/* Right Side: Accordion */}
                        <div className="faq-accordion-list">
                            {faqItems.map((item, idx) => {
                                const isOpen = openFaq === idx;
                                return (
                                    <div key={idx} className={`faq-item ${isOpen ? 'active' : ''}`} data-aos="fade-left" data-aos-delay={idx * 70 + 80}>
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

            {/* 10. GRAND CTA BANNER (Dark Obsidian Gradient) */}
            <section className="lawcrest-cta-banner section-dark">
                <div className="container">
                    <div className="cta-banner-inner" data-aos="zoom-in" data-aos-duration="950">
                        <span className="pill-badge pill-badge-dark">Get Legal Clarity</span>
                        <h2 className="cta-headline">
                            Protecting Your Rights.<br />Defending Your Future.
                        </h2>
                        <p className="cta-subtext">
                            Connect with Advocate Sarfaraz Hussain and our dedicated legal team for decisive, experienced counsel before Supreme Court &amp; High Court.
                        </p>
                        <div className="cta-btn-group">
                            <Link to="/contact" className="btn-lawcrest btn-lawcrest-solid-light">
                                <span>Schedule Chamber Consultation</span>
                                <ArrowUpRight size={16} />
                            </Link>
                            <a href="tel:+919250845823" className="btn-lawcrest btn-lawcrest-outline-light">
                                <Phone size={15} />
                                <span>Call Chamber: +91 9250845823</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;
