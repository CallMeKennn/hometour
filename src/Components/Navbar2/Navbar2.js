import React from "react";
import { Link } from "react-router-dom";
import "./Navbar2.scss"
import Logo from "../../Assets/img/done.png"

const Navbar2 = () => {
    return (
        <div className="navbar-container">
                <Link className="logo-nav link-style" to="/">
                    <img src={Logo} className="logo" />
                    <div className="logo-text">Home Tour</div>
                </Link>
            <ul className="nav">
                <li>
                    <Link className="link-style" to="/">Home</Link>
                </li>
                <li>
                    <Link className="link-style" to="/contact">Contact Us</Link>
                </li>
                <li>
                    <Link className="link-style"to="/products" >Shop</Link>
                </li>
                <li className="login">
                    <Link className="link-style" to="/login">Log In</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar2;
