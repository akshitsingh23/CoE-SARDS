import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo1.png'; // Update with the correct path to your logo
import iitlogo from './logo.png';
import './navbar.css'
function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    const toggleNavbar = () => {
        setNavbarOpen(!navbarOpen);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', handleScroll);

    return (
        <nav className={`fixed w-full z-10 transition-colors hover:shadow-white shadow-lg duration-400 ${scrolled ? "bg-white" : "bg-transparent"} lg:px-12 px-3 py-4 text-white`}>
            <div className="mx-auto px-4 sm:px-6 lg:px-2">
                <div className="flex justify-between h-16 items-center">
                    <div className='flex flex-row'>
                        <Link to="https://iitrpr.ac.in" target='_blank' className="mr-2" onClick={scrollToTop}>
                            <img id="logo" src={iitlogo} alt="Logo"  className={`h-20 w-20 ${scrolled ?"" : "invert"}`} />
                        </Link>
                        <Link to="/" className="flex items-center" onClick={scrollToTop}>
                            <img src={logo} alt="Logo" className="h-20 w-20 mr-2" />
                            <span className={` text-md lg:text-3xl  font-bold font-montserrat   ${scrolled ? "text-black" : "text-white"} duration-20 transition-colors `}>
                                CoE - SARDS
                            </span>
                        </Link>
                    </div>
                    {/* {`text-xl font-bold font-montserrat  ${scrolled ? "text-white" : "text-black"} `} */}
                    <div className={`hidden md:flex transition-colors text-center text-md space-x-6 font-montserrat font-bold duration-20 ${scrolled ? "text-black" : "text-white"} lg:px-12 px-3 py-4 `} >
                        <Link to="/" className="hover:text-orange-500 hover:underline hover:underline-offset-8 hover:decoration-orange-500 transition-all duration-300" onClick={scrollToTop}>
                            Home
                        </Link>
                        <Link to="/about" className="hover:text-orange-500 hover:underline hover:underline-offset-8 hover:decoration-orange-500 transition-all duration-300" onClick={scrollToTop}>
                            About
                        </Link>
                        <Link to="/team" className="hover:text-orange-500 hover:underline hover:underline-offset-8 hover:decoration-orange-500 transition-all duration-300" onClick={scrollToTop}>
                            Team
                        </Link>

                        <Link to="/events" className="hover:text-orange-500 hover:underline hover:underline-offset-8 hover:decoration-orange-500 transition-all duration-300" onClick={scrollToTop}>
                            Events
                        </Link>
                        <Link to="/contact" className="hover:text-orange-500 hover:underline hover:underline-offset-8 hover:decoration-orange-500 transition-all duration-300" onClick={scrollToTop}>
                            Contact
                        </Link>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={toggleNavbar}
                            className={`hamburger ${navbarOpen ? 'open' : ''} focus:outline-none focus:ring-2 focus:ring-gray-600`}
                            aria-label="Toggle menu"
                        >
                            <span className={`hamburger-line ${scrolled ? 'bg-black' : 'bg-red-500'}`} ></span>
                            <span className={`hamburger-line ${scrolled ? 'bg-black' : 'bg-red-500'}`} ></span>
                            <span className={`hamburger-line ${scrolled ? 'bg-black' : 'bg-red-500'}`} ></span>
                            {/* <span className="hamburger-line"></span> */}
                            {/* <span className="hamburger-line"></span> */}
                        </button>
                    </div>
                </div>

                {navbarOpen && (
                    <div className="md:hidden mt-4 space-y-2 bg-white rounded-3xl font-bold font-montserrat h-screen justify-center items-center flex flex-col">
                        <Link
                            to="/"
                            className="block text-center text-xl text-black hover:text-orange-500 transition-all duration-300"
                            onClick={() => {
                                toggleNavbar();
                                scrollToTop();
                            }}
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className="block text-center text-xl text-black hover:text-orange-500 transition-all duration-300"
                            onClick={() => {
                                toggleNavbar();
                                scrollToTop();
                            }}
                        >
                            About
                        </Link>
                        <Link
                            to="/team"
                            className="block text-center text-xl text-black hover:text-orange-500 transition-all duration-300"
                            onClick={() => {
                                toggleNavbar();
                                scrollToTop();
                            }}
                        >
                            Team
                        </Link>

                        <Link
                            to="/events"
                            className="block text-center text-xl text-black hover:text-orange-500 transition-all duration-300"
                            onClick={() => {
                                toggleNavbar();
                                scrollToTop();
                            }}
                        >
                            Events
                        </Link>
                        <Link
                            to="/contact"
                            className="block text-center text-xl text-black hover:text-orange-500 transition-all duration-300"
                            onClick={() => {
                                toggleNavbar();
                                scrollToTop();
                            }}
                        >
                            Contact
                        </Link>
                    </div>
                )}

            </div>
        </nav>
    );
}

export default Navbar;