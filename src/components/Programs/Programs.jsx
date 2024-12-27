// "use client";
import React from 'react';
import './programs.css';

import img0 from "../power/army.png";
import img1 from "../power/sf.jpeg";
import img2 from "../power/power.webp";
import img3 from "../power/ghatak.jpg";
import tech from './tech.jpeg';
import drone from './drone.avif';
import startup from './startup.avif';

// import img0 from '../../images/power/airforce.jpg';
// import img3 from '../../images/power/army3.webp';

const programData = [
    {
        id: 1,
        title: 'Education & Training',
        description: (
            <>
                Custom-tailored courses for the Forces.<br />
                •IIT Ropar is amongst a handful of IITs working with Directorate General Resettlement(DGR) to train officers and JCOs/ ORs
                <br />
                •Study leave - M.Tech programs in AI/ML, Structural Engg and Communications/Signal processing
                <br />
                •Management Development Programs (MDPs) with ARTRAC
            </>
        ),
        // 'Custom-tailored courses for the Forces.\n•IIT Ropar is amongst a handful of IITs working with Directorate General Resettlement(DGR) to train officers and JCOs/ ORs',        // link: '/',
        imageUrl: img0,
    },
    {
        id: 2,
        title: 'Technology Development',
        description: (
            <>
                Research based solutions for Operation Requirements,
                Communications and IoT,
                Drones – training/maintenance,
                3D printing,
                Surveillance (computer vision),
                Advanced Materials and Maintenance,
                Green and hybrid energy,
                Avalanche, Landslide protection,
                Technical Textiles –Functional fabrics for personnel protection,
                AI/ML and a horizontal,
                Humanities (Cognitive Sciences, Linguistics, Supply Chain,
                Logistics, Entrepreneurship, Psychology, etc.)
            </>
        ),
        // link: '/',
        imageUrl: tech
    },
    {
        id: 3,
        title: 'Startup & Manufacturing',
        description: (
            <>
                Incubation of
                start-ups and
                industry partners,
                <br />
                A very healthy ecosystem is in place to nurture start-ups at TBIF, IIT
                Ropar. Several defence start-ups are incubated and working with IIT
                Ropar faculty on projects.
                <br />
                Strong association with MSMEs and industry in Punjab and Norther
                Region, and access to MSMEs in Central Guj. through CII, FICCI and
                Chamber of Commerce.

            </>
        ),
        // link: '/',
        imageUrl: startup,
    },
    {
        id: 4,
        title: 'Drone Initiatives',
        description: (<>
            • Autonomous swarm drone based area surveillance
            <br />
            • Multi - drone based moving target tracking
            <br />
            • Smart precision landing pad for VTOL drones
            <br />
            • Augmented Reality based immersive crowd surveillance with
            gesture controlled drone camera control
            <br />
            • Drone Swarm based beamforming communication over long range
            <br />
            • Monocular depth estimation and target acquisition using drone
            camera
        </>
        ),
        // link: '/',
        imageUrl: drone,
    },
    // Add more program items here
];

function Programs() {
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
                                <img src={program.imageUrl} alt={program.title} className='h-44 w-80 object-cover p-1 rounded-2xl' />
                            </a>
                        </div>
                        <div className="program-content p-4">
                            <h2 className='text-xl font-bold'>{program.title}</h2>
                            <p className='text-sm'>{program.description}</p>
                            {/* <a href={program.link} className='text-blue-500 hover:underline'>Learn more</a> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Programs;
