import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import './SocialLinks.css';

const SocialLinks = () => {
    return (
        <div className="social-links-hero">
            <a
                href="https://www.linkedin.com/in/zakaria-bouchelaghem-77a4a6182/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon linkedin"
                aria-label="LinkedIn Profile"
            >
                <FaLinkedin />
            </a>
            <a
                href="https://github.com/zakariabouchelaghm"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon github"
                aria-label="GitHub Profile"
            >
                <FaGithub />
            </a>
            <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=zakariabouchelaghem20@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon email"
                aria-label="Email Contact"
            >
                <MdEmail />
            </a>
        </div>
    );
};

export default SocialLinks;
