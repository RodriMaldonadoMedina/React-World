import React from "react";
import { BsMoonFill,BsSunFill } from "react-icons/bs";
import "../styles/navbar.css"

const darkModeToggle = () => {
    let btn = document.querySelector(".switch");
    document.body.classList.toggle("darkMode");
    btn.classList.toggle("active");
}

const Navbar = () => {
    return (
        <nav className="navbar border-bottom border-3 shadow">
            <div className="container-fluid d-flex justify-content-between mx-5">
                <h2>Where in the world?</h2>
                <button className="switch" onClick={darkModeToggle}>
                    <span><BsSunFill/></span>
                    <span><BsMoonFill/></span>
                </button>
            </div>
        </nav>
      );
}
 
export default Navbar;