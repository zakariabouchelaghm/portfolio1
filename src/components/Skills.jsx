import React from 'react';
import { skills } from '../data/skills';
import './Skills.css';

const Skills = () => {
    return (
        <section className="skills-section">
            <h3 className="section-title">Skills & Tools</h3>

            <div className="skills-category">
                <h4>Technical Skills</h4>
                <div className="skills-grid">
                    {skills.technical.map((skill) => (
                        <div key={skill} className="skill-item">{skill}</div>
                    ))}
                </div>
            </div>

            <div className="skills-category">
                <h4>Tools & Frameworks</h4>
                <div className="skills-grid">
                    {skills.tools.map((tool) => (
                        <div key={tool} className="skill-item tool-item">{tool}</div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
