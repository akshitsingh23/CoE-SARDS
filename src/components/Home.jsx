import React from 'react'
import Link from 'react-router-dom';
import Carousel from './Carousel/Carousel';
import Programs from './Programs/Programs';
import Mou from './Mou/Mou';
function Home() {
    return (
        <div>
            <Carousel />
            <Programs />
            <Mou />
        </div>
    )
}

export default Home;
