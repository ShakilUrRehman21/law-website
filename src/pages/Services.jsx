import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Scale, Users, FileText, Home as HomeIcon, BookOpen, AlertCircle, ArrowUpRight, Plus, Minus, CheckCircle2, Landmark } from 'lucide-react';
import './Services.css';

const servicesData = [
    {
        id: 1,
        title: 'Criminal Litigation',
        icon: Shield,
        description: 'Expertise in SLP in Supreme Court of India, Criminal Appeals, Criminal Writs (Murder, Robbery, Dacoity, POCSO, Rape Cases, etc.)',
        details: [
            'Special Leave Petitions (SLP) before Supreme Court of India',
            'Criminal Writs under Article 226/32 of the Constitution',
            'Regular, Interim & Anticipatory Bail Proceedings',
            'Trial Defense in Sessions & High Court (POCSO, NDPS, IPC)',
            'FIR Quashing under Section 482 Cr.P.C.'
        ]
    },
    {
        id: 2,
        title: 'Civil Litigations',
        icon: Scale,
        description: 'Expertise in all types of Civil Suits, Appeals (RFA), Civil Writs, Revisions before High Court & District Courts of Delhi.',
        details: [
            'Regular First Appeals (RFA) & First Appeals from Order (FAO)',
            'Injunction Suits & Specific Performance of Contracts',
            'Commercial Disputes & Summary Suits (Order 37 CPC)',
            'Civil Revision Petitions & Review Petitions',
            'Execution of Decrees & Recovery Proceedings'
        ]
    },
    {
        id: 3,
        title: 'Family Law',
        icon: Users,
        description: 'Comprehensive legal representation in matrimonial disputes, divorce proceedings, child custody, and family settlements.',
        details: [
            'Mutual Consent & Contested Divorce Proceedings',
            'Guardianship & Child Custody Determinations',
            'Maintenance & Alimony Claims under Section 125 Cr.P.C.',
            'Protection under Protection of Women from Domestic Violence Act',
            'Family Property Settlement & Partition'
        ]
    },
    {
        id: 4,
        title: '138 NI Act Cases',
        icon: FileText,
        description: '(Appeal, Revision in all District Courts of Delhi)',
        details: [
            'Complainant Representation for Swift Financial Recovery',
            'Accused Defense & Statutory Rebuttal of Presumptions',
            'Criminal Revisions & Appeals across all Delhi District Courts',
            'Compounding of Cheque Dishonour Offenses'
        ]
    },
    {
        id: 5,
        title: 'Consumer Cases',
        icon: AlertCircle,
        description: 'Pursuing claims and appeals in State, District, and National Consumer Redressal Forums.',
        details: [
            'Complaints before District Consumer Dispute Redressal Commissions',
            'Appeals before State Consumer Disputes Redressal Commission (Delhi)',
            'Litigation before National Consumer Commission (NCDRC)',
            'Medical Negligence & Defective Service Compensation Claims'
        ]
    },
    {
        id: 6,
        title: 'MACT Cases',
        icon: HomeIcon,
        description: 'Legal representation for victims securing rightful compensation in Motor Accident Claims Tribunals.',
        details: [
            'Filing & Contesting Claims before Motor Accident Claims Tribunals',
            'Ensuring Maximum Compensation for Bodily Injury & Fatalities',
            'Countering Insurance Repudiations & Liability Disputes',
            'High Court Appeals for Enhancement of MACT Awards'
        ]
    },
    {
        id: 7,
        title: 'Waqf Cases',
        icon: BookOpen,
        description: 'Resolving disputes related to Waqf properties, management, and regulatory mandates.',
        details: [
            'Tribunal Proceedings before Delhi Waqf Tribunal',
            'Waqf Property Demarcation & Illegal Encroachment Eviction',
            'Mutawalli Disputes & Governance Challenges',
            'High Court Writ Petitions challenging Waqf Board Resolutions'
        ]
    }
];

const Services = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <div className="lawcrest-services-page">
            {/* Hero Section with High Impact AOS Entrance */}
            <section className="services-hero section-dark">
                <div className="container">
                    <div className="services-hero-content">
                        <span className="pill-badge pill-badge-dark" data-aos="fade-down">
                            <Landmark size={14} className="badge-icon-gold" />
                            Practice &amp; Statutory Defense
                        </span>
                        <h1 className="editorial-title text-white" data-aos="fade-up" data-aos-delay="100">
                            Our Core Legal Services
                        </h1>
                        <p className="services-hero-lead" data-aos="fade-up" data-aos-delay="200">
                            Comprehensive courtroom defense and strategic counsel tailored to your unique challenges, statutory proceedings, and constitutional protections.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Detailed List with Scroll Animations */}
            <section className="services-list-section section-cream">
                <div className="container">
                    <div className="services-grid-wrapper">
                        {servicesData.map((service, index) => {
                            const isOpen = openIndex === index;
                            const IconComp = service.icon;
                            return (
                                <div 
                                    key={service.id} 
                                    className={`service-item-card ${isOpen ? 'active' : ''}`}
                                    data-aos="fade-up"
                                    data-aos-delay={(index % 3) * 120 + 80}
                                >
                                    <button
                                        className="service-card-header"
                                        onClick={() => toggleAccordion(index)}
                                        aria-expanded={isOpen}
                                    >
                                        <div className="service-title-group">
                                            <span className="service-idx">0{index + 1}.</span>
                                            <div className="service-icon-box">
                                                <IconComp size={22} />
                                            </div>
                                            <div>
                                                <h2 className="service-heading">{service.title}</h2>
                                                <p className="service-short-desc">{service.description}</p>
                                            </div>
                                        </div>
                                        <span className="service-expand-icon">
                                            {isOpen ? <Minus size={22} /> : <Plus size={22} />}
                                        </span>
                                    </button>

                                    <div className="service-card-collapse">
                                        <div className="service-card-body">
                                            <div className="service-breakdown-subgrid">
                                                <div>
                                                    <h3 className="breakdown-label">Key Legal Interventions:</h3>
                                                    <ul className="service-bullet-list">
                                                        {service.details.map((detail, dIdx) => (
                                                            <li key={dIdx}>
                                                                <CheckCircle2 size={15} className="bullet-check-gold" />
                                                                <span>{detail}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="service-cta-subcard">
                                                    <h4>Consult on {service.title}</h4>
                                                    <p>Schedule an evaluation with Advocate Sarfaraz Hussain and associate counsel.</p>
                                                    <Link to="/contact" className="btn-lawcrest btn-lawcrest-solid-dark">
                                                        <span>Book Consultation</span>
                                                        <ArrowUpRight size={15} />
                                                    </Link>
                                                </div>
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

export default Services;
