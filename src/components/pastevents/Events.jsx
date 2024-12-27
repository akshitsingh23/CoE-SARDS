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
import logo20 from './20.jpg';
import logo21 from './21.jpg';
import logo22 from './22.jpeg';
import logo23 from './23.jpeg';
import logo24 from './24.jpg';
import logo25 from './25.jpg';
import logo26 from './26.jpeg';
import logo27 from './27.jpeg';
import cybersec from './cybersec.jpg';

const images = [
    {
        img: logo13,
        title: 'Interaction with Gen Upendra Dwivedi, PVSM, AVSM, COAS with team IIT Ropar'
    },
    {
        img: logo14,
        title: 'Lt Gen Kanwar Vinod Kumar, SO-in-C, Indian Army interacting with team IIT Ropar'
    },
    {
        img: logo19,
        title: 'Exchange of Momento with DG Armd Corps'
    },

    {
        img: logo8,
        title: 'Visit team IIT Ropar to HQ ARTRAC',
    },
    {
        img: logo10,
        title: 'Team IIT Ropar with Lt Gen M. V. Suchindra Kumar, PVSM, AVSM, YSM**, VSM, GOC-in-C, NC ',
    },
    {
        img: logo27,
        title: 'Visit Sr Officials HQ WC at IIT Ropar '
    },

    {
        img: logo6,
        title: 'Signing of MoU with DGNAI, Indian Navy',
    },
    {
        img: logo18,
        title: 'Signing of MoU with Almerio Defence & Aerospace'
    },
    {
        img: logo1,
        title: 'IIT Ropar-TBIF signed MoU with Startup Punjab',
    },

    {
        img: logo12,
        title: 'The Genesis : Lt Gen Subrata Saha, PVSM, UYSM, YSM, VSM** (Retd) with Director IIT Ropar'
    },
    {
        img: logo24,
        title: 'Lt Gen Ram Chander Tiwari, UYSM, AVSM, SM, GOC-in-C, EC visiting IIT Ropar stall in EastTech, 2024 Kolkata'
    },
    {
        img: logo21,
        title: 'Lt Gen Upendra Dwivedi, PVSM, AVSM, GOC-in-C visiting IIT Ropar stall in NorthTech, Jammu'
    },

    {
        img: logo26,
        title: 'Lt Gen Sanjay Mitra, AVSM, GOC, Strike Corps interacting during NorthTech, Leh 2024'
    },
    {
        img: logo25,
        title: 'Lt Gen AS Pendharkar, AVSM, YSM, GOC-in-C, Spear Corps interacting at IIT Ropar stall in EastTech, 2024 Kolkata'
    },

    {
        img: logo7,
        title: 'Sr Army officials interacting with Faculty in Expo'
    },
    {
        img: logo20,
        title: 'Team IIT Ropar visiting Uri Grn for project'
    },
    {
        img: logo5,
        title: 'PI & Students in-field trials',
    },
    {
        img: logo2,
        title: 'Certification of first batch of DGR Course, Cyber-Warriors',
    },
    {
        img: logo11,
        title: 'Dr. Atharva Poundarik interacting with first batch of Cyber-Warriors'
    },
    {
        img: logo4,
        title: 'Chematico Technologies (Startup) displaying products at Bharat Tex 2024',
    },


    {
        img: logo22,
        title: 'Faculties IIT Ropar interacting with fd fmn'
    },


];
function Events() {
    return (
        <div className='flex flex-col items-center justify-center'>
            <br />
            <br />
            <br />
            {/* <h1 className=''>Events</h1> */}
            <div className=" text-center p-10 text-5xl bg-clip-text font-bold font-montserrat text-transparent mb-5 bg-gradient-to-tr from-red-100 to-blue-300">Events</div>
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
