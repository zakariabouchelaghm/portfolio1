import React from 'react';
import './Projects.css';
import { useLanguage } from '../context/LanguageContext';

const RelatedProjects = ({ openModal }) => {
    const { t } = useLanguage();
    return (
        <section className="projects-section related-projects">
            <h3 className="section-title">{t.relatedProjects}</h3>
            <div className="projects-grid">
                {t.relatedProjectsData.map((project) => (
                    <div
                        key={project.id}
                        className="project-card"
                        onClick={() => openModal(project)}
                    >
                        <div className="card-content">
                            <h4>{project.title}</h4>
                            <p>{project.shortDescription}</p>
                            <div className="tags">
                                {project.tags.slice(0, 3).map(tag => (
                                    <span key={tag} className="tag">{tag}</span>
                                ))}
                            </div>
                            <span className="read-more">{t.viewDetails}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RelatedProjects;
