import React, { Component } from 'react';
import { Button } from '../components/Button';

class Fleet extends Component {
    render() {
        return (
            <>
                <div style={{ textAlign: "center", padding: "5rem", backgroundColor: "#292828", color: "white" }}>
                    <h1>Transform your fleet management with Rooya AI-telematics</h1>
                    <p style={{ padding: "1rem" }}>Our advanced solutions are designed to optimise
                        every aspect of fleet operations, from real-time monitoring to detailed
                        performance analysis
                    </p>
                    <Button color="green" path="/">How it works?</Button>
                </div>
                <div style={{ textAlign: "center", padding: "5rem", backgroundColor: "#292828", color: "white" }}>
                    <h1>Graphics</h1>
                </div>
                <div style={{ textAlign: "center", padding: "5rem", backgroundColor: "#292828", color: "white" }}>
                    <h1>Real-time vehicle tracking</h1>
                    <p>Keep an eye on our fleet's location, speed, and status with live updates, ensuring efficient router
                        planning and timely deliveries
                    </p>
                    <h1>Performance insights</h1>
                    <p>Access customisable dashboards and detailed reports to monitor fleet performance, identify trends,
                        and make informed decisions
                    </p>
                    <h1>Enhanced driver safety</h1>
                    <p>Improve driver behaviour with real-time alerts and feedback on unsafe practices, helping to reduce
                        accidents and promote safer driving
                    </p>
                    <h1>Seamless integration</h1>
                    <p>Our solutions integrate effortlessly with existing fleet management systems, providing a smooth
                        transition and minimal disruption
                    </p>
                </div>
                <div style={{ textAlign: "center", padding: "5rem" }}>
                    <h1>High-definition dashcams</h1>
                    <p>Capture critical driving data with dual HD cameras</p>
                </div>
                <div style={{ textAlign: "center", padding: "5rem" }}>
                    <h1>AI-driven analysis</h1>
                    <p>Utilise advanced AI to monitor and analyse driver behaviour</p>
                </div>
                <div style={{ textAlign: "center", padding: "5rem" }}>
                    <h1>Custom alerts</h1>
                    <p>Receive real-time notifications for events and incidents</p>
                </div>
                <div style={{ textAlign: "center", padding: "5rem" }}>
                    <h1>Secure cloud storage</h1>
                    <p>Store and access data securely with our cloud-based system</p>
                </div>
                <div style={{ textAlign: "center", padding: "5rem" }}>
                    <div style={{ textAlign: "center", padding: "5rem", backgroundColor: "#292828", color: "white", borderRadius: "20px" }}>
                        <h1>Ready to optimise your fleet operations?</h1>
                        <p>Bibendum vivamus in eget odio elit quis libero. Imperdiet eget
                            egestas orci quam massa amet ac lacus. Adipiscing justo nunc</p>
                        <Button color="green" style={{ margin: "10px 5px" }} path="/">Book a demo</Button>
                        <Button color="white" style={{ margin: "10px 5px" }} path="/">Contact us</Button>
                    </div>
                </div>
            </>
        );
    }
}

export default Fleet;