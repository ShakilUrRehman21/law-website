import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowUpRight, Scale, Phone, Compass, ShieldAlert } from 'lucide-react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="lawcrest-notfound-page section-dark">
            <div className="container">
                <div className="notfound-content-card" data-aos="zoom-in" data-aos-duration="850">
                    
                    <div className="notfound-badge-wrap">
                        <span className="pill-badge pill-badge-dark">
                            <ShieldAlert size={14} className="badge-icon-gold" />
                            Error 404 • Docket Not Found
                        </span>
                    </div>

                    <div className="notfound-numeral-glitch" aria-hidden="true">
                        404
                    </div>

                    <h1 className="notfound-headline">
                        Judicial Record Not Located
                    </h1>

                    <p className="notfound-description">
                        The chamber brief, page, or statutory reference you requested is not available. The docket may have been relocated, archived, or an incorrect URL was specified.
                    </p>

                    <div className="notfound-actions-group">
                        <Link to="/" className="btn-lawcrest btn-lawcrest-solid-light">
                            <Home size={16} />
                            <span>Return to Chambers</span>
                        </Link>
                        <Link to="/practice-areas" className="btn-lawcrest btn-lawcrest-outline-light">
                            <Compass size={16} />
                            <span>Practice Areas</span>
                        </Link>
                        <Link to="/contact" className="btn-lawcrest btn-lawcrest-gold">
                            <span>Chamber Contact</span>
                            <ArrowUpRight size={16} />
                        </Link>
                    </div>

                    <div className="notfound-direct-helpline">
                        <p>
                            Need immediate urgent assistance? Direct Chamber Helpline:{' '}
                            <a href="tel:+919250845823">+91 9250845823</a>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NotFound;
