import React from 'react';
import { skills } from '../data/skills';
import './Skills.css';
import { useLanguage } from '../context/LanguageContext';

const Skills = () => {
    const { t } = useLanguage();
    return (
        <section className="skills-section">
            <h3 className="section-title">{t.skillsTitle}</h3>

            <div className="skills-category">
                <h4>{t.technicalSkills}</h4>
                <div className="skills-grid">
                    {skills.technical.map((skill) => (
                        <div key={skill} className="skill-item">{skill}</div>
                    ))}
                </div>
            </div>

            <div className="skills-category">
                <h4>{t.languages}</h4>
                <div className="skills-grid">
                    {skills.languages.map((language) => (
                        <div key={language} className="skill-item language-item">{language}</div>
                    ))}
                </div>
            </div>

            <div className="skills-category">
                <h4>{t.toolsFrameworks}</h4>
                <div className="skills-grid">
                    {skills.tools.map((tool) => (
                        <div key={tool} className="skill-item language-item">{tool}</div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
