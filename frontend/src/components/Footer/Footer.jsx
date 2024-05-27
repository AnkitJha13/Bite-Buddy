import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
function Footer() {
  return (
    <>
      <div className="footer" id="contact-us">
        <div className="footer-content">
          <div className="footer-content-left">
            <h2>CONNECT</h2>
            <p>
              Follow us on social media for the latest updates and exclusive
              offers. Have questions or feedback? Reach out to our support team
              anytime. We're here to make your food booking experience seamless
              and enjoyable!
            </p>
            <div className="footer-social-icons">
              <img src={assets.facebook_icon} alt="fb" />
              <a href="https://www.linkedin.com/in/ankit-jha-55353021b/"><img src={assets.linkedin_icon} alt="ln" /></a>
              <a href="https://x.com/ankitjha1403"><img src={assets.twitter_icon} alt="tw" /></a>
            </div>
          </div>
          <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="footer-content-right">
            <h2>CONTACT US</h2>
            <ul>
              <li>+91 67690 98264</li>
              <li><a href="mailto:foodify.contact@gmail.com">foodify.contact@gmail.com</a></li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="footer-copyright">
          Copyright 2024 @ Foodify.com - All Right Reserved.
        </p>
      </div>
    </>
  );
}

export default Footer;
