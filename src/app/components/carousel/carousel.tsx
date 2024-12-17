"use client";
import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import img1 from "../../images/home-images/1.avif";
import img2 from "./1.jpg";
import img3 from "./2.jpg";
import img4 from "./3.jpeg";
// import img5 from "../../images/home-images/Startup-Punjab1.webp";
import logo1 from '../../images/home-images/bg-3.jpg';
import { StaticImageData } from "next/image";

interface ImageProps {
    src: StaticImageData;
    title: string;
    description: string;
}

export function Carousel() {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const images: ImageProps[] = [
        {
            src: logo1,
            title: "The Beauty of Innovation",
            description: "Innovation is the key to realizing the dream of 'New India.' It is the need of the hour, and we in India need to innovate and invest in technology to create a better future",
        },
        {
            src: img4,
            title: "The Beauty of Incubation",
            description: "The most powerful incubators are those that foster not just growth but also resilience in the startups they nurture.",
        },
        {
            src: img3,
            title: "Image 1",
            description: "Description for image 1",
        },
        {
            src: img2,
            title: "Image 2",
            description: "Description for image 2",
        },
        
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="relative flex items-center justify-center h-screen overflow-hidden">
            <div className="relative w-full h-full">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out ${index === activeIndex ? 'translate-x-0' : index > activeIndex ? 'translate-x-full' : '-translate-x-full'}`}
                    >
                        <Image
                            src={image.src}
                            alt={`image ${index + 1}`}
                            layout="fill"
                            objectFit="cover"
                        />
                        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/70">
                            <div className="w-3/4 text-center md:w-2/4">
                                <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl text-white">
                                    {image.title}
                                </h1>
                                <p className="mb-12 opacity-80 text-white">
                                    {image.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={handlePrev} className="absolute bg-orange-400 left-2 top-1/2 transform -translate-y-1/2  p-5 rounded-2xl">
                <FaArrowLeft />
            </button>
            <button onClick={handleNext} className="absolute bg-orange-400 right-2 top-1/2 transform -translate-y-1/2 p-5 rounded-2xl">
                <FaArrowRight />
            </button>
        </div>
    );
}