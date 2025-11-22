import React from 'react';
import { experience } from '../data/experience';
import './Experience.css';

const Experience = () => {
    return (
        <section className="experience-section">
            <h3 className="section-title">Experience & Certifications</h3>
            <div className="experience-container">
                {experience.map((exp) => (
                    <div key={exp.id} className="experience-card">
                        <div className="exp-header">
                            <h4 className="exp-role">{exp.role}</h4>
                            {exp.year && <span className="exp-year">{exp.year}</span>}
                        </div>
                        <h5 className="exp-company">{exp.company}</h5>
                        {exp.description && <p className="exp-description">{exp.description}</p>}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
