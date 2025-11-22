import React from 'react';
import { featuredProjects } from '../data/projects';
import './Projects.css';

const Projects = ({ openModal }) => {
    return (
        <section className="projects-section">
            <h3 className="section-title">Featured Projects</h3>
            <div className="projects-grid">
                {featuredProjects.map((project) => (
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

export default Projects;
