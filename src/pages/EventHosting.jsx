import React, { useState } from 'react'
import BackgroundImage from '../assets/images/back3.png'
import NavLinks from '../components/NavLinks'
import { SlEvent } from "react-icons/sl";
import Footer from '../components/Footer'
import MobileNav from '../components/MobileNav'
import { RiKeynoteFill } from "react-icons/ri";

const EventHosting = () => {
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
                <div className='flex items-start justify-between px-16 mt-10 '>
                    <div className=' w-full '>
                        <div className=" text-white text-[32px]  max-sm:text-2xl font-normal font-['Javanese Text']"> Keynote Speaker and Event Host </div>

                        <div className=" text-white text-[16px] font-normal font-['Javanese Text'] mt-5">
                        I am not only a seasoned media, marketing and content production expert but also a dynamic keynote speaker and engaging event host. Whether you're looking to inspire your audience with thought-provoking insights or ensure that your event runs smoothly and captivates attendees, I bring energy, expertise, and charisma to every stage he graces.
                        </div>
                    </div>

                </div>
                <div className=" text-white text-center text-[32px] max-md:text-2xl max-sm:text-xl font-normal font-['Javanese Text'] px-16 mt-24 "> My Services include</div>
                <div className='flex items-start justify-between px-16 max-lg:px-10 max-md:px-7 max-sm:px-4 mt-16 '>
                    <div className='w-[48%] flex flex-col items-center '>
                        <RiKeynoteFill className="text-white w-12 h-12" />
               
                        <div className=" text-white text-center text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base font-normal font-['Inter'] mt-5"> Keynote Speaking </div>
                        <div className=" text-white pt-2 text-lg max-lg:text-base max-md:text-sm max-sm:text-xs font-light font-['Inter']"> I offer keynote speaking services tailored to a variety of topics and audiences. Drawing from my extensive experience in the broadcast media and entertainment industry, I deliver compelling talks that inform, inspire, and engage audiences of all sizes. Whether it's sharing insights on the power of storytelling, the future of media production, or strategies for success in the digital age, My delivery is authentic which leaves a lasting impact on attendees.
                        </div>

                    </div>
                    <div className='w-[48%] flex flex-col items-center'>
                        <SlEvent className="text-white w-12 h-12" />
                   
                        <div className=" text-white text-center  text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base font-normal font-['Inter'] mt-5"> Event Hosting </div>
                        <div className=" text-white pt-2  text-lg max-lg:text-base max-md:text-sm max-sm:text-xs font-light font-['Inter']"> As an experienced event host, I bring professionalism, enthusiasm, and charm to any occasion. Whether you're hosting a corporate conference, gala dinner, product launch, or awards ceremony, I ensure that your event runs smoothly from start to finish. With my ability to connect with audiences, and knack for keeping the energy high, I create memorable experiences that leave guests entertained and engaged. </div>
                    </div>
                 
                </div>
              
                <div className=" text-white text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base max-xsm:text-xs font-normal font-['Javanese Text'] mt-2  px-20 pt-32"> Why you should choose me? Well, I approach every speaking engagement and hosting opportunity with professionalism and meticulous preparation, expertise, charisma, audience engagement, and most of all, I am always prepared.  </div>
                <div className=" text-white text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base max-xsm:text-xs font-normal font-['Javanese Text'] mt-2  px-20 pt-10"> Whether you're seeking a dynamic keynote speaker to inspire your audience or an engaging event host to ensure that your event is a success - I am ready to help. 
                </div>
 
                <div className='flex justify-center items-center mt-16'>
                    <button className=" h-8 px-4 py-4 bg-white rounded-[32px] justify-start items-center gap-4 inline-flex mt-10">
                        <div className="text-center text-black text-lg font-normal font-['Jacques Francois']"> Let’s talk further! </div>
                    </button>
                </div>

                <div className=" text-white text-4xl text-center max-lg:text-2xl max-md:text-xl max-sm:text-lg max-xsm:text-base font-normal font-['Javanese Text']  px-20 pt-10"> Let's Create Unforgettable Experiences!                </div>

                <div className=' mt-10'>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default EventHosting
