import logo1 from "../power/c-17.webp";
import img2 from "../power/army.png";
import img3 from "../power/army3.webp";
import img4 from "../power/airpower.avif";
import vikrant from '../power/vikrant.avif';
import heli from '../power/helicopter.jpeg';
import heli3 from '../power/heli3.jpg';
import heli4 from '../power/heli4.jpeg';
import heli2 from '../power/heli2.jpeg';
import flyingtank from '../power/flyingtank.jpg';



import { useDrag } from '@use-gesture/react';
import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


function Carousel() {
    const images = [
        {
            src: flyingtank,
            title: "A Secure Future Through Synergy",
            description:
                "Bridging the gap between the Indian Armed Forces, Academia and the Defence Industry will help fuse strategic thought, operational excellence and technical expertise to create a strong Nation.",
        },
        {
            src: logo1,
            title: "A Secure Future Through Atma-Nirbharta",
            description:
                "Strengthening homegrown research and innovation in defence technologies by collaborating with industry partners and mentoring deep-tech start-ups will lead the charge in creating a new self-reliant India.",
        },
        {
            src: heli3,
            title: "A Secure Future Through Innovation",
            description:
                "Fostering technological innovation with access to cutting-edge technology will enable our Armed Forces to evolve into a modern, agile, adaptive, technology- enabled and self-reliant force to meet emerging challenges.",
        },
        {
            src: vikrant,
            title: "A Secure Future Through Power",
            description:
                "Comprehensive Nation Power is the key to realizing the dream of New India It is the need of the hour, and we in India need to build and aggregate CNP to be counted amongst the comity of Nations.",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [transition, setTransition] = useState(true);
    const [timer, setTimer] = useState(4000); // Default timer is 8 seconds
    const [isPaused, setIsPaused] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setTransition(false);
                setTimeout(() => {
                    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
                    setTransition(true);
                }, 500); // Transition duration
            }, timer);

            return () => clearInterval(interval);
        }
    }, [activeIndex, isPaused, timer]);

    const handleMouseDown = () => {
        setIsPaused(true); // Pause carousel when interaction starts
    };

    const handleMouseUp = () => {
        setIsPaused(false); // Resume carousel when interaction ends
    };

    const handlePrev = () => {
        setIsPaused(true); // Pause during manual navigation
        setTransition(false);
        setTimeout(() => {
            setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
            setTransition(true);
            setIsPaused(false); // Resume after navigation
        }, 300); // Transition duration
        setTimer(3000);
    };

    const handleNext = () => {
        setIsPaused(true); // Pause during manual navigation
        setTransition(false);
        setTimeout(() => {
            setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
            setTransition(true);
            setIsPaused(false); // Resume after navigation
        }, 300); // Transition duration
        setTimer(3000);
    };

    const handleButtonClick = (index) => {
        setIsPaused(true); // Pause during manual navigation
        setTransition(false);
        setTimeout(() => {
            setActiveIndex(index);
            setTransition(true);
            setIsPaused(false); // Resume after navigation
        }, 300); // Transition duration
        setTimer(3000);
    };
    const bind = useDrag(({ down, movement: [mx], direction: [xDir], distance, cancel }) => {
        if (down && distance > 100) {
            if (xDir > 0) {
                handlePrev();
            } else {
                handleNext();
            }
            cancel();
        }
    });
    return (
        <div
            className="relative flex items-center justify-center h-screen overflow-hidden"
            onMouseDown={handleMouseDown} // Pause on interaction
            onMouseUp={handleMouseUp} // Resume on release

        >
            <div
                className="relative w-full h-full"
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out ${index === activeIndex
                            ? "translate-x-0"
                            : index > activeIndex
                                ? "translate-x-full"
                                : "-translate-x-full"
                            }`}
                    >
                        <img
                            src={image.src}
                            alt={`Slide ${index + 1}`}
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/60">
                            <div className="w-3/4 text-center md:w-2/4">
                                <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-montserrat text-white">
                                    {image.title}
                                </h1>
                                <p className="text-white font-montserrat text-lg">
                                    {image.description}
                                    
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2 p-1 bg-white hover:shadow-lg hover:shadow-white rounded-full">
                <button
                    className="text-white bg-orange-400 p-2 rounded-full shadow-lg z-10"
                    onClick={handlePrev}
                >
                    <FaArrowLeft className="w-5 h-6" />
                </button>
            </div>
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 p-1 hover:shadow-lg hover:shadow-white bg-white rounded-full">
                <button
                    className="text-white bg-orange-500 p-2 rounded-full shadow-lg z-10"
                    onClick={handleNext}
                >
                    <FaArrowRight className="w-5 h-6" />
                </button>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-4 h-4 rounded-full ${index === activeIndex ? 'bg-orange-500' : 'bg-gray-300'}`}
                        onClick={() => handleButtonClick(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Carousel;
