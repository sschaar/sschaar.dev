import React from 'react';
import Header from './Header';

function AboutPage() {
    return (
        <div className="container">
            <Header/>
            <h1>About</h1>
            <p className="centered-text">
                I'm 18-years-old from Austria with a deep passion for becoming a software developer. With a strong
                interest in technology and a drive for creative problem-solving, I aim to develop innovative software
                solutions and contribute positively to the digital world.
            </p>
            <div className="left-text">
                <h2>Technical education</h2>
                <section className="py-5">
                    <ul className="timeline">
                        <li className="timeline-item mb-5">
                            <h5 className="fw-bold">HTL Mössingerstraße</h5>
                            <p className="text-white mb-2 fw-bold">2020-now</p>
                            <p className="text-white">
                                My current education at HTL Mössingerstraße lays the foundation for my future career and
                                deepens my interest in technology. During my time here, I've focused particularly on the
                                field of software engineering, honing my skills in application development using Java
                                and JavaScript. Additionally, I've learned Kotlin for Android app development in Android
                                Studio. Furthermore, I've acquired a basic understanding of hardware development,
                                digital technology, and networking. Although I have a grasp of hardware fundamentals, I
                                envision my future primarily in software development, especially in app development.
                                This diverse education equips me to succeed in both software and hardware development,
                                while I
                                concentrate on my passion for software engineering in the future.
                            </p>
                        </li>
                    </ul>
                </section>

                <h2>Work experience as a software developer</h2>
                <p className="text-white">
                    Although I'm still in my education and haven't completed an internship yet, I've gained
                    solid knowledge in software development at HTL Mössingerstraße. My focus has been on app
                    development using Android Studio. I'm highly motivated to apply my knowledge in practice
                    and to gain valuable experiences to contribute to the software development industry.
                </p>
            </div>
        </div>
    );
}

export default AboutPage;