import React, { useState, useEffect } from 'react'
import BackgroundImage from '../assets/images/background-image.jpg'
import NavLinks from '../components/NavLinks'
import HomeIcon from '../assets/images/podcast.png'
import FirstImage from '../assets/images/briefcase.jpg'
import SecondImage from '../assets/images/problem-solving.jpg'
import ThirdImage from '../assets/images/employee.jpg'
import FourthImage from '../assets/images/romantic.jpg'
import FifthImage from '../assets/images/shaking.jpg'
import SixthImage from '../assets/images/barrier.jpg'
import Apple from '../assets/images/applepodcasts.png'
import Youtube from '../assets/images/youtube.png'
import Spotify from '../assets/images/spotify.png'
import Google from '../assets/images/google-podcast.png'
import SoundCloud from '../assets/images/soundcard.png'
import { BiLogoFacebook } from 'react-icons/bi'
import { AiOutlineInstagram } from 'react-icons/ai'
import { RiTwitterXFill } from 'react-icons/ri'

const Podcast = () => {
    const [count, setCount] = useState(0);

    const handleSeeMoreClick = () => {
        if (count < 5) {
            setCount(count + 1);
        }
    };
    useEffect(() => {
        let lastScrollX;
        // if (process.browser) {
        lastScrollX = window.pageXOffset || window.scrollX;
        const slideer = document.getElementById("sliderItem")
        slideer && slideer.addEventListener('scroll', function (event) {
            let currentScrollX = window.pageXOffset || window.scrollX;
            if (lastScrollX !== currentScrollX) {
                // Horizontal scrolling has occurred
                // The scroll event code goes here
                slideer.scrollLeft = slideer.scrollLeft + 500
            }
            lastScrollX = currentScrollX;
        });
        // }
    }, []);
    return (
        <div className='min-h-screen w-full p-0'>
            <div style={{ backgroundImage: `url(${BackgroundImage})` }}
                className="bg-cover bg-center h-[15rem] w-full">
                <div className='pt-20'>
                    <NavLinks />
                </div>

            </div>
            <div className=" h-[65rem]  w-full flex flex-col pt-10 bg-black">
                <div className='flex justify-center items-center'><img src={HomeIcon}  /></div>
                <p className=" text-white text-[32px] font-normal font-['Poppins'] mt-10 px-10">Explore Our Podcasts</p>
                <p className=" text-white text-lg font-normal font-['Poppins'] mt-5 px-10">Listen to our latest podcast </p>
                <p className=" text-white text-[32px] font-normal font-['Poppins'] mt-10 px-10">Career</p>
                <div className='flex items-center justify-between relative px-7'>
                    <div className='w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide' >
                        <div id="sliderItem" className='w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
                            <div className=" bg-cover  h-56 flex hover:bg-blend-multiply hover:bg-gray-500 justify-center items-end pb-2 hover:pb-4" style={{ backgroundImage: `url(${FirstImage})` }}>
                                <div className="text-white text-[16px] font-normal font-['Poppins']">The Early days of your career.</div>
                            </div>
                        </div>
                        <div id="sliderItem" className='w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
                            <div className=" bg-cover hover:cursor-pointer  h-56 flex hover:bg-blend-multiply hover:bg-gray-500 justify-center items-end pb-2 hover:pb-4" style={{ backgroundImage: `url(${SecondImage})` }}>
                                <div className=" text-white text-[16px] font-normal font-['Poppins']">Career Change: How to Navigate and Manage the Risk.</div>
                            </div>
                        </div>
                        <div id="sliderItem" className='w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
                            <div className=" bg-cover hover:cursor-pointer h-56 flex hover:bg-blend-multiply hover:bg-gray-500 justify-center items-end pb-2 hover:pb-4" style={{ backgroundImage: `url(${ThirdImage})` }}>
                                <div className=" text-white text-[16px] font-normal font-['Poppins']">Solving Stress at work.</div>
                            </div>
                        </div>
                        <div id="sliderItem" className='w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
                            <div className="  bg-cover hover:cursor-pointer h-56 flex hover:bg-blend-multiply hover:bg-gray-500 justify-center items-end pb-2 hover:pb-4" style={{ backgroundImage: `url(${FirstImage})` }}>
                                <div className="text-white text-[16px] font-normal font-['Poppins']">The Early days of your career.</div>
                            </div>
                        </div>
                        <div id="sliderItem" className='w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
                            <div className="  bg-cover hover:cursor-pointer h-56 flex hover:bg-blend-multiply hover:bg-gray-500 justify-center items-end pb-2 hover:pb-4" style={{ backgroundImage: `url(${SecondImage})` }}>
                                <div className=" text-white text-[16px] font-normal font-['Poppins']">Career Change: How to Navigate and Manage the Risk.</div>
                            </div>
                        </div>
                        <div id="sliderItem" className='w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
                            <div className=" bg-cover hover:cursor-pointer h-56 flex hover:bg-blend-multiply hover:bg-gray-500 justify-center items-end pb-2 hover:pb-4" style={{ backgroundImage: `url(${ThirdImage})` }}>
                                <div className=" text-white text-[16px] font-normal font-['Poppins']">Solving Stress at work.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className=" text-white text-[32px] font-normal font-['Poppins'] mt-20 px-10">Relationships</p>
                <div className='flex items-center justify-between relative px-7'>
                    <div className='w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide' >
                        <div id="sliderItem" className='w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
                            <div className=" bg-cover  h-56 flex hover:bg-blend-multiply hover:bg-gray-500 justify-center items-end pb-2 hover:pb-4" style={{ backgroundImage: `url(${FourthImage})` }}>
                                <div className="text-white text-[16px] font-normal font-['Poppins']">Love at first sight</div>
                            </div>
                        </div>
                        <div id="sliderItem" className='w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
                            <div className=" bg-cover hover:cursor-pointer  h-56 flex hover:bg-blend-multiply hover:bg-gray-500 justify-center items-end pb-2 hover:pb-4" style={{ backgroundImage: `url(${FifthImage})` }}>
                                <div className=" text-white text-[16px] font-normal font-['Poppins']">How do U know U attracted the Right Partner</div>
                            </div>
                        </div>
                        <div id="sliderItem" className='w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
                            <div className=" bg-cover hover:cursor-pointer h-56 flex hover:bg-blend-multiply hover:bg-gray-500 justify-center items-end pb-2 hover:pb-4" style={{ backgroundImage: `url(${SixthImage})` }}>
                                <div className=" text-white text-[16px] font-normal font-['Poppins']">Creating Boundaries in Relationships</div>
                            </div>
                        </div>
                        <div id="sliderItem" className='w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
                            <div className="  bg-cover hover:cursor-pointer h-56 flex hover:bg-blend-multiply hover:bg-gray-500 justify-center items-end pb-2 hover:pb-4" style={{ backgroundImage: `url(${FourthImage})` }}>
                                <div className="text-white text-[16px] font-normal font-['Poppins']">Love at first sight.</div>
                            </div>
                        </div>
                        <div id="sliderItem" className='w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
                            <div className="  bg-cover hover:cursor-pointer h-56 flex hover:bg-blend-multiply hover:bg-gray-500 justify-center items-end pb-2 hover:pb-4" style={{ backgroundImage: `url(${FifthImage})` }}>
                                <div className=" text-white text-[16px] font-normal font-['Poppins']">How do U know U attracted the Right Partner</div>
                            </div>
                        </div>
                        <div id="sliderItem" className='w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
                            <div className=" bg-cover hover:cursor-pointer h-56 flex hover:bg-blend-multiply hover:bg-gray-500 justify-center items-end pb-2 hover:pb-4" style={{ backgroundImage: `url(${SixthImage})` }}>
                                <div className=" text-white text-[16px] font-normal font-['Poppins']">Creating Boundaries in Relationships</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {Array.from({ length: count }, (_, i) => (
                <div key={i} className='  pt-5 w-full bg-black'>
                    <p className=" text-white text-[32px] font-normal font-['Poppins'] mt-20 px-10">Relationships</p>
                    <div className='flex items-center justify-between relative px-7'>
                        <div className='w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide' >
                            <div id="sliderItem" className='w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
                                <div className=" bg-cover  h-56 flex hover:bg-blend-multiply hover:bg-gray-500 justify-center items-end pb-2 hover:pb-4" style={{ backgroundImage: `url(${FourthImage})` }}>
                                    <div className="text-white text-[16px] font-normal font-['Poppins']">Love at first sight</div>
                                </div>
                            </div>
                            <div id="sliderItem" className='w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
                                <div className=" bg-cover hover:cursor-pointer  h-56 flex hover:bg-blend-multiply hover:bg-gray-500 justify-center items-end pb-2 hover:pb-4" style={{ backgroundImage: `url(${FifthImage})` }}>
                                    <div className=" text-white text-[16px] font-normal font-['Poppins']">How do U know U attracted the Right Partner</div>
                                </div>
                            </div>
                            <div id="sliderItem" className='w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
                                <div className=" bg-cover hover:cursor-pointer h-56 flex hover:bg-blend-multiply hover:bg-gray-500 justify-center items-end pb-2 hover:pb-4" style={{ backgroundImage: `url(${SixthImage})` }}>
                                    <div className=" text-white text-[16px] font-normal font-['Poppins']">Creating Boundaries in Relationships</div>
                                </div>
                            </div>
                            <div id="sliderItem" className='w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
                                <div className="  bg-cover hover:cursor-pointer h-56 flex hover:bg-blend-multiply hover:bg-gray-500 justify-center items-end pb-2 hover:pb-4" style={{ backgroundImage: `url(${FourthImage})` }}>
                                    <div className="text-white text-[16px] font-normal font-['Poppins']">Love at first sight.</div>
                                </div>
                            </div>
                            <div id="sliderItem" className='w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
                                <div className="  bg-cover hover:cursor-pointer h-56 flex hover:bg-blend-multiply hover:bg-gray-500 justify-center items-end pb-2 hover:pb-4" style={{ backgroundImage: `url(${FifthImage})` }}>
                                    <div className=" text-white text-[16px] font-normal font-['Poppins']">How do U know U attracted the Right Partner</div>
                                </div>
                            </div>
                            <div id="sliderItem" className='w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
                                <div className=" bg-cover hover:cursor-pointer h-56 flex hover:bg-blend-multiply hover:bg-gray-500 justify-center items-end pb-2 hover:pb-4" style={{ backgroundImage: `url(${SixthImage})` }}>
                                    <div className=" text-white text-[16px] font-normal font-['Poppins']">Creating Boundaries in Relationships</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <div className='bg-black flex justify-center items-center'>
                {count < 5 && <div className="px-4 mx-auto py-2 bg-white rounded-lg justify-center items-center gap-2.5 inline-flex">
                    <button className="text-black text-sm font-normal " onClick={handleSeeMoreClick}>
                        See more
                    </button>
                </div>}
            </div>
            <div className=' py-20 bg-black flex flex-col justify-center items-center '>
                <div className="text-center text-white text-[16px] w-[50%] font-normal font-['Poppins'] ">Subscribe and listen on every major platform<br />Our podcast is available on a growing number of platforms. Listen on your preferred app to get the best experience.</div>
                <div className='flex flex-wrap justify-around items-center w-[40%]  mt-10'>

                    <img className="w-10 h-10" src={Apple} />
                    <img className="w-10 h-10" src={Youtube} />
                    <img className="w-10 h-10" src={Spotify} />
                    <img className="w-10 h-10" src={Google} />
                    <img className="w-10 h-10" src={SoundCloud} />
                </div>
            </div>
            <div className='flex flex-col justify-center items-center py-20 bg-black border-t-[1px] border-white'>
                <div className='inline-flex justify-center items-center w-1/3 gap-4 text-white'>
                    <div>
                        <BiLogoFacebook />
                    </div>
                    <div>
                        < AiOutlineInstagram />
                    </div>

                    {/* < FaXTwitter /> */}
                    <div>
                        < RiTwitterXFill />
                    </div>


                </div>
                <div className="text-white text-sm text-center  font-normal font-['Poppins'] mt-5">© 2023 BJ Baringo</div>
            </div>

            
        </div>
    )
}

export default Podcast