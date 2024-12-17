"use client";
import React from 'react';
import Image from 'next/image';
import navy from './images/indian_navy.png';
import western from './images/Western_Command.png';
import training from './images/Training_Command_(India).png';
import fire from './images/fire_service.jpg';
import police from './images/homeguard.jpg';
import civil from './images/civil.jpg';
import navalarm from './images/naval_armaments.jpeg';
import ukindia from './images/ukindia.webp';
import ordnance from './images/ordnance.jpg';
import bharat from './images/Bharat_Dynamics_Logo.png';
import Marquee from 'react-fast-marquee';
const marqueeData = [
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
        img: ordnance,
        alt: "ordnance"
    },
    {
        img: bharat,
        alt: "bharat"
    }
];

export function Mous() {
    return (
        <div className="h-full w-full overflow-y-hidden bg-black">
            <Marquee speed={100} className="h-full w-full overflow-y-hidden bg-black">
                {marqueeData.map((data, i) => (
                    <div key={i} className="h-[20vh] w-full flex flex-col items-center justify-center p-5">
                        <Image
                            src={data.img}
                            alt={data.alt}
                            className="w-full h-full border-black object-cover hover:shadow-lg hover:shadow-orange-400 rounded-full"
                            width={200}
                            height={200}
                        />
                        {/* <span className="text-black">{data.name}</span> */}
                    </div>
                ))}
            </Marquee>
        </div>
    )
}