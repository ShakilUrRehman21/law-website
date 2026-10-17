import React from 'react';
import { Link } from 'react-router-dom';
import { 
    Award, 
    Briefcase, 
    CheckCircle2, 
    ArrowUpRight, 
    ShieldCheck, 
    Landmark, 
    Users, 
    HeartHandshake, 
    Scale, 
    Film, 
    Camera, 
    Tv, 
    Building2 
} from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <div className="lawcrest-about-page">
            {/* 1. About Hero Banner */}
            <section className="about-hero section-dark">
                <div className="container">
                    <div className="about-hero-content">
                        <span className="pill-badge pill-badge-dark" data-aos="fade-down">
                            <Landmark size={14} className="badge-icon-gold" />
                            Civil Engineer cum Lawyer • Decades of Dedicated Practice
                        </span>
                        <h1 className="editorial-title text-white" data-aos="fade-up" data-aos-delay="100">
                            About Advocate Sarfaraz Hussain
                        </h1>
                        <p className="about-hero-lead" data-aos="fade-up" data-aos-delay="200">
                            Result-oriented legal consultancy and advisory services with a premier panel of advocates across Delhi-NCR and other states of India.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. Main Biography Section (Cream Background) */}
            <section className="about-bio-section section-cream">
                <div className="container">
                    <div className="bio-grid">
                        {/* Portrait Column */}
                        <div className="bio-portrait-col" data-aos="fade-right" data-aos-duration="900">
                            <div className="bio-portrait-frame">
                                <img src="/sarfaraz_hussain.png" alt="Advocate Sarfaraz Hussain" />
                                <div className="bio-frame-badge">
                                    <ShieldCheck size={20} className="badge-icon" />
                                    <span>Supreme Court of India &amp; Delhi High Court</span>
                                </div>
                            </div>
                        </div>

                        {/* Narrative Content Column */}
                        <div className="bio-narrative-col" data-aos="fade-left" data-aos-duration="900" data-aos-delay="150">
                            <span className="statement-tag">Advocate Profile</span>
                            <h2 className="bio-name-title">Sarfaraz Hussain</h2>
                            <p className="bio-sub-title">Advocate, Supreme Court of India &amp; Delhi High Court • B.E. (Civil), LL.B, LL.M (Crl.)</p>

                            <div className="bio-paragraphs">
                                <p>
                                    Sarfaraz Hussain Advocate, is a Delhi based Civil Engineer cum lawyer who has been practicing and handling cases with his team with a result-oriented approach. He has several years of experience in providing legal consultancy and advisory services with a panel of advocates in Delhi and out of other states of Delhi and can resolve all types of complex matters efficiently.
                                </p>
                                <p>
                                    Sarfaraz Hussain Advocate serve as a single-window legal service provider i.e. Advocates, solicitors and also as a Legal Consultant in this dynamic commercial environment. Sarfaraz Hussain, Advocate brought his services to the table as a committed and dedicated professional Advocates and Lawyers in Delhi-NCR, who has specialist in their respective fields of practice of Law in Delhi and whole of NCR and out of other States of India and pursued a philosophy of symbiotic relationships with litigants.
                                </p>
                            </div>

                            {/* Core Highlights */}
                            <div className="bio-highlights-list">
                                <div className="bio-highlight-item" data-aos="fade-up" data-aos-delay="200">
                                    <CheckCircle2 size={20} className="check-icon" />
                                    <span>Single-Window Legal Advisory &amp; Litigation Services</span>
                                </div>
                                <div className="bio-highlight-item" data-aos="fade-up" data-aos-delay="280">
                                    <CheckCircle2 size={20} className="check-icon" />
                                    <span>Panel of Specialist Advocates Across Delhi-NCR &amp; India</span>
                                </div>
                                <div className="bio-highlight-item" data-aos="fade-up" data-aos-delay="360">
                                    <CheckCircle2 size={20} className="check-icon" />
                                    <span>Philosophy of Symbiotic, Result-Oriented Client Relationships</span>
                                </div>
                            </div>

                            <div className="bio-action-row" data-aos="fade-up" data-aos-delay="420">
                                <Link to="/contact" className="btn-lawcrest btn-lawcrest-solid-dark">
                                    <span>Schedule a Consultation</span>
                                    <ArrowUpRight size={16} />
                                </Link>
                                <Link to="/practice-areas" className="btn-lawcrest btn-lawcrest-outline-dark">
                                    <span>View Practice Areas</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Renowned Landmark Cases & Appearances (Dark Obsidian Section) */}
            <section className="about-cases-section section-dark">
                <div className="container">
                    <div className="section-title-wrap text-center" data-aos="fade-up">
                        <span className="pill-badge pill-badge-dark">Apex Court &amp; High Court Trials</span>
                        <h2 className="editorial-title text-white">Renowned Cases &amp; Appearances</h2>
                        <p className="editorial-subtitle text-muted-dark">
                            Notable landmark courtroom representations alongside India's distinguished Senior Advocates and Solicitors.
                        </p>
                    </div>

                    <div className="cases-dossier-grid">
                        
                        {/* Case 1: Shivani Bhatnagar */}
                        <div className="case-dossier-card" data-aos="fade-up" data-aos-delay="100">
                            <div className="case-dossier-header">
                                <span className="case-jurisdiction-tag">Landmark Trial Defense</span>
                                <h3>Shivani Bhatnagar Murder Case</h3>
                            </div>
                            <p className="case-dossier-desc">
                                Appearance as main counsel for the accused S.P. Sharma, along with the renowned Advocates &amp; Solicitors of India: Mr. Sushil Kumar Senior Advocate, Mr. Siddharth Luthra Senior Advocate, Mr. R.N. Goswami, Late Mr. Ram Jethmalani Senior Advocate, and also appeared in many cases with Mr. Anil Soni Advocate (at present Standing Counsel for Central Govt. of India, UGC, etc.).
                            </p>
                            <div className="case-evidence-action">
                                <Link to="/gallery" className="evidence-link">
                                    <Film size={15} />
                                    <span>Kindly see the Press Interview video</span>
                                    <ArrowUpRight size={14} />
                                </Link>
                            </div>
                        </div>

                        {/* Case 2: Najeeb Ahmed Disappearance */}
                        <div className="case-dossier-card" data-aos="fade-up" data-aos-delay="200">
                            <div className="case-dossier-header">
                                <span className="case-jurisdiction-tag">High Court Constitutional Petition</span>
                                <h3>Najeeb Ahmed Disappearance Case</h3>
                            </div>
                            <p className="case-dossier-desc">
                                First appearance counsel in the high-profile Najeeb Ahmed disappearance habeas corpus proceedings, arguing for impartial investigative scrutiny before the High Court bench.
                            </p>
                            <div className="case-evidence-action">
                                <Link to="/gallery" className="evidence-link">
                                    <Tv size={15} />
                                    <span>Kindly see the press conference of the same</span>
                                    <ArrowUpRight size={14} />
                                </Link>
                            </div>
                        </div>

                        {/* Case 3: Love Jihad Cases */}
                        <div className="case-dossier-card" data-aos="fade-up" data-aos-delay="300">
                            <div className="case-dossier-header">
                                <span className="case-jurisdiction-tag">Supreme Court of India</span>
                                <h3>Love Jihad Cases</h3>
                            </div>
                            <p className="case-dossier-desc">
                                Defended personal liberty, constitutional freedoms, and matrimonial autonomy in the renowned proceedings before the Supreme Court of India.
                            </p>
                            <div className="case-evidence-action">
                                <Link to="/gallery" className="evidence-link">
                                    <Film size={15} />
                                    <span>Kindly see the TV interview of the same</span>
                                    <ArrowUpRight size={14} />
                                </Link>
                            </div>
                        </div>

                        {/* Case 4: Ram Janmabhoomi Ayodhya */}
                        <div className="case-dossier-card" data-aos="fade-up" data-aos-delay="400">
                            <div className="case-dossier-header">
                                <span className="case-jurisdiction-tag">Supreme Court Constitution Bench</span>
                                <h3>Ram Janmabhoomi Ayodhya Case</h3>
                            </div>
                            <p className="case-dossier-desc">
                                Historic representation and active counsel presence before the Supreme Court of India during the landmark Ayodhya title dispute hearings.
                            </p>
                            <div className="case-evidence-action">
                                <Link to="/gallery" className="evidence-link">
                                    <Camera size={15} />
                                    <span>Kindly see the photographs</span>
                                    <ArrowUpRight size={14} />
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. Civic, Social Welfare & Leadership Roles (Cream Section) */}
            <section className="about-leadership-section section-cream">
                <div className="container">
                    <div className="section-title-wrap text-center" data-aos="fade-up">
                        <span className="pill-badge pill-badge-cream">Civic &amp; Community Leadership</span>
                        <h2 className="editorial-title">Social Welfare &amp; Public Leadership</h2>
                        <p className="editorial-subtitle">
                            Dedicated leadership positions in registered welfare societies, academic communities, and citizen dispute forums across Delhi and NCR.
                        </p>
                    </div>

                    <div className="leadership-cards-grid">
                        
                        <div className="leadership-card" data-aos="fade-up" data-aos-delay="100">
                            <div className="lead-icon-box">
                                <Building2 size={24} />
                            </div>
                            <h4>Jamia Nagar Welfare Society (Regd.)</h4>
                            <span className="lead-position">President</span>
                            <p>
                                Belongs to Jamia Nagar as well as Jamia Millia Islamia University area, Okhla, Shaheen Bagh, Zakir Nagar, Batla House, dedicated to community welfare and resident rights.
                            </p>
                        </div>

                        <div className="leadership-card" data-aos="fade-up" data-aos-delay="180">
                            <div className="lead-icon-box">
                                <Scale size={24} />
                            </div>
                            <h4>ISEM (Indian Society for Environment &amp; Management)</h4>
                            <span className="lead-position">Ex-Vice President</span>
                            <p>
                                Prominent society for Engineers and Scientists, fostering technological, legal, and environmental stewardship across professional bodies.
                            </p>
                        </div>

                        <div className="leadership-card" data-aos="fade-up" data-aos-delay="260">
                            <div className="lead-icon-box">
                                <HeartHandshake size={24} />
                            </div>
                            <h4>Batla House Welfare &amp; Shopkeepers Society</h4>
                            <span className="lead-position">Ex-President &amp; Legal Advisor</span>
                            <p>
                                Ex-President of Batla House Welfare Society (Regd.) and presently Legal Advisor of the same society, as well as Legal Advisor of the Batla House Shopkeepers Society.
                            </p>
                        </div>

                        <div className="leadership-card" data-aos="fade-up" data-aos-delay="340">
                            <div className="lead-icon-box">
                                <Landmark size={24} />
                            </div>
                            <h4>Jama Masjid, Batla House</h4>
                            <span className="lead-position">Ex-Secretary General</span>
                            <p>
                                Served as Ex-Secretary General of Jama Masjid, Batla House, Jamia Nagar, Okhla, New Delhi-110025, guiding administrative and community developments.
                            </p>
                        </div>

                        <div className="leadership-card" data-aos="fade-up" data-aos-delay="420">
                            <div className="lead-icon-box">
                                <Users size={24} />
                            </div>
                            <h4>Akhil Bhartiya Yuva Awam, Dalit, Mukti Morcha (Regd.)</h4>
                            <span className="lead-position">Secretary General</span>
                            <p>
                                Serving as Secretary General advocating for social justice, fundamental constitutional safeguards, and youth empowerment.
                            </p>
                        </div>

                        <div className="leadership-card" data-aos="fade-up" data-aos-delay="500">
                            <div className="lead-icon-box">
                                <Award size={24} />
                            </div>
                            <h4>Darul Qaza, Jamia Nagar, Okhla</h4>
                            <span className="lead-position">Founder Member</span>
                            <p>
                                Founder Member of Darul Qaza, Senior Member of Badaun Welfare Society, and member of the Aman Committee of Okhla area along with numerous societies in Delhi and other states.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* 5. Professional Bar Associations (Dark Obsidian) */}
            <section className="about-associations-section section-dark">
                <div className="container">
                    <div className="section-title-wrap text-center" data-aos="fade-up">
                        <span className="pill-badge pill-badge-dark">Bar Memberships</span>
                        <h2 className="editorial-title text-white">Professional Associations</h2>
                        <p className="editorial-subtitle text-muted-dark">
                            Prestigious affiliations reflecting an esteemed standing across India's highest judicial forums.
                        </p>
                    </div>

                    <div className="associations-grid">
                        <div className="association-card" data-aos="fade-up" data-aos-delay="100">
                            <div className="assoc-icon-wrap">
                                <Award className="assoc-icon" size={32} />
                            </div>
                            <h3>Supreme Court Bar Association</h3>
                            <span className="assoc-role">Member</span>
                            <p className="assoc-desc">Active standing and representation before the apex court benches of India.</p>
                        </div>

                        <div className="association-card" data-aos="fade-up" data-aos-delay="200">
                            <div className="assoc-icon-wrap">
                                <Briefcase className="assoc-icon" size={32} />
                            </div>
                            <h3>Delhi High Court Bar Association</h3>
                            <span className="assoc-role">Active Member</span>
                            <p className="assoc-desc">Continuous litigation presence and chamber practice at Lawyers Chamber Block-I.</p>
                        </div>

                        <div className="association-card" data-aos="fade-up" data-aos-delay="300">
                            <div className="assoc-icon-wrap">
                                <Landmark className="assoc-icon" size={32} />
                            </div>
                            <h3>All India Bar Association</h3>
                            <span className="assoc-role">Lifetime Member</span>
                            <p className="assoc-desc">Dedicated to national legal development, ethical jurisprudence, and bar excellence.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
