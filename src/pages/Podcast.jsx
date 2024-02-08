import React, { useState, useEffect } from 'react'
import BackgroundImage from '../assets/images/background-image.jpg'
import NavLinks from '../components/NavLinks'
import HomeIcon from '../assets/images/podcast.png'
import obianuju from '../assets/images/obianuju.jpg';
import podcast1 from '../assets/images/obianuju.jpg';
import anxiety from '../assets/images/anxiety.jpg';
import podcast3 from '../assets/images/podcast3.jpg';
import idahosa from '../assets/images/idahosa.jpg';
import Questions from '../assets/images/Questions.jpg'
import towhom from '../assets/images/towhom.jpg';
import Udoka from '../assets/images/Udoka.jpg';
import Apple from '../assets/images/applepodcasts.png'
import Youtube from '../assets/images/youtube.png'
import Spotify from '../assets/images/spotify.png'
import Google from '../assets/images/google-podcast.png'
import SoundCloud from '../assets/images/soundcard.png'
import Footer from '../components/Footer'
import MobileNav from '../components/MobileNav'
import BJB1 from '../assets/images/BJB1.jpg'
import { Link } from 'react-router-dom'

const Podcast = () => {
    const [count, setCount] = useState(0);
    const [nav, setNav] = useState(false)

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

    const query = '?si=19ead6af4eca442c'
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
            <div className=" h-fit pb-10  w-full flex flex-col pt-10 bg-black">
                <div className='flex justify-center items-center max-md:p-3'>
                    <img src={HomeIcon} className=' max-md:w-20 object-cover max-lg:w-28  max-sm:w-14 ' />
                </div>
                <p className=" text-white text-[32px] max-lg:text-2xl max-md:text-xl font-normal font-['Poppins'] mt-10 px-10">Explore my Podcasts</p>
                <p className=" text-white text-lg max-lg:text-base max-md:text-sm font-normal font-['Poppins'] mt-5 px-10">Listen to my latest podcast </p>
                <p className=" text-white text-[32px] max-lg:text-2xl max-md:text-xl font-normal font-['Poppins'] mt-10 px-10">Thoughtful Randomness</p>
                <div className='flex flex-col items-center justify-between gap-4 relative px-7'>
                    <a href="https://open.spotify.com/show/0cTcT0vGIViIEfRNafsSlC" target='_blank' className="text-white font-bold max-lg:text-base max-md:text-sm font-['Poppins'] mt-5">Spotify</a>
                    <div className='w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide' >
                        <Link to='https://open.spotify.com/episode/3nNsUYLVcAR4fOMRl2mOac?si=a6cfc6f7c211472b' target='_blank' id="sliderItem" className='w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
                            <div className=" bg-cover  h-56 flex hover:bg-blend-multiply hover:bg-gray-500 justify-center items-end pb-2 hover:pb-4" style={{ backgroundImage: `url(${BJB1})` }}>
                                <div className="text-white text-[16px] max-lg:text-sm max-md:text-xs font-normal font-['Poppins']">Thoughtful Randomness is Back!!!</div>
                            </div>
                        </Link>
                        <Link to='https://open.spotify.com/episode/5d0wevlxoIvpqxfy2LK4HQ?si=19ead6af4eca442c' target='_blank' id="sliderItem" className='w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
                            <div className=" bg-cover hover:cursor-pointer  h-56 flex hover:bg-blend-multiply hover:bg-gray-500 justify-center items-end pb-2 hover:pb-4" style={{ backgroundImage: `url(${Questions})` }}>
                                <div className=" text-white text-[16px] max-lg:text-sm max-md:text-xs font-normal font-['Poppins']">15 Questions</div>
                            </div>
                        </Link>
                        <Link to='https://open.spotify.com/episode/3FrDUEchxWVKF81Gsm351E?si=3e592a415dff4e10' target='_blank' id="sliderItem" className='w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
                            <div className=" bg-cover hover:cursor-pointer h-56 flex hover:bg-blend-multiply hover:bg-gray-500 justify-center items-end pb-2 hover:pb-4" style={{ backgroundImage: `url(${idahosa})` }}>
                                <div className=" text-white text-[16px] max-lg:text-sm max-md:text-xs font-normal font-['Poppins']">Laurie Idahosa</div>
                            </div>
                        </Link>
                        <Link to="https://open.spotify.com/episode/0RR6nOAbvzSvv9kF2jiTax?si=b7389944d7304ca1" target="_blank" id="sliderItem" className='w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
                            <div className="  bg-cover hover:cursor-pointer h-56 flex hover:bg-blend-multiply hover:bg-gray-500 justify-center items-end pb-2 hover:pb-4" style={{ backgroundImage: `url(${anxiety})` }}>
                                <div className="text-white text-[16px] max-lg:text-sm max-md:text-xs font-normal font-['Poppins']">Dancing with Anxiety</div>
                            </div>
                        </Link>
                        <Link to="https://open.spotify.com/episode/2pXqZxuOTzCara9zAVImLF?si=21af9e8ec7db4c83" target='_blank' id="sliderItem" className='w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
                            <div className="  bg-cover hover:cursor-pointer h-56 flex hover:bg-blend-multiply hover:bg-gray-500 justify-center items-end pb-2 hover:pb-4" style={{ backgroundImage: `url(${towhom})` }}>
                                <div className=" text-white text-[16px] max-lg:text-sm max-md:text-xs font-normal font-['Poppins']">To whom it may Concern</div>
                            </div>
                        </Link>
                        <Link to="https://open.spotify.com/episode/4GcfAofFQzEGYSpmjMqMBe?si=89106fa2553f419d" target='_blank' id="sliderItem" className='w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
                            <div className=" bg-cover hover:cursor-pointer h-56 flex hover:bg-blend-multiply hover:bg-gray-500 justify-center items-end pb-2 hover:pb-4" style={{ backgroundImage: `url(${obianuju})` }}>
                                <div className=" text-white text-[16px] max-lg:text-sm max-md:text-xs font-normal font-['Poppins']">Obianuju Asika</div>
                            </div>
                        </Link>
                        <Link to="https://open.spotify.com/episode/0ynuo84RlsgCFOeL0wO1DP?si=37f61b88e43c4e4a" target='_blank' id="sliderItem" className='w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
                            <div className=" bg-cover hover:cursor-pointer h-56 flex hover:bg-blend-multiply hover:bg-gray-500 justify-center items-end pb-2 hover:pb-4" style={{ backgroundImage: `url(${podcast1})` }}>
                                <div className=" text-white text-[16px] max-lg:text-sm max-md:text-xs font-normal font-['Poppins']">Fatherhood</div>
                            </div>
                        </Link>
                        <Link to="https://open.spotify.com/episode/3ZreEewiWw5TILt8oFpHsr?si=c837eef871ef40f6" target='_blank' id="sliderItem" className='w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
                            <div className=" bg-cover hover:cursor-pointer h-56 flex hover:bg-blend-multiply hover:bg-gray-500 justify-center items-end pb-2 hover:pb-4" style={{ backgroundImage: `url(${Udoka})` }}>
                                <div className=" text-white text-[16px] max-lg:text-sm max-md:text-xs font-normal font-['Poppins']">Udoka Odigbor</div>
                            </div>
                        </Link>
                    </div>
                    <a href="https://podcasts.apple.com/us/podcast/thoughtful-randomness/id1615584635" target='_blank' className="text-white font-bold max-lg:text-base max-md:text-sm font-['Poppins'] mt-5">Apple Podcast</a>
                    <div className='w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide' >
                        <Link to='https://podcasts.apple.com/us/podcast/chapter-00-thoughtful-randomness-is-back/id1615584635?i=1000554868353' target='_blank' id="sliderItem" className='w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
                            <div className=" bg-cover  h-56 flex hover:bg-blend-multiply hover:bg-gray-500 justify-center items-end pb-2 hover:pb-4" style={{ backgroundImage: `url(${BJB1})` }}>
                                <div className="text-white text-[16px] max-lg:text-sm max-md:text-xs font-normal font-['Poppins']">Thoughtful Randomness is Back!!!</div>
                            </div>
                        </Link>
                        <Link to='https://podcasts.apple.com/us/podcast/chapter-02-laurie-idahosa/id1615584635?i=1000555241876' target='_blank' id="sliderItem" className='w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
                            <div className=" bg-cover hover:cursor-pointer h-56 flex hover:bg-blend-multiply hover:bg-gray-500 justify-center items-end pb-2 hover:pb-4" style={{ backgroundImage: `url(${idahosa})` }}>
                                <div className=" text-white text-[16px] max-lg:text-sm max-md:text-xs font-normal font-['Poppins']">Laurie Idahosa</div>
                            </div>
                        </Link>
                        <Link to="https://podcasts.apple.com/us/podcast/chapter-03-dancing-with-anxiety/id1615584635?i=1000555460498" target="_blank" id="sliderItem" className='w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
                            <div className="  bg-cover hover:cursor-pointer h-56 flex hover:bg-blend-multiply hover:bg-gray-500 justify-center items-end pb-2 hover:pb-4" style={{ backgroundImage: `url(${anxiety})` }}>
                                <div className="text-white text-[16px] max-lg:text-sm max-md:text-xs font-normal font-['Poppins']">Dancing with Anxiety</div>
                            </div>
                        </Link>
                        <Link to="https://podcasts.apple.com/us/podcast/chapter-04-to-whom-it-may-concern/id1615584635?i=1000556188542" target='_blank' id="sliderItem" className='w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
                            <div className="  bg-cover hover:cursor-pointer h-56 flex hover:bg-blend-multiply hover:bg-gray-500 justify-center items-end pb-2 hover:pb-4" style={{ backgroundImage: `url(${towhom})` }}>
                                <div className=" text-white text-[16px] max-lg:text-sm max-md:text-xs font-normal font-['Poppins']">To whom it may Concern</div>
                            </div>
                        </Link>
                        <Link to="https://podcasts.apple.com/us/podcast/chapter-05-obianuju-asika/id1615584635?i=1000560752208" target='_blank' id="sliderItem" className='w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
                            <div className=" bg-cover hover:cursor-pointer h-56 flex hover:bg-blend-multiply hover:bg-gray-500 justify-center items-end pb-2 hover:pb-4" style={{ backgroundImage: `url(${obianuju})` }}>
                                <div className=" text-white text-[16px] max-lg:text-sm max-md:text-xs font-normal font-['Poppins']">Obianuju Asika</div>
                            </div>
                        </Link>
                        <Link to="https://podcasts.apple.com/us/podcast/chapter-05-obianuju-asika/id1615584635?i=1000560752208" target='_blank' id="sliderItem" className='w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
                            <div className=" bg-cover hover:cursor-pointer h-56 flex hover:bg-blend-multiply hover:bg-gray-500 justify-center items-end pb-2 hover:pb-4" style={{ backgroundImage: `url(${podcast3})` }}>
                                <div className=" text-white text-[16px] max-lg:text-sm max-md:text-xs font-normal font-['Poppins']">Fatherhood</div>
                            </div>
                        </Link>
                        <Link to="https://podcasts.apple.com/us/podcast/chapter-05-obianuju-asika/id1615584635?i=1000560752208" target='_blank' id="sliderItem" className='w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
                            <div className=" bg-cover hover:cursor-pointer h-56 flex hover:bg-blend-multiply hover:bg-gray-500 justify-center items-end pb-2 hover:pb-4" style={{ backgroundImage: `url(${Udoka})` }}>
                                <div className=" text-white text-[16px] max-lg:text-sm max-md:text-xs font-normal font-['Poppins']">Udoka Odigbor</div>
                            </div>
                        </Link>
                    </div>
                </div>
                <p className=" text-white text-[32px] max-lg:text-2xl max-md:text-xl font-normal font-['Poppins'] mt-10 px-10">Wait, Hear us Out!</p>
                <div className='flex items-center justify-between relative px-7 '>
                    <div className='w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide' >
                        <Link to="https://open.spotify.com/episode/2FlbUmqOORINgqvoZrp7bV?si=294c69cc761a42f7" target='_blank' id="sliderItem" className='w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
                            <div className=" bg-cover  h-56 flex hover:bg-blend-multiply hover:bg-gray-500 justify-center items-end pb-2 hover:pb-4" style={{ backgroundImage: `url(${podcast1})` }}>
                                <div className="text-white text-[16px] max-lg:text-sm max-md:text-xs font-normal font-['Poppins']">The Genesis - How it started</div>
                            </div>
                        </Link>
                        <Link to="https://open.spotify.com/episode/2FlbUmqOORINgqvoZrp7bV?si=90caf0b814b743cb" target='_blank' id="sliderItem" className='w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
                            <div className=" bg-cover hover:cursor-pointer  h-56 flex hover:bg-blend-multiply hover:bg-gray-500 justify-center items-end pb-2 hover:pb-4" style={{ backgroundImage: `url(${podcast3})` }}>
                                <div className=" text-white text-[16px] max-lg:text-sm max-md:text-xs font-normal font-['Poppins']">The Genesis - How it started</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            {Array.from({ length: count }, (_, i) => (
                <div key={i} className='  pt-5 w-full bg-black'>
                    <p className=" text-white text-[32px] max-lg:text-2xl max-md:text-xl  font-normal font-['Poppins'] mt-20 px-10">Relationships</p>
                    <div className='flex items-center justify-between relative px-7'>
                        <div className='w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide' >
                            <div id="sliderItem" className='w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
                                <div className=" bg-cover  h-56 flex hover:bg-blend-multiply hover:bg-gray-500 justify-center items-end pb-2 hover:pb-4" style={{ backgroundImage: `url(${podcast1})` }}>
                                    <div className="text-white text-[16px] max-lg:text-sm max-md:text-xs font-normal font-['Poppins']">Love at first sight</div>
                                </div>
                            </div>
                            <div id="sliderItem" className='w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
                                <div className=" bg-cover hover:cursor-pointer  h-56 flex hover:bg-blend-multiply hover:bg-gray-500 justify-center items-end pb-2 hover:pb-4" style={{ backgroundImage: `url(${FifthImage})` }}>
                                    <div className=" text-white text-[16px] max-lg:text-sm max-md:text-xs font-normal font-['Poppins']">How do U know U attracted the Right Partner</div>
                                </div>
                            </div>
                            <div id="sliderItem" className='w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
                                <div className=" bg-cover hover:cursor-pointer h-56 flex hover:bg-blend-multiply hover:bg-gray-500 justify-center items-end pb-2 hover:pb-4" style={{ backgroundImage: `url(${SixthImage})` }}>
                                    <div className=" text-white text-[16px]  max-lg:text-sm max-md:text-xs font-normal font-['Poppins']">Creating Boundaries in Relationships</div>
                                </div>
                            </div>
                            <div id="sliderItem" className='w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
                                <div className="  bg-cover hover:cursor-pointer h-56 flex hover:bg-blend-multiply hover:bg-gray-500 justify-center items-end pb-2 hover:pb-4" style={{ backgroundImage: `url(${FourthImage})` }}>
                                    <div className="text-white text-[16px] max-lg:text-sm max-md:text-xs font-normal font-['Poppins']">Love at first sight.</div>
                                </div>
                            </div>
                            <div id="sliderItem" className='w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
                                <div className="  bg-cover hover:cursor-pointer h-56 flex hover:bg-blend-multiply hover:bg-gray-500 justify-center items-end pb-2 hover:pb-4" style={{ backgroundImage: `url(${FifthImage})` }}>
                                    <div className=" text-white text-[16px] max-lg:text-sm max-md:text-xs font-normal font-['Poppins']">How do U know U attracted the Right Partner</div>
                                </div>
                            </div>
                            <div id="sliderItem" className='w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
                                <div className=" bg-cover hover:cursor-pointer h-56 flex hover:bg-blend-multiply hover:bg-gray-500 justify-center items-end pb-2 hover:pb-4" style={{ backgroundImage: `url(${SixthImage})` }}>
                                    <div className=" text-white text-[16px] max-lg:text-sm max-md:text-xs font-normal font-['Poppins']">Creating Boundaries in Relationships</div>
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
            <div className='py-20 max-md:py-14 max-sm:py-10 bg-black flex flex-col justify-center items-center '>
                <div className="text-center text-white text-[16px] max-lg:text-sm  w-[50%] max-md:w-[70%] max-sm:w-[90%] font-normal font-['Poppins'] ">Subscribe and listen on every major platform<br />My podcast is available on a growing number of platforms. Listen on your preferred app to get the best experience.</div>
                <div className='flex flex-wrap justify-around items-center w-[40%] max-md:w-[70%] max-sm:w-[100%]  mt-10'>

                    <img className="w-10 h-10" src={Apple} />
                    <img className="w-10 h-10" src={Youtube} />
                    <img className="w-10 h-10" src={Spotify} />
                    <img className="w-10 h-10" src={Google} />
                    <img className="w-10 h-10" src={SoundCloud} />
                </div>
            </div>
            <div className='flex flex-col justify-center items-center bg-black border-t-[1px] border-white'>
                <Footer />
            </div>


        </div>
    )
}

export default Podcast;
