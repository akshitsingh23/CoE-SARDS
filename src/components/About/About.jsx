import React from 'react';
import svg1 from '../svgs/plane.avif';
import svg2 from '../svgs/tank.jpg';
import svg3 from '../svgs/tank.jpeg';
import svg4 from '../svgs/tank2.png';
import naval from '../svgs/carrier.avif';
import atmanirbhar from '../svgs/atmanirbhar.jpg';
import soldier from '../svgs/soldierdrone.avif';
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
                            <div className='font-montserrat font-bold text-center'>Building a Legacy of Excellence in Defence and Security</div>
                            The Centre of Excellence for Studies and Applied Research in
                            Defence and Security (CoE-SARDS) at IIT Ropar was
                            founded with a clear and compelling purpose: to bridge the
                            gap between the Indian Armed Forces, Academia and the
                            Defence Industry. Recognizing the need for innovation,
                            collaboration, and specialized knowledge; IIT Ropar
                            established CoE-SARDS as the hub of cutting-edge Research
                            &amp; Development, technical consultancy and advanced training
                            in defence and security. Our journey began with the support
                            of the HQ Army Training Command (ARTRAC) which
                            recognized the potential of IIT Ropar to address the critical
                            needs of our Armed Forces. Today, are actively engaged with
                            all the three Services. Having successfully executed vital
                            defence projects we have established ourselves as a trusted
                            partner in India&#39;s Defence Ecosystem to contribute
                            significantly to national defence. Our story is one of growth,
                            commitment and a relentless pursuit of excellence. Guided by
                            distinguished General-ranked officers and supported by a
                            dedicated team of specialized personnel, CoE-SARDS
                            continues to build on its legacy, driving innovation and
                            excellence in every Project we undertake.</p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row-reverse mb-12 justify-center items-center">
                    <div className="lg:w-1/2 mb-4 lg:mb-0 flex justify-center items-center">
                        <img src={svg2} alt="Our Vision" className="rounded-lg " />
                    </div>
                    <div className="lg:w-1/2 lg:pr-8">
                        <h2 className="text-3xl font-bold mb-8 text-center">Our Vision</h2>
                        <p className="text-lg leading-relaxed text-justify">
                            <div className='text-center font-bold font-montserrat'>Our vision is to lead the charge in making India self-reliant in
                                defence technologies, paving the way for Atma-Nirbharta in
                                defence and security.</div>
                            {/* <br /> */}
                            At CoE-SARDS, we envision a future where India&#39;s defence
                            and security apparatus is strengthened by homegrown
                            research &amp; innovation leveraging technical expertise and
                            industrial collaboration. By nurturing startups and engaging
                            with MSMEs, we are building a robust ecosystem that
                            supports the defence and security needs of India.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row mb-12 justify-center items-center lg:py-10">
                    <div className="lg:w-1/2 mb-4 lg:mb-0 flex justify-center items-center">
                        <img src={soldier} alt="Our Aim" className="rounded-lg" />
                    </div>
                    <div className="lg:w-1/2 lg:pr-8">
                        <h2 className="text-3xl font-bold mb-8 text-center">Our Aim</h2>
                        <p className="text-lg leading-relaxed text-justify">
                            <div className='text-center font-bold font-montserrat'>A Secure Future Through Innovation</div>
                            At CoE-SARDS, we aim to be the epicentre of strategic
                            thought, operational excellence and technological innovation,
                            serving as a crucial link between the Armed Forces, Defence
                            Industry and Academia. Our aim is to commercialize defence
                            solutions and R&amp;D to ensure that our Armed Forces get
                            access to cutting-edge technology developed within the
                            country to evolve into a modern, agile, adaptive, technology-
                            enabled, and self-reliant force to meet emerging challenges.</p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row-reverse mb-12 justify-center items-center">
                    <div className="lg:w-1/2 mb-4 lg:mb-0">
                        <img src={naval} alt="Our Mission" className="rounded-lg lg:ml-24" />
                    </div>
                    <div className="lg:w-1/2 lg:pl-8">
                        <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
                        <div className='text-center font-montserrat font-bold'>Empowering Armed Forces Through Knowledge and Technology</div>
                        <p className='text-xl'>Our mission at CoE-SARDS is multifaceted.</p>
                        <ul className="list-disc list-inside text-lg ">
                            <li>Engage with defence and security stakeholders, including frontline formations, to understand their challenges and deliver practical and impactful solutions.</li>
                            <li>Promote and conduct ground-breaking research in defence and security to address critical needs of the Armed Forces.</li>
                            <li>Provide top-tier consulting and advisory services to Military and Central Paramilitary Organisations, drawing on our extensive technical expertise and strategic insights.</li>
                            <li>Deliver world-class training to defence and security personnel, leveraging our DGCA-certified drone RPTO centre and other specialized programs.</li>
                            <li>Foster innovation by collaborating with industry partners and mentoring deep-tech start-ups through the Technology Business Incubator Foundation (TBIF) at IIT Ropar.</li>
                        </ul>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default About;