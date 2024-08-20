import { NavLink } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
    return (
        <div className="footer" style={{ padding: '50px', backgroundColor: "purple", color: 'white', textAlign: 'center', width: "100%" }}>
            <div className="sb__footer section_padding">
                <div className="footer_links">
                    <div className="footer_links-div">
                        <h1 className='title'>rooya</h1>
                        <p>Facebook | +966 543279266 | contact@rooya.ai</p>
                        <p style={{ fontWeight: "lighter" }}>Riyadh-al-Olaya-Tahlia Street-Duaithar</p>
                        <p style={{ fontWeight: "lighter" }}>Compound, Kingdom of Saudi Arabia</p>
                        <p style={{ fontWeight: "lighter", padding: '2rem 0px' }}>Copyright © 2024 Rooya. All Rights Reserved</p>
                    </div>
                    <div className="footer_links-div">
                        <p className='title'>Neque nisl</p>
                        <NavLink to="about-us" className="footer-link">About Us</NavLink>
                        <NavLink to="solutions" className="footer-link">Solutions</NavLink>
                        <NavLink to="tech" className="footer-link">Tech</NavLink>
                        <NavLink to="drivers-app" className="footer-link">Driver's app</NavLink>
                    </div>
                    <div className="footer_links-div">
                        <p className='title'>Imperdiet</p>
                        <p>Contact us</p>
                        <NavLink to="support" className="footer-link">Support</NavLink>
                        <p>Privacy policy</p>
                        <p>Terms and conditions</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;