import React from "react";
import { BsMoon } from "react-icons/bs";
import "../styles/navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar border-bottom border-3 shadow">
            <div className="container-fluid d-flex justify-content-between mx-5">
                <h2>Where in the world?</h2>
                <button className="darkMode">
                    {/* proximo a realizar */}
                    <BsMoon/> Dark Mode
                </button>
            </div>
        </nav>
      );
}
 
export default Navbar;