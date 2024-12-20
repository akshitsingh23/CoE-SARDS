import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import logo1 from "../power/c-17.webp";
import img2 from "../power/army.png";
import img3 from "../power/army3.webp";
import img4 from "../power/airpower.avif";
import vikrant from '../power/vikrant.avif';

const CarouselWithContent = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [transition, setTransition] = useState(true);

    const images = [
        {
            src: img3,
            title: "The Beauty of Success",
            description:
                "A self-reliant India will be a force multiplier for the global economy. We will make products in India, for the world.",
        },
        {
            src: logo1,
            title: "The Beauty of Innovation",
            description:
                "Innovation is the key to realizing the dream of 'New India.' It is the need of the hour, and we in India need to innovate and invest in technology to create a better future.",
        },
        {
            src: img4,
            title: "The Beauty of Incubation",
            description:
                "The most powerful incubators are those that foster not just growth but also resilience in the startups they nurture.",
        },
        {
            src: img2,
            title: "The Beauty of Journey",
            description:
                "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.",
        },
        {
            src: vikrant,
            title: "The Beauty of Power",
            description:
                "The power of a nation derives from the integrity of the home. The power of a nation derives from the integrity of the home. The power of a nation derives from the integrity of the home.",
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setTransition(false);
            setTimeout(() => {
                setActiveIndex((prevIndex) =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                );
                setTransition(true);
            }, 300); // Transition duration
        }, 3500); // Slide change interval

        return () => clearInterval(interval);
    }, [images.length]);

    const handlePrev = () => {
        setTransition(false);
        setTimeout(() => {
            setActiveIndex((prevIndex) =>
                prevIndex === 0 ? images.length - 1 : prevIndex - 1
            );
            setTransition(true);
        }, 300); // Transition duration
    };

    const handleNext = () => {
        setTransition(false);
        setTimeout(() => {
            setActiveIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
            setTransition(true);
        }, 300); // Transition duration
    };

    return (
        <div className="relative flex items-center justify-center h-screen overflow-hidden">
            <div className="relative w-full h-full">
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
                        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/70">
                            <div className="w-3/4 text-center md:w-2/4">
                                <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl text-white">
                                    {/* {image.title} */}
                                </h1>
                                <p className="mb-12 text-white opacity-80">
                                    {/* {image.description} */}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-orange-800 bg-white p-2 rounded-full shadow-lg z-10"
                onClick={handlePrev}
            >
                <FaArrowLeft className="w-6 h-6" />
            </button>
            <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-orange-800 bg-white p-2 rounded-full shadow-lg z-10"
                onClick={handleNext}
            >
                <FaArrowRight className="w-6 h-6" />
            </button>
        </div>
    );
};

export default CarouselWithContent;
