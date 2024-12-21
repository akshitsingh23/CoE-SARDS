import React from 'react'
import logo1 from './1.jpg';
import logo2 from './2.jpg';
import logo3 from './3.jpg';
import logo4 from './4.jpg';
import logo5 from './5.jpg';
import logo6 from './6.jpg';
import logo7 from './7.jpg';
import logo8 from './8.jpg';
import logo10 from './10.jpg';
import logo11 from './11.jpg';
import logo12 from './12.JPG';
import logo13 from './13.jpeg';
import logo14 from './14.jpg';
import logo15 from './15.HEIC';
import logo16 from './16.HEIC';
import logo17 from './17.HEIC';
import logo18 from './18.jpg';
import logo19 from './19.jpg';
import cybersec from './cybersec.jpg';

const images = [
    {
        img: logo13,
        title: 'IIT Ropar-T'
    },
    {
        img: logo14,
        title: 'IIT Ropar-T'
    },

    {
        img: logo18,
        title: 'IIT Ropar-T'
    },
    {
        img: logo19,
        title: 'IIT Ropar-T'
    },
    {
        img: logo1,
        title: 'IIT Ropar-TBIF signed MoU with Startup Punjab',
    },
    {
        img: logo2,
        title: 'IIT Ropar-TBIF signed MoU with Startup Punjab',
    },

    {
        img: logo4,
        title: 'IIT Ropar-TBIF signed MoU with Startup Punjab',
    },
    {
        img: logo5,
        title: 'IIT Ropar-T',
    },
    {
        img: logo6,
        title: 'IIT Ropar-TBIF signed MoU with Startup Punjab',
    },
    {
        img: logo7,
        title: 'IIT Ropar-T'
    },
    {
        img: logo8,
        title: 'IIT Ropar-TBIF signed MoU with Startup Punjab',
    },
    {
        img: logo10,
        title: 'IIT Ropar-T'
    },
    {
        img: logo11,
        title: 'IIT Ropar-T'
    },
    {
        img: logo12,
        title: 'IIT Ropar-T'
    },



]
function Events() {
    return (
        <div className='flex flex-col items-center justify-center'>
            <br />
            <br />
            <br />
            {/* <h1 className=''>Events</h1> */}
            <div className="text-orange-400 text-center p-10 text-5xl font-montserrat">Events</div>
            <div className="p-4 flex justify-center items-center grid lg:grid-cols-3 gap-3 md:grid-cols-2 sm:grid-cols-1  lg:overflow-hidden   ">
                {images.map((event, index) => (
                    <div className="relative md:w-[400px]">
                        <img src={event.img} className="events-box rounded-2xl object-cover md:w-[400px] md:h-[350px] object-top" alt="" id="image1" />
                        <div className="absolute inset-0 lg:mr-7 bg-white bg-opacity-90 md:w-[400px] flex justify-center items-center opacity-0 hover:opacity-70 transition-opacity duration-300 rounded-2xl">
                            <span className="text-black text-center p-10 text-lg font-bold font-montserrat">{event.title}</span>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default Events;
