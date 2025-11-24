import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaCheck } from 'react-icons/fa';
import { MdEmail, MdContentCopy } from 'react-icons/md';
import './SocialLinks.css';

const SocialLinks = () => {
    const [copied, setCopied] = useState(false);

    const handleClick = (e) => {
        // Remove focus after clicking to prevent persistent active state
        const target = e.currentTarget;
        setTimeout(() => {
            target.blur();
        }, 100);
    };

    const handleEmailClick = (e) => {
        e.preventDefault();
        handleClick(e);

        navigator.clipboard.writeText('zakariabouchelaghm20@gmail.com');
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <div className="social-links-hero">
            <a
                href="https://www.linkedin.com/in/zakaria-bouchelaghem-77a4a6182/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon linkedin"
                aria-label="LinkedIn Profile"
                onClick={handleClick}
            >
                <FaLinkedin />
            </a>
            <a
                href="https://github.com/zakariabouchelaghm"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon github"
                aria-label="GitHub Profile"
                onClick={handleClick}
            >
                <FaGithub />
            </a>
            <button
                className={`social-icon email ${copied ? 'copied' : ''}`}
                aria-label="Copy Email Address"
                onClick={handleEmailClick}
                title="Copy email to clipboard"
            >
                {copied ? <FaCheck /> : <MdEmail />}
                <span className="tooltip">{copied ? 'Copied!' : 'Copy Email'}</span>
            </button>
        </div>
    );
};

export default SocialLinks;
