import React from 'react';
import './Education.css';
import { useLanguage } from '../context/LanguageContext';

const Education = () => {
    const { t } = useLanguage();
    return (
        <section className="education-section">
            <h3 className="section-title">{t.educationTitle}</h3>
            <div className="timeline">
                {t.education.map((edu) => (
                    <div key={edu.id} className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <span className="edu-year">{edu.year}</span>
                            <h4 className="edu-degree">{edu.degree}</h4>
                            <h5 className="edu-school">{edu.school}</h5>
                            <p className="edu-coursework">
                                <strong>{t.relevantCoursework}</strong> {edu.coursework}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
