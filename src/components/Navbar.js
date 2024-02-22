import React from "react";

const Navbar = () => {
  return (
    <>
      <header>
        <a className="logo">
          <i className="fas fa-fire" />
          ImagesMarket
        </a>
        <form action="">
          <input type="search" id="search" placeholder="search images" />
          <label htmlFor="search" className="fas fa-search" />
        </form>
        <div id="menu" className="fas fa-bars" />
        <nav className="navbar"></nav>
      </header>
    </>
  );
};

export default Navbar;
