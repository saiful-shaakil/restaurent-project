import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const menu = (
    <>
      <Link
        to="/cart"
        className="text-xl 2xl:text-2xl text-black mr-8 font-popins"
      >
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </Link>
      <Link to="/" className="text-xl mr-8 2xl:text-2xl text-black font-popins">
        Home
      </Link>

      <Link to="/about" className="text-xl 2xl:text-2xl text-black font-popins">
        Login
      </Link>
    </>
  );
  return (
    <div className="navbar z-50 text-black px-4 lg:px-20">
      <div className="navbar-start" style={{ width: "30%" }}>
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-200 rounded-box "
          >
            {menu}
          </ul>
        </div>
        <Link to="/">
          <img className="h-10" src={logo} alt="logo.png" />
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex" style={{ width: "70%" }}>
        <ul className="menu menu-horizontal p-0">{menu}</ul>
      </div>
    </div>
  );
};

export default Navbar;
