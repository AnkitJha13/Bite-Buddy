import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <h2>CONNECT</h2>
          <p>
            Thank you for choosing to dine with us. We are dedicated to
            providing you with exceptional service and unforgettable culinary
            experiences. Stay connected and follow us for updates, special
            offers, and more. We look forward to welcoming you back soon for
            another delightful meal.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <a href="https://x.com/ankitjha1403"><img src={assets.twitter_icon} alt="" /></a>
            <a href="https://www.linkedin.com/in/ankit-jha-55353021b/"><img src={assets.linkedin_icon} alt="" /></a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>CONTACT US</h2>
          <ul>
            <li>+1-212-456-7890</li>
            <li><a href="mailto:homehub@support.com">contact@Foodify.com</a></li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © Foodify.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
