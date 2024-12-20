import React, { useState, useEffect } from "react";
import iitropar from "./logo.png";
import logo2 from "./logo2.png";
import logo from "./logo1.png";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleNavbar = () => setIsOpen((prev) => !prev);
    const closeNavbar = () => setIsOpen(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`fixed w-full z-10 transition-colors hover:shadow-white shadow-lg duration-400 ${scrolled ? "bg-black bg-opacity-50" : "bg-transparent"
                } lg:px-12 px-3 py-4 text-white`}
        >
            <div className="mx-auto px-4 sm:px-6 lg:px-2">
                <div className="flex justify-between h-16 items-center">
                    <a href="/" className="flex items-center">
                        <img src={logo} alt="Logo" className="h-20 w-20 mr-2" />
                        <span className="text-xl font-bold font-serif text-green-300">
                            Center Of Excellence SARDS
                        </span>
                        {/* <img src={logo2} alt="Logo 2" className="h-20 w-20 ml-2 mr-4" /> */}
                    </a>

                    <div className="hidden md:flex text-center text-xl space-x-6 font-serif">
                        <a href="/" className="hover:text-red-300">
                            Home
                        </a>
                        <a href="/team" className="hover:text-red-300">
                            Team
                        </a>
                        <a href="/about" className="hover:text-red-300">
                            About
                        </a>
                        <a href="/contact" className="hover:text-red-300">
                            Contact
                        </a>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={toggleNavbar}
                            className="focus:outline-none focus:ring-2 focus:ring-gray-600"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-black bg-opacity-50">
                    <div className="px-2 pt-2 pb-3 space-y-1 text-center text-2xl">
                        <a
                            href="/"
                            onClick={closeNavbar}
                            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
                        >
                            Home
                        </a>
                        <a
                            href="/team"
                            onClick={closeNavbar}
                            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
                        >
                            Team
                        </a>
                        <a
                            href="/about"
                            onClick={closeNavbar}
                            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
                        >
                            About
                        </a>
                        <a
                            href="/contact"
                            onClick={closeNavbar}
                            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
export default Navbar;