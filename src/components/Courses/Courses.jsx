import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";

function Courses() {
    const [expanded, setExpanded] = useState({});

    const toggleExpand = (sectionIndex, itemIndex) => {
        setExpanded((prev) => ({
            ...prev,
            [sectionIndex]: {
                ...prev[sectionIndex],
                [itemIndex]: !prev[sectionIndex]?.[itemIndex],
            },
        }));
    };

    const sections = [
        {
            title: "M.Tech/Ph.D",
            description: "Advanced research programs with professional training.",
            items: [
                {
                    description: "07 - PhD seats offered to ARTRAC",
                    details:
                        "PhD seats are allocated to different streams based on the preferred area of research, for both regular and part-time students.",
                },
                {
                    description: "12 - MTech seats offered to ARTRAC",
                    details: (
                        <>
                            Material Engineering - 02
                            <br />
                            Artificial Intelligence - 02
                            <br />
                            Structural Engineering & Geo Mechanics - 02
                            <br />
                            Computer Science & Engineering - 02
                            <br />
                            Communication & Signal Processing - 02
                            <br />
                            Microelectronics & VLSI Design - 01
                            <br />
                            Computational Mechanics - 01
                        </>
                    ),
                },
            ],
        },
        {
            title:
                "Courses conducted/being conducted by IIT Ropar for the Training YR 2024-2025",
            items: [
                {
                    description: "Certificate Course on Drone Technology (Undergoing)",
                    startDate: "2024-11-25",
                    endDate: "2025-02-28",
                    details: (
                        <>
                            Course Number: 216-11-2024
                            <br />
                            Start Date: 25 Nov 24
                            <br />
                            End Date: 28 Feb 25
                            <br />
                            Vacancy: 35
                            <br />
                            Duration: 14 Weeks
                        </>
                    ),
                },
                {
                    description: "Material Science & Mission Reliability (Certification) Course",
                    startDate: "2025-02-10",
                    endDate: "2025-05-02",
                    details: (
                        <>
                            Course Number: 266-02-2025
                            <br />
                            Start Date: 10 Feb 25
                            <br />
                            End Date: 02 May 25
                            <br />
                            Vacancy: 30
                            <br />
                            Duration: 12 Weeks
                        </>
                    ),
                },
                {
                    description: "Certificate Course on Drone Technology",
                    startDate: "2025-03-24",
                    endDate: "2025-06-27",
                    details: (
                        <>
                            Course Number: 300-03-2025
                            <br />
                            Start Date: 24 Mar 25
                            <br />
                            End Date: 27 Jun 25
                            <br />
                            Vacancy: 30
                            <br />
                            Duration: 14 Weeks
                        </>
                    ),
                },
            ],
        },
        {
            title: "DGR",
            description: "Specialized courses to upskill in critical technology fields.",
            items: [
                {
                    description: "Industrial Management & Entrepreneurship",
                    startDate: "2025-04-07",
                    endDate: "2025-06-27",
                    details: (
                        <>
                            Course Number: 41-04-2025
                            <br />
                            Start Date: 7 Apr 25
                            <br />
                            End Date: 27 Jun 25
                            <br />
                            Vacancy: 40
                            <br />
                            Duration: 12 Weeks
                            <br />
                            Deptartment: Mechanical and HHS Dept
                        </>
                    ),
                },
                {
                    description: "Certificate Course on Cyber Security",
                    startDate: "2025-06-09",
                    startDate: "2026-01-12",
                    endDate: "2025-08-29",
                    details: (
                        <>
                            Course Number: 131-06-2025
                            <br />
                            Start Date: 9 Jun 25
                            <br />
                            End Date: 29 Aug 25
                            <br />
                            Vacancy: 40
                            <br />
                            Duration: 12 Weeks
                            
                            <br />
                            <br />
                            <br />

                            Course Number: 448-01-2026
                            <br />
                            Start Date: 12 Jan 26
                            <br />
                            End Date: 3 Apr 26
                            <br />
                            Vacancy: 40
                            <br />
                            Duration: 12 Weeks
                            <br />
                            Deptartment: CSE

                        </>
                    ),
                },
                {
                    description: "Drone Training",
                    startDate: "2025-08-11",
                    endDate: "2025-10-31",
                    details: (
                        <>
                            Course Number: 223-08-2025
                            <br />
                            Start Date: 11 Aug 25
                            <br />
                            End Date: 31 Oct 25
                            <br />
                            Vacancy: 40
                            <br />
                            Duration: 12 Weeks
                            <br />
                            <br />
                            Course Number: 536-03-2026
                            <br />
                            Start Date: 9 Mar 26
                            <br />
                            End Date: 29 May 26
                            <br />
                            Vacancy: 40
                            <br />
                            Duration: 12 Weeks
                            <br />
                            Deptartment: Drone Centre/ CSE
                        </>
                    ),
                },
                {
                    description: "Material Science & Mission Reliability (Certification)",
                    startDate: "2025-10-13",
                    endDate: "2026-01-02",
                    details: (
                        <>
                            Course Number: 313-10-2025
                            <br />
                            Start Date: 13 Oct 25
                            <br />
                            End Date: 2 Jan 26
                            <br />
                            Vacancy: 40
                            <br />
                            Duration: 12 Weeks
                            <br />
                            Deptartment: Metallurgical & Materials Engg
                        </>
                    ),
                },
                {
                    description: "Industrial Management & Entrepreneurship",
                    startDate: "2025-11-10",
                    endDate: "2026-01-30",
                    details: (
                        <>
                            Course Number: 359-11-2025
                            <br />
                            Start Date: 10 Nov 25
                            <br />
                            End Date: 30 Jan 26
                            <br />
                            Vacancy: 40
                            <br />
                            Duration: 12 Weeks
                            <br />
                            Deptartment: Mechanical and HHS Dept
                        </>
                    ),
                },
                
            ],
        },
        {
            title: "ARTRAC",
            description: "Exclusive drone courses tailored for ARTRAC.",
            items: [
                {
                    description: "Drone Technology Course",
                    details:
                        "Specialized training for ARTRAC participants on drone technology and its applications.",
                },
            ],
        },
        {
            title: "RPTO",
            description: "Become a certified drone pilot with DGCA training.",
            items: [
                {
                    description: "Certificate for Drone Pilot Training (DGCA Certified Course)",
                    details:
                        "This course provides comprehensive training for obtaining DGCA certification as a drone pilot.",
                },
            ],
        },
    ];


    // Helper function to check if a course is currently ongoing
    const isOngoing = (startDate, endDate) => {
        const today = new Date();
        const start = new Date(startDate);
        const end = new Date(endDate);
        return today >= start && today <= end;
    };

    // Sort the items in each section by start date
    useEffect(() => {
        sections.forEach((section) => {
            section.items.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
        });
    }, []);

    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-10 px-5">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                className="text-center mb-12"
            >
                <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-red-100 to-blue-300 font-montserrat">
                    Explore Our Courses
                </div>
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
                        <div className="flex items-center p-6 bg-orange-900 font-montserrat">
                            <div>
                                <h2 className="text-2xl font-bold">{section.title}</h2>
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
                                            {isOngoing(item.startDate, item.endDate) && (
                                                <span className="ml-4 bg-green-600 text-white px-2 py-1 rounded-full text-sm">
                                                    Ongoing
                                                </span>
                                            )}
                                            <button
                                                className="text-xl text-orange-400 hover:text-white focus:outline-none"
                                                onClick={() => toggleExpand(sectionIndex, itemIndex)}
                                            >
                                                {expanded[sectionIndex]?.[itemIndex] ? <FaMinus /> : <FaPlus />}
                                            </button>
                                        </div>
                                        {expanded[sectionIndex]?.[itemIndex] && (
                                            <div className="mt-3 bg-gray-900 p-3 rounded-lg text-gray-200 lg:text-lg text-sm">
                                                {item.details}
                                                <br />
                                                <br />
                                                <Link
                                                    to="/contact"
                                                    className="bg-blue-400 p-1 rounded-lg"
                                                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                                >
                                                    Contact us for more.
                                                </Link>
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
