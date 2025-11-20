import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-page pt-20">
            <section className="section-padding">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-content">
                            <h1>Our Story</h1>
                            <p className="lead">Born from a passion for speed and precision.</p>
                            <p>
                                Bulls Bike Service started in a small garage with a single stand and a toolbox.
                                Today, we are the premier destination for cyclists who care about their machines.
                                Our philosophy is simple: treat every bike as if it were our own.
                            </p>
                            <p>
                                Whether you're a weekend warrior or a competitive racer, we understand that
                                your bike is an extension of yourself. That's why we invest in the best tools,
                                continuous training, and premium parts.
                            </p>
                        </div>
                        <div className="about-image">
                            <img
                                src="https://images.unsplash.com/photo-1585951237318-9ea5e175b891?q=80&w=2070&auto=format&fit=crop"
                                alt="Mechanic working on bike"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
