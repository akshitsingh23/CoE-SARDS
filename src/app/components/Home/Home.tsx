import React from 'react'
import { Parallax } from 'react-parallax';
// import parallaxImage from '../../images/parallax-image.jpg'; // Adjust the path as necessary
import Image from 'next/image';

import { Carousel } from '../carousel/carousel'
import { Programs } from '../programs/programs'
import { Mous } from '../Mous/Mous';
import img from '../../images/power/c-17.webp'
function Home() {
    return (
        <div>
            <Carousel />
            <Programs />
            <Parallax bgImage={img.src} strength={500}>
                <div style={{ height: '500px' }}>
                    <div style={{
                        background: 'rgba(0, 0, 0)',
                        color: 'white',
                        padding: '20px',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        // transform: 'translate(, -50%)',
                        // textAlign: 'center'
                    }}>

                    </div>
                </div>
            </Parallax>
            <Mous />
        </div>
    )
}

export default Home
