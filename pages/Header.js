import React from 'react';
import Link from 'next/link';

function Header() {
    return (
        <div className="header">
            <link rel="icon" type="image/png" href="/logo.png"/>
            <div className="header-content">
                <a href="https://github.com/sschaar" target="_blank" rel="noopener noreferrer">
                    <img src="/github_logo.png" alt="GitHub" className="github-logo"/>
                </a>

                <div className="center-content">
                    <div className="sschaar">
                        <Link href="/" passHref legacyBehavior>
                            <div>
                                <h1>sschaar</h1>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="projects-link">
                    <Link href="/project" passHref legacyBehavior>
                        <a>projects</a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
