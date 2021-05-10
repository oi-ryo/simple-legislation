import React from "react";
import logo from "../images/logo.png";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <header className="navbar has-background-info">
      <div className="navbar-brand">
        <a className="navbar-item has-text-white" href="/">
          <img src={logo} />
        </a>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <SearchBar />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
