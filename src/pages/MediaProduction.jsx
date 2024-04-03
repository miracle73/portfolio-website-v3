import React, { useState } from 'react'
import BackgroundImage from '../assets/images/background-image.jpg'
import NavLinks from '../components/NavLinks'
import firstImage from '../assets/images/mediaProduction.png'
import secondImage from '../assets/images/mediaProduction1.png'
import thirdImage from '../assets/images/mediaProduction2.png'
import fourthImage from '../assets/images/mediaProduction3.png'
import fifthImage from '../assets/images/mediaProduction4.png'
import Footer from '../components/Footer'
import MobileNav from '../components/MobileNav'


const MediaProduction = () => {
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
            <div className="  w-full flex flex-col pt-10 bg-black ">
                <div className='flex items-start justify-between px-16 max-lg:px-10 max-md:px-7 max-sm:px-4 mt-10 '>
                    <div className=' w-full '>
                        <div className=" text-white text-[32px] max-sm:text-2xl font-normal font-['Javanese Text']"> Media and Content Production </div>
                        <img src={firstImage} className='mt-5 w-full h-96 max-lg:h-86 max-md:72 max-sm:h-64 object-cover' />
                        <div className=" text-white text-[20px] max-sm:text-sm font-normal font-['Javanese Text'] mt-5"> With over 15 years of experience in Radio Broadcasting, Advertising, Audio Production, video production, and TV/Film production, I bring a wealth of expertise and creativity to every project I undertake. My media and content production services are tailored to meet the unique needs of my clients.
                        </div>

                    </div>

                </div>

                <div className=" text-white text-center text-[32px] max-md:text-2xl max-sm:text-xl font-normal font-['Javanese Text'] px-16 mt-24 "> Services Offered </div>
                <div className='flex items-start justify-between px-16 max-lg:px-10 max-md:px-7 max-sm:px-4 mt-16 '>
                    <div className='w-[33%] '>
                        <div className='w-16 h-16 max-md:w-12 max-md:h-12 max-sm:w-8 max-sm:h-8 rounded-full bg-white items-center flex justify-center'>
                            <img src={secondImage} className='max-sm:w-6 max-md:w-8 max-lg:w-10 max-xsm:w-5' />
                        </div>
                        <div className=" text-white text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base font-normal font-['Inter'] mt-5"> Audio Production </div>
                        <div className=" text-white text-lg max-lg:text-base max-md:text-sm max-sm:text-xs font-light font-['Inter']"> From radio commercials, radio shows, podcasts, and voiceovers to sound design. I have a keen ear for detail and a passion for storytelling, ensuring that every audio project is crafted to perfection, leaving a lasting impact on listeners.
                        </div>

                    </div>
                    <div className='w-[33%] '>
                        <div className='w-16 h-16 max-md:w-12 max-md:h-12 max-sm:w-8 max-sm:h-8 rounded-full  bg-white items-center flex justify-center'>
                            <img src={thirdImage} className='max-sm:w-6 max-md:w-8 max-lg:w-10 max-xsm:w-5' />
                        </div>
                        <div className=" text-white text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base font-normal font-['Inter'] mt-5"> Video Production </div>
                        <div className=" text-white text-lg max-lg:text-base max-md:text-sm max-sm:text-xs font-light font-['Inter']"> From concept development to post-production, I offer comprehensive video production services for a variety of purposes, including promotional videos, short-form videos, and documentaries. Using visual storytelling, I bring your ideas to life on screen with creativity and precision. </div>
                    </div>
                    <div className='w-[33%] '>
                        <div className='w-16 h-16 max-md:w-12 max-md:h-12 max-sm:w-8 max-sm:h-8 rounded-full  bg-white items-center flex justify-center'>
                            <img src={thirdImage} className='max-sm:w-6 max-md:w-8 max-lg:w-10 max-xsm:w-5' />
                        </div>
                        <div className=" text-white text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base font-normal font-['Inter'] mt-5"> TV/Film Production </div>
                        <div className=" text-white text-lg max-lg:text-base max-md:text-sm max-sm:text-xs font-light font-['Inter']"> My expertise in TV/Film production spans various genres, including commercials, short films, and documentaries. Whether you're looking to create captivating content for television, streaming platforms, or the big screen, my hands-on approach and attention to detail ensure that your project is executed flawlessly from start to finish.

                        </div>
                    </div>
                </div>
               
                <div className='flex justify-center items-center mt-16'>
                    <button className=" h-8 px-4 py-4 bg-white rounded-[32px] justify-start items-center gap-4 inline-flex mt-10">
                        <div className="text-center text-black text-lg max-md:text-base max-sm:text-xs font-normal font-['Jacques Francois']">Book now</div>
                    </button>
                </div>
                <div className=' mt-10'>
                    <Footer />
                    Cool
                </div>
            </div>
        </div>
    )
}

export default MediaProduction
