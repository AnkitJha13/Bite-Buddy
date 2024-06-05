import React, { useState, useEffect } from "react";
import "./Header.css";

const images = ["/header_img3.png", "/header_img..png", "/header_img2.png", "/header_img4.png"];

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="header">
      <div className="slideshow">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`slide ${index === currentIndex ? "active" : ""}`}
          />
        ))}
      </div>
      <div className="header-contents">
        <h2>Order your favourite food here..</h2>
        <p>
          Indulge in your favorite dishes with ease. From comfort food to
          gourmet meals, our app connects you with the best local restaurants.
          Enjoy a hassle-free ordering experience and savor the flavors you
          love, delivered right to your doorstep. Bon appétit!
        </p>
        <a href="#explore-menu">
          <button>View Menu &nbsp; &rarr;</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
