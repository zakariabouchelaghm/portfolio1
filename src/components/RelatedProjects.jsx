import React from 'react';
import { relatedProjects } from '../data/projects';
import './Projects.css'; // Reuse existing styles

const RelatedProjects = ({ openModal }) => {
    return (
        <section className="projects-section related-projects">
            <h3 className="section-title">Related Projects</h3>
            <div className="projects-grid">
                {relatedProjects.map((project) => (
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
                            <span className="read-more">View Details &rarr;</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RelatedProjects;
