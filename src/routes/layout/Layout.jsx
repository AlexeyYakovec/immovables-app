import React from "react";
import "./Layout.scss";

import { Outlet } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import HomePage from "../Home/HomePage";

function Layout() {
   return (
      <div className="layout">
         <div className="navbar">
            <Navbar />
         </div>
         <div className="content">
            <Outlet />
         </div>
      </div>
   );
}

export default Layout;
