import React from 'react';
import Button from '../components/Button';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <section className="hero">
                <div className="hero-content container">
                    <h1 className="animate-fade-in">Ride with <span className="text-primary">Precision</span></h1>
                    <p className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        Premium bike service for those who demand the best.
                        Expert mechanics, top-tier parts, and a passion for the ride.
                    </p>
                    <div className="hero-buttons animate-fade-in" style={{ animationDelay: '0.4s' }}>
                        <Button to="/contact" variant="primary">Book Service</Button>
                        <Button to="/services" variant="outline">View Services</Button>
                    </div>
                </div>
                <div className="hero-overlay"></div>
            </section>

            <section className="features section-padding">
                <div className="container">
                    <div className="section-header">
                        <h2>Why Choose Bulls</h2>
                        <p>We don't just fix bikes; we elevate your riding experience.</p>
                    </div>

                    <div className="features-grid">
                        <div className="feature-card">
                            <h3>Expert Mechanics</h3>
                            <p>Certified professionals with years of experience on all bike types.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Premium Parts</h3>
                            <p>We only use authentic, high-grade components for every repair.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Fast Turnaround</h3>
                            <p>Get back on the road quicker with our efficient service workflow.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section section-padding">
                <div className="container text-center">
                    <h2>Ready for a Tune-up?</h2>
                    <p>Schedule your service today and feel the difference.</p>
                    <Button to="/contact" variant="primary">Get Started</Button>
                </div>
            </section>
        </div>
    );
};

export default Home;
