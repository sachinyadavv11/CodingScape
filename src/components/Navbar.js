import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>

            <div className="navbar">
                <div className="logo">
                    <img src="/images/Logo.png" alt="Excel" />

                    <div id="menuicon" onClick={toggleMenu}>
                        <i class="fa-solid fa-bars-staggered"></i>
                    </div>
                </div>

                <div className={`navlinks ${isMenuOpen ? 'open' : ''}`} id='nav-links'>
                    <div className="dropdown"> <Link to="/">Home</Link></div>
                    <div className="dropdown"><Link to="/about">About</Link></div>

                    <div className="dropdown"> <Link to="">Courses <i class="fa-solid fa-angle-down"></i></Link>

                        <div className="dropdown-content">
                            <Link to="/courses">IT Courses</Link>
                            <Link to="/basic-courses">Basic Courses</Link>
                        </div>

                    </div>
                    <div className="dropdown"><Link to="/contactus">Contact Us</Link></div>
                    <div className="dropdown"><Link to=""><i class="fa-solid fa-cart-plus"></i></Link></div>

                    <div className="login">
                        <Link to="/login">Login</Link>
                        <span> | </span>
                        <Link to="/register">Sign up</Link>
                    </div>

                </div>


            </div>

        </>
    )
}

export default Navbar
