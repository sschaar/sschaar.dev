import React from 'react';
import Header from './Header';

function ProjectPage() {
    return (
        <div className="container">
            <Header/>
            <div className="title">
                <h1>projects</h1>
            </div>
            <p className="centered-text">This is just an example for this page.
                <br/>In the near future, you'll be able to see my projects here.</p>
        </div>

    );
}

export default ProjectPage;
