import React, { useState } from "react";
import "./Navbar.scss";

import { CiMenuBurger } from "react-icons/ci";

import logo from "../../../public/logo1.svg";

const Navbar = () => {
   const [open, setOpen] = useState(false);
   return (
      <nav>
         <div className="left">
            <a href="/" className="logo">
               <img
                  src={logo}
                  style={{ width: "150px", height: "150px" }}
                  alt=""
               />
            </a>

            <a href="/" className="link">
               Home
            </a>
            <a href="/" className="link">
               About
            </a>
            <a href="/" className="link">
               Contact
            </a>
            <a href="/" className="link">
               Agents
            </a>
         </div>
         <div className="right">
            <a href="/" className="link">
               Sign in
            </a>
            <a href="/" className="link register">
               Sign up
            </a>
            <CiMenuBurger
               className={open ? "menuIcon burger-active" : "menuIcon"}
               onClick={() => setOpen(!open)}
            />
            <div className={open ? "menu active" : "menu"}>
               <a href="/" className="link">
                  Home
               </a>
               <a href="/" className="link">
                  About
               </a>
               <a href="/" className="link">
                  Contact
               </a>
               <a href="/" className="link">
                  Agents
               </a>
               <a href="/" className="link">
                  Sign in
               </a>
               <a href="/" className="link">
                  Sign up
               </a>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
