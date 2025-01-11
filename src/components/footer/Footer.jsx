
import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faXTwitter, faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
function Footer() {
    const topRef = useRef(null);

    return (
        <div className='p-5 body-footer flex justify-center items-center flex-col' id='footer'>
            <div className="flex justify-center items-center col-span-2 rounded-lg lg:mr-10 bg-black bg-opacity-70 gap-3 sm:ml-16 shadow-2xl grid lg:grid-cols-3 sm:flex-col md:flex-col xs:flex-col" id='content'>
                {/* Left Column */}
                <div className="flex justify-center items-center w-full h-full">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11058.394494593684!2d76.47299759665755!3d30.96391173954016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3905542fe45e58f7%3A0x5d16c2617cfdbdb8!2sIndian%20Institute%20Of%20Technology%E2%80%93Ropar%20(IIT%E2%80%93Ropar)!5e0!3m2!1sen!2sin!4v1734697061516!5m2!1sen!2sin"
                        width=""
                        className="rounded-xl lg:h-full sm:max-w-full h-[300px] max-w-[300px] "
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                    >
                        Loading...
                    </iframe>
                </div>
                {/* Right Column */}
                <div className="col-span-2 flex flex-col lg:flex-row rounded-xl sm:flex-row xs:flex-col md:flex-col justify-between p-3">
                    <div className='lg:flex-col sm:flex-row xs:flex-row text-wrap'>
                        <div>
                            <div className='mt-10 font-montserrat lg:text-lg sm:text-sm text-justify text-white '>
                                <p className='m-2 text-center'>CoE-SARDS </p>
                                <p className='m-2 '>Top Floor (East Wing), M. Visvesvaraya Block</p>
                                <p className='m-2'>Indian Institute Of Technology, Ropar</p>
                                <p className='m-2'> Rupnagar - 140001, Punjab, India</p>
                            </div>
                        </div>
                        <div className="lg:mt-5 p-3 hover:border-white hover:border-3 text-center">
                            <h2 className="font-roboto text-lg text-white">Contact:</h2>
                            <p className='font-montserrat text-lg text-white'>Email: admin@defence.iitrpr.ac.in</p>
                            <p className='font-montserrat text-lg text-white'>head@defence.iitrpr.ac.in</p>
                            <p className='font-montserrat text-lg text-white'>Phone: +91-9417484881</p>
                        </div>
                    </div>
                    <div className='lg:px-10'>
                        <div className='grid gap-8'>
                            <div className=' sm:hidden md:hidden lg:block blocked'>
                                <br />
                            </div>
                            <h2 className="font-bold text-center font-montserrat text-lg text-emerald-400">Quick Links</h2>

                            <div className='text-center'>
                                <ul>
                                    <li className="text-white font-montserrat font-bold text-sm hover:text-orange-400 p-2 hover-underline-animation">
                                        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</Link>
                                    </li>
                                    <li className="text-white font-montserrat font-bold text-sm hover:text-orange-400 p-2 hover-underline-animation">
                                        <Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>About</Link>
                                    </li>
                                    <li className="text-white font-montserrat font-bold text-sm hover:text-orange-400 p-2 hover-underline-animation">
                                        <Link to="/team" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Team</Link>
                                    </li>
                                    <li className="text-white font-montserrat font-bold text-sm hover:text-orange-400 p-2 hover-underline-animation">
                                        <Link to="/events" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Events</Link>
                                    </li>
                                    <li className="text-white font-montserrat font-bold text-sm hover:text-orange-400 p-2 hover-underline-animation">
                                        <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className=" justify-around items-center grid grid-col-1 lg:px-5">
                        <Link to='/courses' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='flex justify-center items-center'>
                            <button className='relative bg-blue-300 font-bold p-2 text-lg mb-4 rounded-lg hover:shadow-xl hover:shadow-sky-300 hover:scale-110 transition transform-700 lg:mt-20'>
                                Courses We Offer
                            </button>
                        </Link>
                        <h2 className="sm:mb-10 xs:mb-10 xs:mt-5 font-roboto text-3xl text-center text-white transition-transform ease-in-out delay-400">Connect with Us</h2>
                        <div className="flex justify-between items-center gap-3 lg:mb-11 sm:mb-5 md:mb-8 xs:mb-5">
                            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className='hover:scale-110' icon={faLinkedin} size="2x" color="#0077B5" />
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className='hover:scale-110' icon={faInstagram} size="2x" color="#E1306C" />
                            </a>
                            <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className='hover:scale-110' icon={faXTwitter} size="2x" color="white" />
                            </a>
                            <a href="mailto:admin@defence.iitrpr.ac.in" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className='hover:scale-110' icon={faGoogle} size="2x" color="#DB4437" />
                            </a>
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className='hover:scale-110' icon={faFacebookF} size="2x" color="#1877F2" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div
                id="developer"
                className="text-center bg-gradient-to-r from-black via-gray-700 to-black hover:from-orange-700 hover:via-orange-400 hover:to-orange-800 rounded-full hover:text-xl transition-all duration-300 ease-in-out text-white font-montserrat text-sm lg:opacity-90 lg:bottom-0 lg:w-full lg:left-0 lg:hover:opacity-100 md:static md:opacity-100 md:p-3 sm:static sm:opacity-100 sm:p-3 p-10 mt-5 shadow-lg hover:shadow-orange-300">
                <a href="http://akshit-singh.vercel.app" target="_blank" className="font-bold hover:text-gray-800 transition-colors duration-300">Developed by Akshit</a>
            </div>


        </div>
    );
}

export default Footer;
