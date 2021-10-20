import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../hooks/useFirebase";
import logo from "./logo.png";

const Navbar = () => {
  const { user, logOut } = useFirebase();
  return (
    <div>
      <header className="navbar">
        <img src={logo} alt="banner" />
        <div className="navbar__title navbar__item"></div>
        <div className="navbar__item">
          <Link style={{ textDecoration: "none", color: "black" }} to="/home">
            Home
          </Link>
        </div>
        <div className="navbar__item">
          <Link style={{ textDecoration: "none", color: "black" }} to="/about">
            About
          </Link>
        </div>
        <div className="navbar__item">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/services"
          >
            Services
          </Link>
        </div>
        <div className="navbar__item">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/contact"
          >
            Contacts
          </Link>
        </div>
        {user.email && (
          <span style={{ color: "black" }}>Hello,{user.displayName} </span>
        )}
        {user.email ? (
          <button onClick={logOut}>log out</button>
        ) : (
          <div className="navbar__item">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/login"
            >
              Login
            </Link>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
