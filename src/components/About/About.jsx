import React from 'react';
import svg1 from '../svgs/plane.avif';
import svg2 from '../svgs/plane2.png';
import svg3 from '../svgs/tank.jpeg';
import svg4 from '../svgs/tank2.png';
import naval from '../svgs/carrier.avif';
import atmanirbhar from '../svgs/atmanirbhar.jpg';

function About() {
    return (
        <div className="p-2 bg-black">
            <br />
            <br />
            <br />
            <br />

            <div className=" mx-auto bg-white p-10 rounded-xl">
                <div className="flex flex-col lg:flex-row mb-12 justify-center items-center">
                    <div className="lg:w-1/2 mb-4 lg:mb-0">
                        <img src={svg1} alt="Our Story" className="rounded-lg " />
                    </div>
                    <div className="lg:w-1/2 lg:pl-8">
                        <h1 className="text-4xl font-bold mb-8 text-center">Our Story & Formation</h1>
                        <p className="text-lg leading-relaxed text-justify">
                            Building a Legacy of Excellence in Defence and Security
                            The Center of Excellence (CoE) for Studies and Applied Research in Defence and Security (SARDS) at IIT Ropar was founded with a clear and compelling purpose: to bridge the gap between the Indian defense forces, academia, and the defense industry. Recognizing the need for innovation, collaboration, and specialized knowledge, IIT Ropar established CoE SARDS as a hub of cutting-edge research, technical consultancy, and advanced training in defense and security.
                            Our journey began with the support of the HQ EC, which recognized the potential of IIT Ropar to contribute significantly to national defense. With their backing, CoE SARDS embarked on a mission to address the critical needs of our armed forces. Over time, we have engaged with various military commands, including the Indian Navy and HQ NC, successfully executing vital defense projects and establishing ourselves as a trusted partner in India's defense ecosystem.
                            Our story is one of growth, commitment, and a relentless pursuit of excellence. Guided by distinguished General-ranked officers and supported by a dedicated team of specialized personnel, CoE SARDS continues to build on its legacy, driving innovation and excellence in every project we undertake.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row-reverse mb-12 justify-center items-center">
                    <div className="lg:w-1/2 mb-4 lg:mb-0 flex justify-center items-center">
                        <img src={svg2} alt="Our Vision" className="rounded-lg " />
                    </div>
                    <div className="lg:w-1/2 lg:pr-8">
                        <h2 className="text-3xl font-bold mb-8 text-center">Our Vision</h2>
                        <p className="text-lg leading-relaxed text-justify">
                            A Secure Future Through Innovation
                            At CoE SARDS, we envision a future where India's defense and security apparatus is strengthened by homegrown innovation and expertise. We aim to be the epicenter of strategic thought, operational excellence, and technological innovation, serving as a crucial link between the armed forces, defense industries, and academic institutions. Our vision is to lead the charge in making India self-reliant in defense technologies, paving the way for Atma-Nirbharta in defense and security.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row mb-12 justify-center items-center">
                    <div className="lg:w-1/2 mb-4 lg:mb-0">
                        <img src={naval} alt="Our Mission" className="rounded-lg " />
                    </div>
                    <div className="lg:w-1/2 lg:pl-8">
                        <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
                        <p className="text-lg leading-relaxed text-justify">
                            Empowering the Armed Forces Through Knowledge and Technology
                            Our mission at CoE SARDS is multifaceted. We strive to:
                            Promote and conduct groundbreaking research in defense and security, addressing the critical needs of the armed forces.
                            Provide top-tier consulting and advisory services to military and paramilitary forces, drawing on our extensive expertise and strategic insights.
                            Deliver world-class training to defense and security personnel, leveraging our DGCA-certified drone RPTO center and other specialized programs.
                            Foster innovation by collaborating with industry partners and mentoring deep-tech startups through the Technology Business Incubator Foundation (TBIF) at IIT Ropar.
                            Engage with defense and security stakeholders, including frontline formations, to understand their challenges and deliver practical, impactful solutions.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row-reverse mb-12 justify-center items-center">
                    <div className="lg:w-1/2 mb-4 lg:mb-0 flex justify-center items-center">
                        <img src={atmanirbhar} alt="Our Aim" className="rounded-lg" />
                    </div>
                    <div className="lg:w-1/2 lg:pr-8">
                        <h2 className="text-3xl font-bold mb-8 text-center">Our Aim</h2>
                        <p className="text-lg leading-relaxed text-justify">
                            Driving Atma-Nirbharta in Defense and Security
                            CoE SARDS is committed to driving India's self-reliance in defense and security through a holistic approach that combines research, innovation, and industry collaboration. Our aim is to commercialize defense solutions and R&D, ensuring that our armed forces have access to cutting-edge technology developed within the country. By nurturing startups and engaging with MSMEs, we are building a robust ecosystem that supports the defense and security needs of India.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;