import React from 'react';
import { education } from '../data/education';
import './Education.css';

const Education = () => {
    return (
        <section className="education-section">
            <h3 className="section-title">Education</h3>
            <div className="timeline">
                {education.map((edu, index) => (
                    <div key={edu.id} className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <span className="edu-year">{edu.year}</span>
                            <h4 className="edu-degree">{edu.degree}</h4>
                            <h5 className="edu-school">{edu.school}</h5>
                            <p className="edu-coursework">
                                <strong>Relevant Coursework:</strong> {edu.coursework}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
