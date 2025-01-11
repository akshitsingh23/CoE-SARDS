import React from 'react';
import Marquee from 'react-fast-marquee';
import navy from './indian_navy.png';
import western from './Western_Command.png';
import training from './Training_Command_(India).png';
import fire from './fire_service.jpg';
import police from './homeguard.jpg';
import civil from './civil.jpg';
import navalarm from './naval_armaments.jpeg';
import ukindia from './ukindia.webp';
import ordnance from './ordnance.jpg';
import bharat from './Bharat_Dynamics_Logo.png';
import almerio from './Almerio-Logo.png';
import gilard from './gilard.png';
import droneacharya from './Droneacharya-Logo.png';

const marqueeData = [
    {
        img: bharat,
        alt: "bharat"
    },
    {
        img: navy,
        alt: "navy"
    },
    {
        img: western,
        alt: "western"
    },
    {
        img: training,
        alt: "training"
    },
    {
        img: droneacharya,
        alt: "droneacharya",
    },
    {
        img: ordnance,
        alt: "ordnance"
    },
    {
        img: fire,
        alt: "fire"
    },
    {
        img: police,
        alt: "police"
    },
    {
        img: civil,
        alt: "civil"
    },
    {
        img: navalarm,
        alt: "navalarm"
    },
    {
        img: ukindia,
        alt: "ukindia"
    },


    {
        img: almerio,
        alt: "Almerio Industries",
    },

    {
        img: gilard,
        alt: "Gilard Industries",
    }
];

export function Mou() {
    return (
        <div className="h-full w-full overflow-y-hidden bg-black lh:p-24 py-10">
            <div className='h-full w-full flex flex-col items-center justify-center p-10'>
                <div className="text-white text-4xl text-center">MoUs in place with the following commands/Govt agencies</div>
            </div>
            <div className='lg:p-2 p-1'>
                <Marquee speed={120} className="w-full overflow-y-hidden bg-black">
                    {marqueeData.map((data, i) => (
                        <div key={i} className="h-[33vh] flex flex-col items-center justify-center px-4">
                            <img
                                src={data.img}
                                alt={data.alt}
                                className=" border-black object-cover hover:shadow-lg hover:shadow-orange-400 rounded-full"
                                style={{ height: "200px" }}
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
}

export default Mou;
