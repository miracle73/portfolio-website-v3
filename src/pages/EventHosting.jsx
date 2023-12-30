import React from 'react'
import BackgroundImage from '../assets/images/background-image.jpg'
import NavLinks from '../components/NavLinks'
import firstImage from '../assets/images/eventHosting.png'
import secondImage from '../assets/images/eventsHosting1.png'
import thirdImage from '../assets/images/eventsHosting2.png'
import fourthImage from '../assets/images/eventHosting3.png'
import fifthImage from '../assets/images/eventHosting4.png'
import sixthImage from '../assets/images/eventHosting5.png'
import seventhImage from '../assets/images/eventHosting6.png'
import eighthImage from '../assets/images/eventHosting7.png'
import Footer from '../components/Footer'

const EventHosting = () => {
    return (
        <div className='min-h-screen w-full p-0'>
            <div style={{ backgroundImage: `url(${BackgroundImage})` }}
                className="bg-cover bg-center h-[15rem] w-full">
                <div className='pt-20'>
                    <NavLinks />
                </div>

            </div>
            <div className="  w-full flex flex-col pt-10 bg-black ">
                <div className='flex items-start justify-between px-16 mt-10 '>
                    <div className=' w-full '>
                        <div className=" text-white text-[32px] font-normal font-['Javanese Text']">Event Hosting</div>
                        <img src={firstImage} className='mt-5 w-full' />
                        <div className=" text-white text-[16px] font-normal font-['Javanese Text'] mt-5">Elevate your event to the next level with our professional Event Host services.
                            With our expertise in orchestrating the event flow and fostering audience engagement, we guarantee a memorable event that leaves a lasting impression.
                            Elevate your event to the next level with our professional Event Host services. With our expertise in orchestrating the event flow and fostering audience engagement,
                            we guarantee a memorable event that leaves a lasting impression.</div>
                    </div>

                </div>
                <div className=" text-white text-[32px] font-normal font-['Javanese Text'] px-16 mt-5">Previous works</div>
                <div className='flex items-start justify-between px-16 mt-5'>
                    <div className='w-[33.3%]'>
                        <img src={secondImage} className='h-60 w-full object-cover' />
                    </div>
                    <div className='w-[33.3%]'>
                        <img src={thirdImage} className=' h-60 w-full object-cover' />
                    </div>
                    <div className='w-[33.3%]'>
                        <img src={fourthImage} className=' h-60 w-full object-cover' />
                    </div>
                </div>
                <div className='flex items-start justify-between px-16'>
                    <div className='w-[100%] '>
                        <img src={fifthImage} className=' h-60 w-full object-cover' />
                    </div>
                </div>
                <div className='flex items-start justify-between px-16'>
                    <div className='w-[33.3%] '>
                        <img src={sixthImage} className='h-60 w-full object-cover' />
                    </div>
                    <div className='w-[33.3%] '>
                        <img src={seventhImage} className='h-60 w-full object-cover' />
                    </div>
                    <div className='w-[33.3%] '>
                        <img src={eighthImage} className='h-60 w-full object-cover' />
                    </div>
                </div>
                <div className='flex justify-center items-center mt-16'>
                    <button className=" h-8 px-4 py-4 bg-white rounded-[32px] justify-start items-center gap-4 inline-flex mt-10">
                        <div className="text-center text-black text-lg font-normal font-['Jacques Francois']">Book now</div>
                    </button>
                </div>
                <div className=' mt-10'>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default EventHosting
