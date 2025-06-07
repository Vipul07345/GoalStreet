// Footer.jsx
import React from 'react';
import './Footer.css'; // We'll create this CSS file next
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <p className='footer-heading'>Goalstreet is one of India’s largest student communities that provides a one-stop platform for students to learn new skills, network with peers, and grow as an individual.</p>
                </div>
                <div className="footer-section company">
                    <h4>COMPANY</h4>
                    <ul>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Privacy policy</a></li>
                        <li><a href="#">Terms & conditions</a></li>
                    </ul>
                </div>
                <div className="footer-section quick-links">
                    <h4>QUICK LINKS</h4>
                    <ul>
                        <li><a href="#">Hire talent</a></li>
                        <li><a href="#">Find work</a></li>
                        <li><a href="#">internships</a></li>
                    </ul>
                </div>
                <div className="footer-bottom">
                <p>© 2024. GOAL STREET. All rights reserved.</p>
            </div>
            </div>
         
            
               <div className="footer-social">
                {/* Replace with actual social media icons or Font Awesome/React Icons */}
                <a href="#" className="social-icon"><i className="fab"><FaInstagram /></i></a>
                <a href="#" className="social-icon"><i className="fab"><FaLinkedinIn /></i></a>
                <a href="#" className="social-icon"><i className="fab"><FaYoutube />
</i></a>
                <a href="#" className="social-icon"><i className="fabs"><FaFacebookF />
</i></a>
            </div>
        </footer>
    );
};

export default Footer;