import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Zakaria Bouchelaghem. All rights reserved.</p>
            <div className="social-links">
                <a href="https://www.linkedin.com/in/zakaria-bouchelaghem-77a4a6182/">LinkedIn</a>
                <a href="https://github.com/zakariabouchelaghm">GitHub</a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=zakariabouchelaghem20@gmail.com" target="_blank" rel="noopener noreferrer">Gmail</a>
            </div>
        </footer>
    );
};

export default Footer;
