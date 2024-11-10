import React from 'react';
import "../component/Footer.css";
import footer_logo from "../img/footer_logo.png";

function Footer() {
    return (
        <div className="container-fluid padding-X">
            <div className="row">
                <div className="f-logo">
                    <img src={footer_logo} alt="#" className="footer-logo"/>
                </div>
                <div className="col-xl-2">
                    <a href="#" className="footer_link">Shop</a>
                    <a href="#" className="footer_link">About</a>
                    <a href="#" className="footer_link">Journal</a>
                    <a href="#" className="footer_link">Support</a>
                    <a href="#" className="footer_link">COVID-19 Info</a>
                    <a href="#" className="footer_link">Order Status</a>
                    <a href="#" className="footer_link">Corporate Sales</a>
                </div>
                <div className="col-xl-4">
                    <p className="footer-title">Newsletter Signup</p>
                    <p className="footer-text">Sign up to our Newsletter to hear about new product releases, learn
                        about our design process, and everything else going on behind the scenes at Grovemade.</p>
                    <div className="line"/>
                </div>
                <div className="col-xl-6"/>
            </div>

            <div className="base-part">
                <p className="base-part-text">©2020 Grovemade</p>
                <p className="base-part-text">Terms & Conditions</p>
                <p className="base-part-text">Privacy Policy</p>
                <p className="base-part-text">Site by Department</p>
            </div>
        </div>
    );
}

export default Footer;