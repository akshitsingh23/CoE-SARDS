import React from 'react';
import { motion } from 'framer-motion';

function Courses() {
    const sections = [
        {
            title: "M.Tech/Ph.D",
            description: "Advanced research programs with professional training.",
            items: [
                { desciption: "07 - PhD seats offered to ARTRAC" },
                { desciption: "12 - MTech seats offered to ARTRAC" },
            ],
            // image: "/path/to/tank-image.svg", // Replace with actual image path or SVG
        },
        {
            title: "DGR",
            description: "Specialized courses to upskill in critical technology fields.",
            items: [
                { desciption: "Drone Technology Course" },
                { desciption: "Cyber Security (Certification) Course" },
                { desciption: "Material Science & Mission Reliability (Certification) Course" },
            ],
            // image: "/path/to/tank-image.svg",
        },
        {
            title: "ARTRAC",
            description: "Exclusive drone courses tailored for ARTRAC.",
            items: [
                { desciption: "Drone Technology Course" },
            ],
            // image: "/path/to/tank-image.svg",
        },
        {
            title: "RPTO",
            description: "Become a certified drone pilot with DGCA training.",
            items: [
                { desciption: "Certificate for Drone Pilot Training (DGCA Certified Course)" },
            ],
            // image: "/path/to/tank-image.svg",
        },
    ];

    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-10 px-5">
            <br />
            <br />
            <br />
            {/* <br /> */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                className="text-center mb-12"
            >
                <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-red-100 to-blue-300 font-montserrat">
                    Explore Our Courses
                </h1>
            </motion.div>
            
            <div className="grid gap-10 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 mx-auto">
                {sections.map((section, index) => (
                    <motion.div
                        key={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                        variants={fadeInUp}
                        className="bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                    >
                        <div className="flex items-center p-6 bg-orange-800">
                            {section.image && (
                                <img
                                    src={section.image}
                                    alt={`${section.title} Icon`}
                                    className="w-16 h-16 mr-4"
                                />
                            )}
                            <div>
                                <h2 className="text-2xl font-bold">{section.title}</h2>
                                <p className="text-sm text-gray-100">{section.description}</p>
                            </div>
                        </div>
                        <div className="p-6">
                            <ul className="space-y-4">
                                {section.items.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="bg-gray-800 text-gray-300 p-4 rounded-lg shadow hover:bg-gray-900"
                                    >
                                        {item.desciption}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Courses;
