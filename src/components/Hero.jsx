import React from 'react';
import './Hero.css';
import SocialLinks from './SocialLinks';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <div className="image-container">
                    <div className="image-wrapper">
                        <img src={`${import.meta.env.BASE_URL}me.jpeg`} alt="AI Engineer" className="profile-image" />
                    </div>
                    <div className="image-glow"></div>
                </div>
                <h1 className="name">Zakaria Bouchelaghem</h1>
                <h2 className="title">AI/ML Engineer</h2>
                <p className="tagline">Building the future with Intelligence.</p>
                <SocialLinks />
                <div className="scroll-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
