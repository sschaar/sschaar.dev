import React from 'react';
import Header from './Header'; // Importiere die Header-Komponente

function HomePage() {
    return (
        <div className="container">
            <Header/> {/* Füge die Header-Komponente hinzu */}
            <p className="centered-text">Welcome to my page! <br/> Here you can learn more about my passion for software development and the
                exciting projects I work on.</p>

        </div>
    );
}

export default HomePage;
