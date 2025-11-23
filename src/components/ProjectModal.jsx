import React from 'react';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>&times;</button>
                <h2>{project.title}</h2>
                <div className="modal-tags">
                    {project.tags.map(tag => (
                        <span key={tag} className="modal-tag">{tag}</span>
                    ))}
                </div>
                <p className="modal-description">{project.fullDescription}</p>
                {project.link && (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-button"
                    >
                        View Project →
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectModal;
