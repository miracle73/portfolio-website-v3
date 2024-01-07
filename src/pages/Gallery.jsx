import React, { useState } from 'react'
import BackgroundImage from '../assets/images/background-image.jpg'
import NavLinks from '../components/NavLinks'
import Footer from '../components/Footer'
import MobileNav from '../components/MobileNav'
import Image1 from '../assets/images/gallery1.png'
import Image2 from '../assets/images/gallery2.png'
import Image3 from '../assets/images/gallery3.png'
import Image4 from '../assets/images/gallery4.png'
import Image5 from '../assets/images/gallery5.png'
import Image6 from '../assets/images/gallery6.png'
import Image7 from '../assets/images/gallery7.png'
import Image8 from '../assets/images/gallery8.png'
import Image9 from '../assets/images/gallery9.png'
import Image10 from '../assets/images/gallery10.png'
import Image11 from '../assets/images/gallery11.png'
import Image12 from '../assets/images/gallery12.png'
import Image13 from '../assets/images/gallery13.png'
import Image14 from '../assets/images/gallery14.png'
import Image15 from '../assets/images/gallery15.png'
import Image16 from '../assets/images/gallery16.png'



const Gallery = () => {
    const [nav, setNav] = useState(false)
    return (
        <div className='min-h-screen w-full p-0'>
            
            <div style={{ backgroundImage: `url(${BackgroundImage})` }}
                className="bg-cover bg-center h-[15rem] w-full relative">
                {nav && <div className='w-full h-full flex items-center justify-center absolute'>
                    <MobileNav setNav={setNav} />
                </div>}
                {!nav && <div className='lg:pt-10 max-lg:pt-14 max-md:pt-5 max-md:flex max-md:items-center max-md:justify-end max-md:pr-10 '>
                    <NavLinks setNav={setNav} />
                </div>}

            </div>
            <div className="  w-full flex flex-col pt-10 max-md:pt-7 max-sm:pt-4 bg-black ">
            <div className="text-white text-[32px] max-md:text-2xl max-sm:text-xl text-center py-10 font-normal font-['Podkova']">My Gallery</div>
                <div className='flex justify-center items-center px-10 max-md:px-6 max-sm:px-4 '>
                    
                    <div className='h-full'>
                        <img className="" src={Image2} />
                        <img className="" src={Image6} />
                        <img className="" src={Image9} />
                        <img className="" src={Image10} />
                    </div>
                    <div className='h-full'>
                        <img className="" src={Image1} />
                        <img className="" src={Image4} />
                        <img className="" src={Image11} />
                        <img className="" src={Image12} />
                    </div>
                    <div className='h-full'>
                        <img className="" src={Image3} />
                        <img className="" src={Image7} />
                        <img className="" src={Image13} />
                        <img className="" src={Image14} />
                    </div>
                    <div className='h-full'>
                        <img className="" src={Image4} />
                        <img className="" src={Image16} />
                        <img className="" src={Image8} />
                        <img className="" src={Image15} />
                    </div>
                </div>
                <div className=' '>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Gallery
