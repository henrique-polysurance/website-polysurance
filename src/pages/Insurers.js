import React, { Component } from 'react';
import { Button } from '../components/Button';

class Insurers extends Component {
    render() {
        return (
            <>
                <div style={{ textAlign: "center", padding: "5rem", backgroundColor: "#292828", color: "white" }}>
                    <h1>Optimise risk management with Rooya AI-telematics</h1>
                    <p style={{ padding: "1rem" }}>Our advanced technology offers comprehensive
                        insights and data-driven solutions to support your insurance operations
                    </p>
                    <Button color="green" path="/">How it works?</Button>
                </div>
                <div style={{ textAlign: "center", padding: "5rem", backgroundColor: "#292828", color: "white" }}>
                    <h1>Graphics</h1>
                </div>
                <div style={{ textAlign: "center", padding: "5rem", backgroundColor: "#292828", color: "white" }}>
                    <h1>Claims reduction</h1>
                    <p>Implement technology designed to prevent accidents, which helps lower the frequency and severity
                        of insurance claims
                    </p>
                    <h1>Accurate risk profiling</h1>
                    <p>Utilise detailed driver and vehicle data to assess risks more precisely and make informed underwriting
                        decisions
                    </p>
                    <h1>Underwriting support</h1>
                    <p>Use comprehensive performance data to refine your underwriting processes and better assess potential
                        risks
                    </p>
                    <h1>Data-driven insights</h1>
                    <p>Access in-depth reports and historical data to gain a clearer understanding of risk factors and 
                        improve your risk management strategies
                    </p>
                </div>
                <div style={{ textAlign: "center", padding: "5rem" }}>
                    <h1>Comprehensive risk reporting</h1>
                    <p>Detailed analysis of driver and vehicle performance</p>
                </div>
                <div style={{ textAlign: "center", padding: "5rem" }}>
                    <h1>Historical data access</h1>
                    <p>Secure access to long-term data for trend analysis</p>
                </div>
                <div style={{ textAlign: "center", padding: "5rem" }}>
                    <h1>Real-time tracking</h1>
                    <p>Monitor performance and incidents as they occur</p>
                </div>
                <div style={{ textAlign: "center", padding: "5rem" }}>
                    <h1>Data-driven underwriting</h1>
                    <p>Inform underwriting decisions with accurate, data-driven insights</p>
                </div>
                <div style={{ textAlign: "center", padding: "5rem" }}>
                    <div style={{ textAlign: "center", padding: "5rem", backgroundColor: "#292828", color: "white", borderRadius: "20px" }}>
                        <h1>Ready to enhance your insurance management?</h1>
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

export default Insurers;