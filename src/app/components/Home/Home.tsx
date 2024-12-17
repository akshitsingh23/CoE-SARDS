import React from 'react'
import { Carousel } from '../carousel/carousel'
import { Programs }  from '../programs/programs'
import { Mous } from '../Mous/Mous';
function Home() {
    return (
        <div>
            <Carousel />
            <Programs />
            <Mous />
        </div>
    )
}

export default Home
