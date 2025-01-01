import React, { useEffect } from 'react';
import img from '../power/heli4.jpeg'
// import heli from '../power/heli2.jpeg'
import collage from '../power/collage1.jpg'
// import { useEffect } from 'react'
function Contact() {

    return (
        <div className='bg-black flex justify-center items-center h-auto'>
            <div>
                <br /><br /><br /><br />


                {/* <h1 className='text-white'>Contact</h1> */}
                <div className='flex lg:flex-row flex-col '>
                    <div className='flex flex-col lg:w-1/2 p-1'>

                        <img src={collage} alt="" className='lg:mt-4 rounded-xl' />
                        <p className='text-white mt-5 lg:p-10 p-5 font-montserrat text-lg'>
                            We welcome you to   contact us for any queries, suggestions, or feedback. We are always open to new ideas and collaborations. Please fill out the form and we will get back to you as soon as possible.
                        </p>
                    </div>
                    <iframe
                        id="google-form"
                        src="https://docs.google.com/forms/d/e/1FAIpQLScYjfnY4UpPIWA6J4ayfq2dH-c5hBO692VjWWr3DfmUhuYHxw/viewform?embedded=true"
                        // width="740"
                        className='lg:w-[700px] w-full lg:h-[900px] h-[1000px]'
                        // height="900"
                        frameborder=""
                        marginheight="0"
                        scrolling='no'
                        onScroll={false}
                        marginwidth="0">
                        Loading…
                    </iframe>
                </div>
            </div>
        </div>
    )
}

export default Contact
