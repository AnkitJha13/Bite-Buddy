import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h3>Order your favourite food here</h3>
        <p>
          Explore our diverse menu, where each dish is crafted with the finest
          ingredients and culinary mastery. We aim to delight your palate and
          enhance your dining experience with every delectable bite. Join us on
          a culinary journey that promises satisfaction and indulgence, one
          extraordinary meal at a time.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
