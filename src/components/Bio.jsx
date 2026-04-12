import React from 'react';
import './Bio.css';
import { useLanguage } from '../context/LanguageContext';

const Bio = () => {
    const { t } = useLanguage();
    return (
        <section className="bio-section">
            <div className="bio-card">
                <h3>{t.aboutMe}</h3>
                <p className="bio-text">{t.bioText}</p>
            </div>
        </section>
    );
};

export default Bio;
