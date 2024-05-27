import React from "react";
import "./Header.css";
function Header() {
  return (
    <>
      <div className="header">
        <div className="header-content">
          <h2>Order your favourite food here.</h2>
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
    </>
  );
}

export default Header;
