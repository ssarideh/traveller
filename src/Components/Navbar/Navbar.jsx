import React, { useState } from "react";
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoCloseCircleSharp } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import "./navbar.css";

const Navbar = (props) => {
  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1 className="title">
              <MdOutlineTravelExplore className="icon" />
              Traveller
            </h1>
          </a>
        </div>
        <div className={props.active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Packages
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Shop
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                About
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Pages
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                News
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Contact
              </a>
            </li>
            <button className="btn">
              <a href="#">Book Now</a>
            </button>
          </ul>
          <div onClick={props.closeNav} className="closeNavbar">
            <IoCloseCircleSharp className="icon" />
          </div>
        </div>
        <div onClick={props.showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
