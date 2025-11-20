import React from 'react';
import Button from '../components/Button';
import './Services.css';

const Services = () => {
    const services = [
        {
            title: "Basic Tune-up",
            price: "$89",
            features: ["Brake Adjustment", "Gear Tuning", "Chain Lubrication", "Safety Check"],
            recommended: false
        },
        {
            title: "Pro Overhaul",
            price: "$199",
            features: ["Deep Clean", "Bearing Service", "Wheel Truing", "New Cables & Housing", "Full Safety Inspection"],
            recommended: true
        },
        {
            title: "Custom Build",
            price: "Custom",
            features: ["Frame Prep", "Component Installation", "Fit Adjustment", "Consultation"],
            recommended: false
        }
    ];

    return (
        <div className="services-page pt-20">
            <section className="section-padding">
                <div className="container">
                    <div className="section-header">
                        <h1>Our Services</h1>
                        <p>Professional care for every type of rider.</p>
                    </div>

                    <div className="pricing-grid">
                        {services.map((service, index) => (
                            <div key={index} className={`pricing-card ${service.recommended ? 'recommended' : ''}`}>
                                {service.recommended && <div className="badge">Recommended</div>}
                                <h3>{service.title}</h3>
                                <div className="price">{service.price}</div>
                                <ul className="features-list">
                                    {service.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
                                <Button
                                    to="/contact"
                                    variant={service.recommended ? 'primary' : 'outline'}
                                    className="w-full"
                                >
                                    Book Now
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
