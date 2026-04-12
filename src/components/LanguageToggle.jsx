import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './LanguageToggle.css';

const LanguageToggle = () => {
    const { language, toggleLanguage } = useLanguage();
    const isEn = language === 'en';

    return (
        <button
            className="lang-toggle"
            onClick={toggleLanguage}
            aria-label={isEn ? 'Switch to French' : 'Passer en Anglais'}
            title={isEn ? 'Switch to French' : 'Switch to English'}
        >
            <span className={`lang-option ${isEn ? 'active' : ''}`}>EN</span>
            <span className="lang-divider">|</span>
            <span className={`lang-option ${!isEn ? 'active' : ''}`}>FR</span>
        </button>
    );
};

export default LanguageToggle;
