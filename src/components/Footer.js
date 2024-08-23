import { NavLink } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
    return (
        <div className="footer" style={{ padding: '50px', backgroundColor: "#252424", color: 'white', textAlign: 'center', width: "100%" }}>
            <div className="sb__footer section_padding">
                <div className="footer_links">
                    <div className="footer_links-div">
                        <h1 className='title'>rooya</h1>
                        <p style={{ padding: "1rem 0px" }}>Facebook | +966 543279266 | contact@rooya.ai</p>
                        <p>Riyadh-al-Olaya-Tahlia Street-Duaithar</p>
                        <p>Compound, Kingdom of Saudi Arabia</p>
                        <p style={{ padding: '2rem 0px' }}>Copyright © 2024 Rooya. All Rights Reserved</p>
                    </div>
                    <div className="footer_links-div">
                        <p className='footer-title'>Solutions</p>
                        <NavLink to="fleet" className="footer-link">Fleet</NavLink>
                        <NavLink to="insurers" className="footer-link">Insurers</NavLink>
                        <NavLink to="industry" className="footer-link">Industry</NavLink>
                        <NavLink to="drivers-app" className="footer-link">Driver's app</NavLink>
                    </div>
                    <div className="footer_links-div">
                        <p className='footer-title'>Company</p>
                        <NavLink to="about-us" className="footer-link">About us</NavLink>
                        <NavLink to="/" className="footer-link">CSR</NavLink>
                        <NavLink to="/" className="footer-link">Contact us</NavLink>
                        <NavLink to="support" className="footer-link">Support</NavLink>
                    </div>
                    <div className="footer_links-div">
                        <p className='footer-title'>Client portal</p>
                        <NavLink to="/" className="footer-link">Client portal</NavLink>
                        <NavLink to="/" className="footer-link">Log in</NavLink>
                        <NavLink to="/" className="footer-link">Privacy policy</NavLink>
                        <NavLink to="/" className="footer-link">Terms and conditions</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;