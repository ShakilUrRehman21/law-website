import React, { useState, useEffect } from 'react';
import './DisclaimerModal.css';

const DisclaimerModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const hasAgreed = localStorage.getItem('barCouncilAgreed');
        if (!hasAgreed) {
            setIsOpen(true);
            document.body.style.overflow = 'hidden';
            if (window.__lenis) {
                window.__lenis.stop();
            }
        }
    }, []);

    const handleAgree = () => {
        localStorage.setItem('barCouncilAgreed', 'true');
        setIsOpen(false);
        document.body.style.overflow = 'unset';
        if (window.__lenis) {
            window.__lenis.start();
            window.__lenis.resize();
        }
        if (window.AOS) {
            window.AOS.refresh();
        }
    };

    const handleDisagree = () => {
        window.location.href = 'https://google.com';
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h2>Disclaimer</h2>
                </div>
                <div className="modal-body">
                    <p>
                        As per the rules of the Bar Council of India, we are not permitted to solicit work and advertise.
                        By clicking on the "I AGREE" button below, the user acknowledges the following:
                    </p>
                    <ul>
                        <li>There has been no advertisement, personal communication, solicitation, invitation or inducement of any sort whatsoever from us or any of our members to solicit any work through this website.</li>
                        <li>The user wishes to gain more information about us for their own information and use.</li>
                        <li>The information about us is provided to the user only on their specific request.</li>
                        <li>Any information obtained or materials downloaded from this website is completely at the user's volition and any transmission, receipt or use of this site is not intended to, and will not, create any lawyer-client relationship.</li>
                        <li>None of the information contained on the website is in the nature of a legal opinion or otherwise amounts to any legal advice.</li>
                    </ul>
                    <p>
                        Sarfaraz Hussain Advocate Law Offices, its partners, and members are not liable for any consequence of any action taken by the user relying on material / information provided under this website. In cases where the user has any legal issues, they in all cases must seek independent legal advice.
                    </p>
                </div>
                <div className="modal-footer">
                    <button className="btn btn-primary" onClick={handleAgree}>I AGREE</button>
                    <button className="btn btn-outline" onClick={handleDisagree}>I DISAGREE</button>
                </div>
            </div>
        </div>
    );
};

export default DisclaimerModal;
