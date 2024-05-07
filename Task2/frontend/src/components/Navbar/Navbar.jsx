import React from "react";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="menuicon">
         <div className="line"></div>
         <div className="line"></div>
         <div className="line"></div>
      </div>
      <div className="title">
        <h1>Notes</h1>
      </div>
    </div>
  );
};

export default Navbar;
