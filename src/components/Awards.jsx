import React from 'react';
import './Awards.css';
import { useLanguage } from '../context/LanguageContext';

const Awards = () => {
    const { t } = useLanguage();
    return (
        <section className="awards-section">
            <h3 className="section-title">{t.awardsTitle}</h3>
            <div className="awards-container">
                {t.awards.map((award) => (
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
