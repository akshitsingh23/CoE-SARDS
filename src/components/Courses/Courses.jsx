import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { FaPlus, FaMinus } from "react-icons/fa";

function Courses() {
    const [expanded, setExpanded] = useState({});

    const toggleExpand = (sectionIndex, itemIndex) => {
        setExpanded(prev => ({
            ...prev,
            [sectionIndex]: {
                ...prev[sectionIndex],
                [itemIndex]: !prev[sectionIndex]?.[itemIndex]
            }
        }));
    };

    const sections = [
        {
            title: "M.Tech/Ph.D",
            description: "Advanced research programs with professional training.",
            items: [
                { description: "07 - PhD seats offered to ARTRAC", details: "PhD seats are allocated to different streams including AI, ML, and Robotics." },
                { description: "12 - MTech seats offered to ARTRAC", details: "MTech seats are available in Data Science and Aerospace Engineering." },
            ],
        },
        {
            title: "DGR",
            description: "Specialized courses to upskill in critical technology fields.",
            items: [
                { description: "Drone Technology Course", details: "Covers drone design, programming, and operation." },
                { description: "Cyber Security (Certification) Course", details: "Includes training on ethical hacking, secure programming, and network defense." },
                { description: "Material Science & Mission Reliability (Certification) Course", details: "Focuses on advanced material testing and reliability assessment." },
            ],
        },
        {
            title: "ARTRAC",
            description: "Exclusive drone courses tailored for ARTRAC.",
            items: [
                { description: "Drone Technology Course", details: "Specialized training for ARTRAC participants on drone technology and its applications." },
            ],
        },
        {
            title: "RPTO",
            description: "Become a certified drone pilot with DGCA training.",
            items: [
                { description: "Certificate for Drone Pilot Training (DGCA Certified Course)", details: "This course provides comprehensive training for obtaining DGCA certification as a drone pilot." },
            ],
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
                {sections.map((section, sectionIndex) => (
                    <motion.div
                        key={sectionIndex}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                        variants={fadeInUp}
                        className="bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                    >
                        <div className="flex items-center p-6 bg-gray-800 font-montserrat">
                            <div>
                                <h2 className="text-2xl font-bold">{section.title}</h2>
                                <p className="text-sm text-gray-100">{section.description}</p>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="space-y-4 font-montserrat">
                                {section.items.map((item, itemIndex) => (
                                    <div
                                        key={itemIndex}
                                        className="bg-gray-800 text-gray-100 p-4 rounded-lg shadow hover:bg-gray-900"
                                    >
                                        <div className="flex justify-between items-center">
                                            <span>{item.description}</span>
                                            <button
                                                className="text-xl text-orange-400 hover:text-white focus:outline-none"
                                                onClick={() => toggleExpand(sectionIndex, itemIndex)}
                                            >
                                                {expanded[sectionIndex]?.[itemIndex] ? <FaMinus /> : <FaPlus />}
                                            </button>
                                        </div>
                                        {expanded[sectionIndex]?.[itemIndex] && (
                                            <div className="mt-3 bg-gray-900 p-3 rounded-lg text-gray-200">
                                                {item.details}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Courses;
