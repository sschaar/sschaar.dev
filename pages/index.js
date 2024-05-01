// pages/index.js
import React from 'react';

function HomePage() {
    return (
        <div className="container">
            <div className="title">
                <a href="https://github.com/sschaar" target="_blank" rel="noopener noreferrer">
                    <img src="/github_logo.png" alt="GitHub" className="github-logo"/>
                </a>
                <h1>sschaar</h1>
            </div>
            <p>Willkommen auf meiner Seite! Hier kannst du mehr über mich erfahren.</p>
        </div>
    );
}

export default HomePage;
