import React, { Component } from 'react';
import { Button } from '../components/Button';

class Home extends Component {
    render() {
        return (
            <>
                <div style={{ textAlign: "center", padding: "5rem" }}>
                    <h1>Meet Rooya Vision</h1>
                    <p style={{ padding: "1rem" }}>Cutting-edge AI telematics and dual dash-cam technology
                        to improve road safety and fleet efficiency in Saudi Arabia</p>
                    <Button path="/">Discover our solutions</Button>
                </div>
            </>
        );
    }
}

export default Home;