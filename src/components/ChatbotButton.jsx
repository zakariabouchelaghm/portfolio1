import React, { useEffect, useState } from 'react';
import './ChatbotButton.css';

const ChatbotButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [pulseAnimation, setPulseAnimation] = useState(true);

    useEffect(() => {
        // Show button after a short delay
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 2000);

        // Stop pulse animation after user has seen it
        const pulseTimer = setTimeout(() => {
            setPulseAnimation(false);
        }, 10000);

        return () => {
            clearTimeout(timer);
            clearTimeout(pulseTimer);
        };
    }, []);

    const handleChatClick = () => {
        // Trigger Botpress chatbot
        if (window.botpressWebChat) {
            window.botpressWebChat.sendEvent({ type: 'show' });
        }
        setPulseAnimation(false);
    };

    return (
        <div className={`chatbot-button-container ${isVisible ? 'visible' : ''}`}>
            <button
                className={`chatbot-button ${pulseAnimation ? 'pulse' : ''}`}
                onClick={handleChatClick}
                aria-label="Open chat"
            >
                <div className="chatbot-icon">
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="chat-svg"
                    >
                        <path
                            d="M12 2C6.48 2 2 6.48 2 12C2 13.54 2.38 14.99 3.06 16.27L2 22L7.73 20.94C9.01 21.62 10.46 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C10.69 20 9.45 19.67 8.36 19.09L8 18.91L4.55 19.73L5.38 16.34L5.18 15.97C4.57 14.86 4.22 13.61 4.22 12.28C4.22 7.73 7.73 4 12.28 4C16.83 4 20.56 7.73 20.56 12.28C20.56 16.83 16.83 20.56 12.28 20.56L12 20Z"
                            fill="currentColor"
                        />
                        <circle cx="8.5" cy="12" r="1.5" fill="currentColor" />
                        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                        <circle cx="15.5" cy="12" r="1.5" fill="currentColor" />
                    </svg>
                </div>
                <span className="chatbot-tooltip">Chat with AI Assistant</span>
            </button>
        </div>
    );
};

export default ChatbotButton;
