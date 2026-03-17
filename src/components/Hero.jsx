import React, { useState, useRef } from 'react';
import './Hero.css';
import SocialLinks from './SocialLinks';

const Hero = () => {
    const [isHovered, setIsHovered] = useState(false);
    const motion2Ref = useRef(null);

    const handleInteraction = () => {
        setIsHovered(true);
        if (motion2Ref.current) {
            motion2Ref.current.playbackRate = 1.5; // Increase speed
            motion2Ref.current.currentTime = 0;
            motion2Ref.current.play();
        }
    };

    return (
        <section className="hero">
            <div className="hero-content">
                <div
                    className="image-container"
                    onMouseEnter={handleInteraction}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={handleInteraction}
                >
                    <div className="image-wrapper">
                        <video
                            src={`${import.meta.env.BASE_URL}motion1.mp4`}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="profile-video base-video"
                        />
                        <video
                            ref={motion2Ref}
                            src={`${import.meta.env.BASE_URL}motion2.mp4`}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className={`profile-video overlay-video ${isHovered ? 'fade-in' : 'fade-out'}`}
                        />
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
