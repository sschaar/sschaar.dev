import React from 'react';

function Header() {
    return (
        <div className="header">
            <link rel="icon" type="image/jpg" href="/logo.jpg"/>
            <a href="https://github.com/sschaar" target="_blank" rel="noopener noreferrer">
                <img src="/github_logo.png" alt="GitHub" className="github-logo"/>
            </a>
            <div className="name-container">
                <h1>sschaar</h1>
            </div>
        </div>
    );
}

export default Header;