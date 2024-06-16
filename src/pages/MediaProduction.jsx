import React, { useState, useEffect } from 'react'
import BackgroundImage from '../assets/images/back3.png'
import NavLinks from '../components/NavLinks'
import firstImage from '../assets/images/Audio6.png'
import secondImage from '../assets/images/Video7.png'
import thirdImage from '../assets/images/TV5.png'
import fourthImage from '../assets/images/mediaProduction3.png'
import fifthImage from '../assets/images/mediaProduction4.png'
import Footer from '../components/Footer'
import MobileNav from '../components/MobileNav'
import '../App.css'
import { AiFillAudio } from "react-icons/ai";
import { FaVideo } from "react-icons/fa";
import { PiFilmSlateFill } from "react-icons/pi";

const MediaProduction = () => {
    const [nav, setNav] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
        }, 5000); // Change active div every 5 seconds

        return () => clearTimeout(timer); // Clean up on component unmount

    }, [activeIndex]);

    const why = [
        {
            name: 'Extensive Experience',
            desc: 'With over 15 years of experience in the industry, I bring a wealth of knowledge and expertise to every project. My diverse background in radio broadcasting, advertising, marketing and production gives me a unique perspective and allows me to deliver exceptional results across different mediums.'

        },
        {
            name: 'Creative Vision',
            desc: "I am passionate about storytelling and believe in the power of creativity to connect with audiences on a deeper level. Whether it's crafting compelling narratives, designing eye-catching visuals, or creating immersive soundscapes, My creative vision shines through in every project I undertake."

        },
        {
            name: 'Personalized Service',
            desc: "I employ a personalized approach to every project. I work closely with you to understand your goals, preferences, and vision, ensuring that the final product exceeds your expectations and resonates with your target audience."

        },
    ]
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
                <p> I know </p>
                <div className='flex items-start justify-between px-16 max-lg:px-10 max-md:px-7 max-sm:px-4 mt-10 '>
                    <div className=' w-full '>
                        <div className=" text-white text-[32px] max-sm:text-2xl font-normal font-['Javanese Text']"> Media  Production </div>
                        {/* <img src={firstImage} className='mt-5 w-full h-96 max-lg:h-86 max-md:72 max-sm:h-64 object-cover' /> */}
                        <div className=" text-white text-[20px] max-sm:text-sm font-normal font-['Javanese Text'] mt-5"> With over 15 years of experience in Radio Broadcasting, Advertising, Audio Production, video production, and TV/Film production, I bring a wealth of expertise and creativity to every project I undertake. My media and content production services are tailored to meet the unique needs of my clients.
                        </div>

                    </div>

                </div>

                <div className=" text-white text-center text-[32px] max-md:text-2xl max-sm:text-xl font-normal font-['Javanese Text'] px-16 mt-24 "> My Services include</div>
                <div className='flex items-start justify-between px-16 max-lg:px-10 max-md:px-7 max-sm:px-4 mt-16 '>
                    <div className='w-[45%] flex flex-col items-center'>
                        <AiFillAudio className="text-white w-12 h-12" />

                        <div className=" text-white text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base font-normal font-['Inter'] mt-5"> Audio Production </div>
                        <div className=" text-white text-center text-lg max-lg:text-base max-md:text-sm max-sm:text-xs font-light font-['Inter']"> From radio commercials, radio shows, podcasts, and voiceovers to sound design. I have a keen ear for detail and a passion for storytelling, ensuring that every audio project is crafted to perfection, leaving a lasting impact on listeners.
                        </div>

                    </div>
                    <div className='w-[45%] flex flex-col items-center'>
                        <FaVideo className="text-white w-12 h-12" />

                        <div className=" text-white text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base font-normal font-['Inter'] mt-5"> Video Production </div>
                        <div className=" text-white  text-center text-lg max-lg:text-base max-md:text-sm max-sm:text-xs font-light font-['Inter']"> From concept development to post-production, I offer comprehensive video production services for a variety of purposes, including promotional videos, short-form videos, and documentaries. Using visual storytelling, I bring your ideas to life on screen with creativity and precision. </div>
                    </div>
                 
                </div>

                <div className=" text-center text-white text-[32px] max-md:text-2xl max-sm:text-xl font-normal font-['Javanese Text'] mt-32 max-lg:mt-32 max-md:mt-24 max-sm:mt-18 pb-10">Why Choose Me?</div>


                <div className='px-20' >
                    {why.map((one, index) => (
                        <>
                            <div
                                key={index}
                                style={{display: activeIndex === index ? 'block' : 'none'}} // Only display the active element
                                className={`animated-div  ${activeIndex === index ? 'fadeIn ' : 'fadeOut'} text-center text-white text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base max-xsm:text-xs  font-bold font-['Javanese Text'] mt-2`}

                            >
                                {one.name}
                            </div>
                            <div
                                key={index}
                                style={{display: activeIndex === index ? 'block' : 'none'}} // Only display the active element
                                className={`animated-div text-center  ${activeIndex === index ? 'fadeIn ' : 'fadeOut'}  text-white text-xl max-lg:text-lg max-md:text-base max-sm:text-sm max-xsm:text-xs  font-normal font-['Javanese Text'] mt-2`}

                            >
                                {one.desc}
                            </div>
                        </>
                    ))}
                </div>

                <div className=" text-white text-center text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base max-xsm:text-xs font-normal font-['Javanese Text'] mt-2  px-20 pt-32"> Let's Collaborate </div>

                <div className=" text-white text-center text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base max-xsm:text-xs font-normal font-['Javanese Text']  px-20 pt-10"> Whether you're a business looking to enhance your brand's visibility, an organization seeking to tell your story through compelling content, or an individual with a creative vision to bring to life, I am here to help. </div>

             

                <div className='flex justify-center items-center my-10'>
                    <button className=" h-8 px-4 py-4 bg-white rounded-[32px] justify-start items-center gap-4 inline-flex">
                        <div className="text-center text-black text-lg max-md:text-base max-sm:text-xs font-normal font-['Jacques Francois']"> Connect with me today </div>

                    </button>
                </div>

                <div className=" text-white text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base max-xsm:text-xs font-normal font-['Javanese Text']  px-20 pt-2 text-center">To discuss your project requirements and discover how my expertise can elevate your media and content production needs. Let's embark on a journey of creativity and collaboration together! </div>
                <div className=' mt-10'>
                    <Footer />
                    Cool
                </div>
            </div>
        </div>
    )
}

export default MediaProduction
