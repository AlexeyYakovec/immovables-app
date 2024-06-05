import React, { useState } from "react";
import "./Navbar.scss";

import { CiMenuBurger } from "react-icons/ci";

import logo from "../../../public/logo1.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
   const [open, setOpen] = useState(false);

   const user = true;
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
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Agents</a>
         </div>
         <div className="right">
            {user ? (
               <div className="user">
                  <img
                     src="https://media.istockphoto.com/id/155472787/ru/фото/on-the-road.jpg?s=2048x2048&w=is&k=20&c=pu4oymlmsvxFPeaN2tBdxCbgvCWxdb04eK39djj97HA="
                     alt=""
                  />
                  <span>John Doe</span>
                  <Link to="/profile" className="profile">
                     <div className="notification">3</div>
                     <span>Profile</span>
                  </Link>
               </div>
            ) : (
               <>
                  <a href="/">Sign in</a>
                  <a href="/" className="register">
                     Sign up
                  </a>
               </>
            )}
            <CiMenuBurger
               className={open ? "menuIcon burger-active" : "menuIcon"}
               onClick={() => setOpen(!open)}
            />
            <div className={open ? "menu active" : "menu"}>
               <a href="/">Home</a>
               <a href="/">About</a>
               <a href="/">Contact</a>
               <a href="/">Agents</a>
               <a href="/">Sign in</a>
               <a href="/">Sign up</a>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
