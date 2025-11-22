import React from 'react';
import './Bio.css';

const Bio = () => {
    return (
        <section className="bio-section">
            <div className="bio-card">
                <h3>About Me</h3>
                <p className="bio-text">
                    I hold a <strong>Master's degree in Fundamental Computer Science and Artificial Intelligence</strong>.
                    My passion lies in bridging the gap between theoretical AI research and practical, scalable applications.
                    With a deep understanding of algorithms and data structures, I specialize in building intelligent systems that solve real-world problems.
                </p>
            </div>
        </section>
    );
};

export default Bio;
