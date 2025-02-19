import React from 'react';
import '../assets/css/statssec.css';

function StatsSection () {
    return (
        <section id="stats" className="stats section light-background">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-3 col-md-6">
                        <div className="stats-item d-flex align-items-center w-100 h-100">
                            <i className="bi bi-emoji-smile color-blue flex-shrink-0"></i>
                            <div>
                                <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter">232</span>
                                <p>Happy Clients</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="stats-item d-flex align-items-center w-100 h-100">
                            <i className="bi bi-journal-richtext color-orange flex-shrink-0"></i>
                            <div>
                                <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter">521</span>
                                <p>Projects</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="stats-item d-flex align-items-center w-100 h-100">
                            <i className="bi bi-headset color-green flex-shrink-0"></i>
                            <div>
                                <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" className="purecounter">1463</span>
                                <p>Hours Of Support</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="stats-item d-flex align-items-center w-100 h-100">
                            <i className="bi bi-people color-pink flex-shrink-0"></i>
                            <div>
                                <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter">15</span>
                                <p>Hard Workers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
