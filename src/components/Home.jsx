import React from 'react'
import Link from 'react-router-dom';
import Carousel from './Carousel/Carousel';
import Programs from './Programs/Programs';
import Mou from './Mou/Mou';
import drone from './power/ghatak.jpg';
function Home() {
    return (
        <div>
            <Carousel />
            <Programs />
            <div
                className="parallax bg-fixed bg-center bg-center bg-no-repeat  bg-cover h-[400px]"
                style={{
                    backgroundImage: `url(${drone})`,
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}
            >
                {/* Optional content inside the parallax */}
            </div>
            <Mou />
        </div>
    )
}

export default Home;
