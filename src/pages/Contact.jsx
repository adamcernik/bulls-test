import React from 'react';
import Button from '../components/Button';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page pt-20">
            <section className="section-padding">
                <div className="container">
                    <div className="contact-wrapper">
                        <div className="contact-info">
                            <h1>Get in Touch</h1>
                            <p>Ready to book your service? Have a question? Drop us a line.</p>

                            <div className="info-item">
                                <h3>Location</h3>
                                <p>123 Cyclist Lane<br />Bike City, BC 90210</p>
                            </div>

                            <div className="info-item">
                                <h3>Hours</h3>
                                <p>Mon - Fri: 9am - 6pm<br />Sat: 10am - 4pm</p>
                            </div>

                            <div className="info-item">
                                <h3>Contact</h3>
                                <p>hello@bullsbikes.com<br />+1 (555) 123-4567</p>
                            </div>
                        </div>

                        <form className="contact-form">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" placeholder="John Doe" />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" placeholder="john@example.com" />
                            </div>
                            <div className="form-group">
                                <label>Service Type</label>
                                <select>
                                    <option>Basic Tune-up</option>
                                    <option>Pro Overhaul</option>
                                    <option>Custom Build</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea rows="4" placeholder="Tell us about your bike..."></textarea>
                            </div>
                            <Button variant="primary" className="w-full">Send Message</Button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
