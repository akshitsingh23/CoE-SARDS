
import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faXTwitter, faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    const topRef = useRef(null);

    return (
        <div className='p-5 body-footer flex justify-center items-center'>
            <div className="flex justify-center items-center col-span-2 rounded-lg lg:mr-10 bg-black bg-opacity-70 gap-3 sm:ml-16 shadow-2xl grid lg:grid-cols-3 sm:flex-col md:flex-col xs:flex-col">
                {/* Left Column */}
                <div className='rounded-lg w-full flex justify-center items-center p-2'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11058.394494593684!2d76.47299759665755!3d30.96391173954016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3905542fe45e58f7%3A0x5d16c2617cfdbdb8!2sIndian%20Institute%20Of%20Technology%E2%80%93Ropar%20(IIT%E2%80%93Ropar)!5e0!3m2!1sen!2sin!4v1734697061516!5m2!1sen!2sin"
                     width="300"
                      height="300" 
                    //   style="border:0;" 
                      allowfullscreen="" 
                    //   loading="lazy" 
                    className='rounded-xl'
                      referrerpolicy="no-referrer-when-downgrade"
                      ></iframe>
                </div>
                {/* Right Column */}
                <div className="col-span-2 flex flex-col lg:flex-row rounded-xl sm:flex-row xs:flex-col md:flex-col justify-between p-3">
                    <div className='lg:flex-col sm:flex-row xs:flex-row text-wrap'>
                        <div>
                            <div className='mt-10 font-montserrat lg:text-lg sm:text-sm text-white text-justify'>
                                <p className='m-2 text-justify'>Center of Excellence - SARDS </p>
                                <p className='m-2 text-justify'>Top Floor (East Wing), M. Visvesvaraya Block</p>
                                <p className='m-2'>Indian Institute Of Technology, Ropar</p>
                                <p className='m-2'> Rupnagar - 140001, Punjab, India</p>
                            </div>
                        </div>
                        <div className="lg:mt-5 p-3 hover:border-white hover:border-3 text-center">
                            <h2 className="font-roboto text-lg text-white">Contact:</h2>
                            <p className='font-montserrat text-lg text-white'>Email: tbioffice@iitrpr.ac.in</p>
                            <p className='font-montserrat text-lg text-white'>Phone: +91-9417484881</p>
                        </div>
                    </div>
                    <div className='lg:px-10'>
                        <div className='grid gap-8'>
                            <h2 className="font-bold text-center font-montserrat text-lg text-emerald-400">Quick Links</h2>
                            <div className='text-center'>
                                <ul>
                                    <li className="text-white font-montserrat font-bold text-sm hover:text-orange-400 p-2 hover-underline-animation">
                                        <a href="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</a>
                                    </li>
                                    <li className="text-white font-montserrat font-bold text-sm hover:text-orange-400 p-2 hover-underline-animation">
                                        <a href="/about" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>About</a>
                                    </li>
                                    <li className="text-white font-montserrat font-bold text-sm hover:text-orange-400 p-2 hover-underline-animation">
                                        <a href="/team" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Team</a>
                                    </li>
                                    <li className="text-white font-montserrat font-bold text-sm hover:text-orange-400 p-2 hover-underline-animation">
                                        <a href="/facilities" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Support</a>
                                    </li>
                                    <li className="text-white font-montserrat font-bold text-sm hover:text-orange-400 p-2 hover-underline-animation">
                                        <a href="/career" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Career</a>
                                    </li>
                                    <li className="text-white font-montserrat font-bold text-sm hover:text-orange-400 p-2 hover-underline-animation">
                                        <a href="/contact-us" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-around items-center grid grid-col-1 lg:px-5">
                        <a href='https://www.iitrpr.ac.in/coe-sards/Courses.html' target='_blank' className='flex justify-center items-center'>
                            <button className='relative bg-blue-300 font-bold p-2 text-lg mb-4 rounded-lg hover:shadow-xl hover:shadow-sky-300 hover:scale-110 transition transform-700 lg:mt-20'>
                                Courses We Offer
                            </button>
                        </a>
                        <h2 className="sm:mb-10 xs:mb-10 xs:mt-5 font-roboto text-3xl text-center text-white transition-transform ease-in-out delay-400">Connect with Us</h2>
                        <div className="flex justify-between items-center gap-3 lg:mb-11 sm:mb-5 md:mb-8 xs:mb-5">
                            <a href="https://www.linkedin.com/company/iit-ropar-technology-business-incubator-foundation?original_refe" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className='hover:scale-110' icon={faLinkedin} size="2x" color="#0077B5" />
                            </a>
                            <a href="https://www.instagram.com/iitropartbif/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className='hover:scale-110' icon={faInstagram} size="2x" color="#E1306C" />
                            </a>
                            <a href="https://x.com/iitrprtbif?lang=en" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className='hover:scale-110' icon={faXTwitter} size="2x" color="white" />
                            </a>
                            <a href="mailto:tbif.iitrpr.ac.in" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className='hover:scale-110' icon={faGoogle} size="2x" color="#DB4437" />
                            </a>
                            <a href="https://www.facebook.com/p/IIT-Ropar-TBIF-100064188995310/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className='hover:scale-110' icon={faFacebookF} size="2x" color="#1877F2" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
