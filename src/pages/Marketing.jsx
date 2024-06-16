import React, { useState, useEffect } from 'react'
import BackgroundImage from '../assets/images/back3.png'
import NavLinks from '../components/NavLinks'
import Footer from '../components/Footer'
import firstImage from '../assets/images/marketing1.png'
import secondImage from '../assets/images/user.png'
import thirdImage from '../assets/images/bulb.png'
import fourthImage from '../assets/images/connect.png'
import fifthImage from '../assets/images/data.png'
import MobileNav from '../components/MobileNav'
import '../App.css'
import { SlSocialDropbox } from "react-icons/sl";
import { GiProgression } from "react-icons/gi";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { TbBrandSugarizer } from "react-icons/tb";
import { GoFileMedia } from "react-icons/go";
import { MdContentPaste } from "react-icons/md";

const Marketing = () => {
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
            name: 'Precise targeting',
            desc: "I don't just send out your message broadly. Instead, I conduct meticulous research on your target audience, understand their pain points, and create campaigns that resonate with them on a deep, emotional level."

        },
        {
            name: 'Data-driven decisions',
            desc: " I use cutting-edge tools and analytics to track performance, measure ROI, and optimise your strategy to ensure maximum impact."

        },
        {
            name: 'Storytelling expertise',
            desc: " I believe in the power of compelling narratives. Therefore, I incorporate them into your marketing messages, which build trust, foster brand loyalty, and make your brand unforgettable."

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
                <div className='flex items-start justify-between px-16 max-lg:px-10 max-md:px-7 max-sm:px-4 mt-10 '>
                    <div className=' w-full '>
                        <div className=" text-white text-[32px] max-sm:text-2xl font-normal font-['Javanese Text']">Marketing and Promotion</div>

                        <div className=" text-white text-[20px] max-sm:text-sm font-normal font-['Javanese Text'] mt-5"> It can be challenging for businesses and brands to stand out amidst the loudness of today's digital landscape.
                        </div>
                        <div className=" text-white text-[20px] max-sm:text-sm font-normal font-['Javanese Text'] mt-5"> So, let’s talk about how I can help you overcome this challenge - by developing strategic, data-driven campaigns that attract your ideal clients and achieve your marketing goals.
                        </div>
                    </div>

                </div>

                <div className=" text-center text-white text-[32px] max-md:text-2xl max-sm:text-xl font-normal font-['Javanese Text'] mt-32 max-lg:mt-32 max-md:mt-24 max-sm:mt-18 pb-10">Why Choose Me?</div>


                <div className='px-40' >
                    {why.map((one, index) => (
                        <>
                            <div
                                key={index}
                                style={{ display: activeIndex === index ? 'block' : 'none' }} // Only display the active element
                                className={`animated-div  ${activeIndex === index ? 'fadeIn ' : 'fadeOut'} text-center text-white text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base max-xsm:text-xs  font-bold font-['Javanese Text'] mt-2`}

                            >
                                {one.name}
                            </div>
                            <div
                                key={index}
                                style={{ display: activeIndex === index ? 'block' : 'none' }} // Only display the active element
                                className={`animated-div text-center  ${activeIndex === index ? 'fadeIn ' : 'fadeOut'}  text-white text-xl max-lg:text-lg max-md:text-base max-sm:text-sm max-xsm:text-xs  font-normal font-['Javanese Text'] mt-2`}

                            >
                                {one.desc}
                            </div>
                        </>
                    ))}
                </div>

                <div className=" text-white text-center text-[32px] max-md:text-2xl max-sm:text-xl font-normal font-['Javanese Text'] px-16 mt-36 "> I can help you with: </div>
                <div className='flex items-start justify-between px-16 max-lg:px-10 max-md:px-7 max-sm:px-4 mt-16 '>
                    <div className='w-[33%] flex flex-col items-center'>
                        <div className='w-16 h-16 max-md:w-12 max-md:h-12 max-sm:w-8 max-sm:h-8 rounded-full bg-white items-center flex justify-center'>
                            <img src={secondImage} className='max-sm:w-6 max-md:w-8 max-lg:w-10 max-xsm:w-5' />
                        </div>
                        <div className=" text-white text-xl max-lg:text-lg max-md:text-base max-sm:text-sm font-normal font-['Inter'] mt-5"> Influencer Marketing and Management  </div>
                       

                    </div>
                    <div className='w-[33%] flex flex-col items-center'>
                        <div className='w-16 h-16 max-md:w-12 max-md:h-12 max-sm:w-8 max-sm:h-8 rounded-full bg-white items-center flex justify-center'>
                            <SlSocialDropbox className="text-black w-12 h-12" />
                        </div>

                        <div className=" text-white text-xl max-lg:text-lg max-md:text-base max-sm:text-sm  font-normal font-['Inter'] mt-5">  Digital Marketing  </div>
               
                    </div>
                    <div className='w-[33%] flex flex-col items-center'>
                        <div className='w-16 h-16 max-md:w-12 max-md:h-12 max-sm:w-8 max-sm:h-8 rounded-full  bg-white items-center flex justify-center'>
                            <GoFileMedia className="text-black w-12 h-12" />
                        </div>

                        <div className=" text-white text-xl max-lg:text-lg max-md:text-base max-sm:text-sm  font-normal font-['Inter'] mt-5"> Media Promotions (Movies, Television, Music)  </div>
                        {/* <div className=" text-white text-lg max-lg:text-base max-md:text-sm max-sm:text-xs font-light font-['Inter']">Uncover new insights and anticipate future customer actions with Google’s machine learning to get more value out of your data.</div>
                    */}
                    </div>
                </div>
                <div className='flex items-start justify-between px-16 max-lg:px-10 max-md:px-7 max-sm:px-4 mt-24 max-md:16 max-sm:mt-12 '>
                    <div className='w-[33%] flex flex-col items-center '>
                        <div className='w-16 h-16  max-md:w-12 max-md:h-12 max-sm:w-8 max-sm:h-8  rounded-full bg-white items-center flex justify-center'>
                            <img src={fourthImage} className='max-sm:w-6 max-md:w-8 max-lg:w-10 max-xsm:w-5' />
                        </div>
                        <div className=" text-white text-xl max-lg:text-lg max-md:text-base max-sm:text-sm   font-normal font-['Inter'] mt-5"> Digital PR </div>


                    </div> <div className='w-[33%] flex flex-col items-center '>
                        <div className='w-16 h-16  max-md:w-12 max-md:h-12 max-sm:w-8 max-sm:h-8  rounded-full  bg-white items-center flex justify-center'>
                            <MdContentPaste className="text-black w-12 h-12" />
                        </div>
                        <div className=" text-white text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base font-normal font-['Inter'] mt-5"> Content Writing </div>

                    </div>
                    <div className='w-[33%] flex flex-col items-center '>
                        <div className='w-16 h-16  max-md:w-12 max-md:h-12 max-sm:w-8 max-sm:h-8  rounded-full  bg-white items-center flex justify-center'>
                            <GiProgression className="text-black w-12 h-12" />
                        </div>

                        <div className=" text-white text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base font-normal font-['Inter'] mt-5"> Data Analytics </div>

                    </div>
                </div>


                <div className=" text-white text-3xl text-center max-lg:text-xl max-md:text-lg max-sm:text-base max-xsm:text-sm font-normal font-['Javanese Text']  px-20 pt-40">
                    Are you ready to boost your marketing and promotional efforts?
                </div>

                <div className='flex justify-center items-center mt-10'>
                    <button className=" h-8 px-4 py-4 bg-white rounded-[32px] justify-start items-center gap-4 inline-flex">
                        <div className="text-center text-black text-lg  max-md:text-base max-sm:text-xs font-normal font-['Jacques Francois']"> Contact me today </div>
                    </button>
                </div>

                <div className=' mt-10'>
                    <Footer />
                </div>
            </div>
        </div >
    )
}

export default Marketing
