import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Scale, Users, FileText, AlertCircle, Home as HomeIcon, HeartHandshake, BookOpen, Building, Plus, Minus, ArrowUpRight, Landmark, CheckCircle2 } from 'lucide-react';
import './PracticeAreas.css';

const practiceData = [
    {
        title: 'Criminal Litigation',
        icon: Shield,
        tag: 'Supreme Court & High Court',
        content: 'We provide robust defense strategies in complex criminal trials, bail matters, appeals, and white-collar crimes. Our approach is founded on meticulous evidence analysis, forensic cross-examination, and constitutional writs to safeguard clients liberty and reputation.'
    },
    {
        title: 'Civil Litigation',
        icon: Scale,
        tag: 'Appellate & Summary Suits',
        content: 'Strategic representation in a wide array of civil disputes, including breach of contract, specific performance, injunctions, and tort claims. We protect your commercial and personal property rights through decisive legal action.'
    },
    {
        title: 'Family Law',
        icon: Users,
        tag: 'Matrimonial & Custody',
        content: 'Navigating sensitive family matters with compassion and legal acumen. Our services cover divorce proceedings, child custody disputes, maintenance, alimony, and domestic violence cases, striving for amicable resolutions where possible.'
    },
    {
        title: 'NI Act 138',
        icon: FileText,
        tag: 'Cheque Dishonour Revisions',
        content: 'Specialized handling of cheque bounce cases under Section 138 of the Negotiable Instruments Act. We assist both complainants in recovering their financial dues and accused individuals in presenting an impenetrable statutory defense.'
    },
    {
        title: 'Consumer Matters',
        icon: AlertCircle,
        tag: 'District, State & NCDRC',
        content: 'Advocating for consumer rights against unfair trade practices, defective products, and deficiency in services. We represent clients before District Forums, State Commissions, and the National Consumer Disputes Redressal Commission.'
    },
    {
        title: 'MACT Cases',
        icon: HomeIcon,
        tag: 'Accident Claims & Appeals',
        content: 'Ensuring maximum financial compensation for victims of motor vehicle accidents. We handle claims before Motor Accident Claims Tribunals (MACT), addressing negligence, bodily injury, and fatal accident recoveries.'
    },
    {
        title: 'Welfare Act',
        icon: HeartHandshake,
        tag: 'Senior Citizens & Marginalized Rights',
        content: 'Dedicated representation in matters concerning the Welfare and Maintenance of Parents and Senior Citizens Act before SDMs, DMs, and statutory authorities, ensuring legal rights are enforced without compromise.'
    },
    {
        title: 'Waqf Cases',
        icon: BookOpen,
        tag: 'Delhi Waqf Tribunal & High Court',
        content: 'Expert legal counsel in disputes spanning Waqf properties, Mutawalli management, and regulatory conflicts. We represent clients before Waqf Tribunals and High Courts to ensure proper statutory administration.'
    },
    {
        title: 'Property Matters',
        icon: Building,
        tag: 'Real Estate & Injunctions',
        content: 'Comprehensive assistance in real estate title verification, partition suits, eviction proceedings, possession claims, and landlord-tenant conflicts across Delhi & NCR.'
    }
];

const PracticeAreas = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <div className="lawcrest-practice-page">
            {/* Dark Hero with AOS animations */}
            <section className="practice-hero section-dark">
                <div className="container">
                    <div className="practice-hero-content">
                        <span className="pill-badge pill-badge-dark" data-aos="fade-down">
                            <Landmark size={14} className="badge-icon-gold" />
                            Judicial Jurisdictions
                        </span>
                        <h1 className="editorial-title text-white" data-aos="fade-up" data-aos-delay="100">
                            Our Practice Areas
                        </h1>
                        <p className="practice-hero-lead" data-aos="fade-up" data-aos-delay="200">
                            Dedicated to providing specialized legal solutions and aggressive courtroom representation across diverse domains of Indian law.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Practice Content (Cream Background) with Scroll Animations */}
            <section className="practice-content-section section-cream">
                <div className="container">
                    <div className="section-title-wrap text-center" data-aos="fade-up">
                        <span className="statement-tag">Areas of Expertise</span>
                        <h2 className="editorial-title">Comprehensive Legal Defense</h2>
                        <p className="editorial-subtitle">
                            Every case is handled with meticulous case preparation, in-depth legal research, and strategic courtroom advocacy.
                        </p>
                    </div>

                    <div className="practice-cards-wrapper">
                        {practiceData.map((item, index) => {
                            const isOpen = openIndex === index;
                            const IconComp = item.icon;
                            return (
                                <div 
                                    key={index} 
                                    className={`practice-block-card ${isOpen ? 'active' : ''}`}
                                    data-aos="fade-up"
                                    data-aos-delay={(index % 3) * 110 + 60}
                                >
                                    <button
                                        className="practice-block-header"
                                        onClick={() => toggleAccordion(index)}
                                        aria-expanded={isOpen}
                                    >
                                        <div className="practice-header-left">
                                            <span className="practice-number">0{index + 1}</span>
                                            <div className="practice-icon-wrap">
                                                <IconComp size={22} />
                                            </div>
                                            <div>
                                                <h3 className="practice-title-text">{item.title}</h3>
                                                <span className="practice-tag-inline">{item.tag}</span>
                                            </div>
                                        </div>
                                        <div className="practice-header-right">
                                            <span className="toggle-btn-sign">
                                                {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                                            </span>
                                        </div>
                                    </button>

                                    <div className="practice-block-collapse">
                                        <div className="practice-block-body">
                                            <p className="practice-desc-paragraph">{item.content}</p>
                                            <div className="practice-action-box">
                                                <Link to="/contact" className="btn-lawcrest btn-lawcrest-solid-dark">
                                                    <span>Consult on {item.title}</span>
                                                    <ArrowUpRight size={15} />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PracticeAreas;
