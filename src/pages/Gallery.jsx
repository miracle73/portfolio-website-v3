import React, { useState } from 'react'
import BackgroundImage from '../assets/images/back3.png'
import NavLinks from '../components/NavLinks'
import Footer from '../components/Footer'
import MobileNav from '../components/MobileNav'
import BJ1 from '../assets/images/BJ1.JPG';
import BJ2 from '../assets/images/BJ2.jpg';
import BJ3 from '../assets/images/BJ3.jpg';
import BJ4 from '../assets/images/BJ4.jpg';
import BJ5 from '../assets/images/BJ5.jpg';
import BJ6 from '../assets/images/BJ6.jpg';
import BJ7 from '../assets/images/BJ7.jpg';
import BJ8 from '../assets/images/BJ8.jpg';
import BJ9 from '../assets/images/BJ9.jpg';
import BJ10 from '../assets/images/BJ10.jpg';





const Gallery = () => {
    const [nav, setNav] = useState(false)
    return (
        <div className='min-h-screen w-full p-0'>
            {nav && <div className='fixed w-full flex items-center justify-center z-10 bg-black'>
                <MobileNav setNav={setNav} />
            </div>}
            <div style={{ backgroundImage: `url(${BackgroundImage})` }}
                className="bg-cover bg-center h-[15rem] w-full relative">
        
                {!nav && <div className='lg:pt-10 max-lg:pt-14 max-md:pt-5 max-md:flex max-md:items-center max-md:justify-end max-md:pr-10 '>
                    <NavLinks setNav={setNav} />
                </div>}

            </div>
            <div className="  w-full flex flex-col pt-10 max-md:pt-7 max-sm:pt-4 bg-black ">
                <div className="text-white text-[32px] max-md:text-2xl max-sm:text-xl text-center py-10 font-normal font-['Podkova']">My Gallery</div>
                <div className='flex justify-center flex-wrap items-center px-10 max-md:px-6 max-sm:px-4 '>

                    <img className="w-72 max-sm:w-40 max-xsm:w-28" src={BJ1} />
                    <img className="w-72 max-sm:w-40 max-xsm:w-28" src={BJ2} />
                    {/* <img className="w-72" src={BJ4} /> */}
                    <img className="w-72 max-sm:w-40 max-xsm:w-28" src={BJ5} />
           
                    {/* <div className='h-full'> */}
                    {/* <img className="w-72" src={BJ6} /> */}
                    <img className="w-72 max-sm:w-40 max-xsm:w-28" src={BJ7} />
                    <img className="w-72 max-sm:w-40 max-xsm:w-28" src={BJ8} />
                    <img className="w-72 max-sm:w-40 max-xsm:w-28" src={BJ9} />
                    <img className="w-72 max-sm:w-40 max-xsm:w-28" src={BJ10} />
                    <img className="w-72 max-sm:w-40 max-xsm:w-28" src={BJ3} />
                    {/* </div> */}
                    {/* <div className='h-full'>
                        <img className="" src={BJ1} />
                        <img className="" src={BJ2} />
                        <img className="" src={BJ3} />
                        <img className="" src={BJ4} />
                    </div> */}
                    {/* <div className='h-full'>
                        <img className="" src={BJ1} />
                        <img className="" src={BJ2} />
                        <img className="" src={BJ3} />
                        <img className="" src={BJ4} />
                    </div> */}
                </div>
                <div className=' '>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Gallery
