import React, { Component } from 'react';
import { Button } from '../components/Button';

class Home extends Component {
    render() {
        return (
            <>
                <div style={{ textAlign: "center", padding: "5rem", backgroundColor: "#292828", color: "white" }}>
                    <div>
                        <h1>Meet Rooya Vision</h1>
                        <p style={{ padding: "1rem" }}>Cutting-edge AI telematics and dual dash-cam technology
                            to improve road safety and fleet efficiency in Saudi Arabia</p>
                        <Button color="green" path="/">Discover our solutions</Button>
                    </div>
                </div>
                <div style={{ textAlign: "center", padding: "5rem", backgroundColor: "#292828", color: "white" }}>
                    <h1>Images</h1>
                </div>
                <div style={{ textAlign: "center", padding: "5rem", backgroundColor: "#292828", color: "white" }}>
                    <div>
                        <p>Our solutions</p>
                        <h1>How can we help your business?</h1>
                        <p style={{ padding: "1rem" }}>Whether you manage fleet operations or oversee insurance processes,
                            our tailored solutions offer real-time monitoring, predictive analytics, and seamless
                            integration to meet your specific needs across all industries
                        </p>
                        <Button color="white" path="/">Book a demo with us</Button>
                    </div>
                </div>
                <div style={{ textAlign: "center", padding: "5rem" }}>
                    <h1>Industries we serve</h1>
                </div>
                <div style={{ textAlign: "center", padding: "5rem" }}>
                    <div>
                        <p>Featured highlights and benefits</p>
                        <h1>So why clients choose Rooya?</h1>
                        <p style={{ padding: "1rem" }}>We're revolutionising fleet management and insurance
                            with our cutting-edge AI-vision telematics advanced technology or optmised
                            decision making
                        </p>
                    </div>
                </div>
                <div style={{ textAlign: "center", padding: "5rem" }}>
                    <h1>Image</h1>
                </div>
                <div style={{ textAlign: "center", padding: "5rem" }}>
                    <h1>Achievements and certifications</h1>
                </div>
                <div style={{ textAlign: "center", padding: "5rem", backgroundColor: "#292828", color: "white" }}>
                    <h1>Let's talk</h1>
                </div>
            </>
        );
    }
}

export default Home;