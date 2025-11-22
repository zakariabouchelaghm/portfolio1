import React from 'react';
import { awards } from '../data/awards';
import './Awards.css';

const Awards = () => {
    return (
        <section className="awards-section">
            <h3 className="section-title">Notable Awards</h3>
            <div className="awards-container">
                {awards.map((award) => (
                    <div key={award.id} className="award-card">
                        <div className="award-header">
                            <h4 className="award-title">{award.title}</h4>
                            <span className="award-year">{award.year}</span>
                        </div>
                        <h5 className="award-issuer">{award.issuer}</h5>
                        <p className="award-description">{award.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Awards;
