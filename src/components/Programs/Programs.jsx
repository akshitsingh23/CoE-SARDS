"use client";
import React from 'react';
import './programs.css';

import img0 from "../power/army.png";
import img1 from "../power/sf.jpeg";
import img2 from "../power/power.webp";
import img3 from "../power/ghatak.jpg";
// import img0 from '../../images/power/airforce.jpg';
// import img3 from '../../images/power/army3.webp';

const programData = [
    {
        id: 1,
        title: 'Call For Startup Incubation at IIT ROPAR - TBIF',
        description: 'Are you innovative entrepreneurs of a startup with a ground-breaking idea? TBIF? Apply now to get incubated at IIT Ropar - TBIF and get access to a wide range of resources and mentorship. Apply by 15th September 2024',
        link: '/',
        imageUrl: img0,
    },
    {
        id: 2,
        title: 'Entrepreneurship Orientation Program',
        description: 'TBIF, in collaboration with Startup Punjab (GoP), has organized the "Entrepreneurship Orientation Program" specifically tailored for aspiring student entrepreneurs at Indian Institute of Technology, Ropar. The program comprised five interactive sessions held on various dates from 29th February to 28th March 2024.',
        link: '/',
        imageUrl: img1
    },
    {
        id: 3,
        title: 'Cybersecurity Course for Armed Forces',
        description: 'The Centre of Excellence for Studies and Applied Research in Defence and Security at IIT Ropar, in collaboration with the Directorate General Resettlement (DGR), organized a pioneering course on Cybersecurity for the armed forces.',
        link: '/',
        imageUrl: img2
    },
    {
        id: 4,
        title: 'DGCA Authorized Remote Pilot Training Organization for and Establishment of CoE with MP Govt. with Incubation focus on Drone tech',
        description: 'Synergy in Research, Development, and Innovation for Modernization of the Military',
        link: '/',
        imageUrl: img3
    },
    // Add more program items here
];

export function Programs() {
    const handleMouseLeave = () => {
        const imgElement = document.getElementById('img2');
        if (imgElement) {
            imgElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='bg-black h-auto p-10'>
            <h1 className='text-red-400 opacity-70 text-center text-5xl mb-8 font-bold font-montserrat'>
                <span className='text-red-500 text-6xl'>P</span>rograms
            </h1>
            <div className='flex justify-center items-center'>
                {/* <h1 className='text-white m-4 text-center text-xl font-montserrat lg:w-1/2 text-center'>Ongoing/Upcoming programs at TBI</h1> */}
            </div>
            <div className="flex justify-center items-center program-container gap-4">
                {programData.map(program => (
                    <div key={program.id} className="program-item bg-gradient-to-tr from-blue-300 to-blue-900 hover:bg-gradient-to-tr hover:from-red-800 hover:to-sky-400 hover:text-orange-200 font-Montserrat" data-wow-delay="0.2s" data-wow-duration="0.5s">
                        <div className='lg:block hidden'>
                            <br />
                            <br />
                        </div>
                        <div className="program-figure">
                            <a href={program.link} className='flex justify-center items-center'>
                                <img src={program.imageUrl} alt={program.title} className='h-40 w-80 object-cover p-1 rounded-2xl' />
                            </a>
                        </div>
                        <div className="program-content p-4">
                            <h2 className='text-xl font-bold'>{program.title}</h2>
                            <p className='text-sm'>{program.description}</p>
                            <a href={program.link} className='text-blue-500 hover:underline'>Learn more</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Programs;
