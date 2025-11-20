import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <Link to="/" className="logo">
                            BULLS<span className="text-primary">.</span>
                        </Link>
                        <p>Premium bike service for the modern rider. Quality, speed, and precision.</p>
                    </div>

                    <div className="footer-links">
                        <h4>Explore</h4>
                        <Link to="/services">Services</Link>
                        <Link to="/about">About Us</Link>
                        <Link to="/contact">Contact</Link>
                    </div>

                    <div className="footer-contact">
                        <h4>Visit Us</h4>
                        <p>123 Cyclist Lane<br />Bike City, BC 90210</p>
                        <p>+1 (555) 123-4567</p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Bulls Bike Service. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
