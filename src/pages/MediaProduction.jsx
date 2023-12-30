import React from 'react'
import BackgroundImage from '../assets/images/background-image.jpg'
import NavLinks from '../components/NavLinks'
import firstImage from '../assets/images/mediaProduction.png'
import secondImage from '../assets/images/mediaProduction1.png'
import thirdImage from '../assets/images/mediaProduction2.png'
import fourthImage from '../assets/images/mediaProduction3.png'
import fifthImage from '../assets/images/mediaProduction4.png'
import Footer from '../components/Footer'


const MediaProduction = () => {
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
                        <div className=" text-white text-[32px] font-normal font-['Javanese Text']">Media Production</div>
                        <img src={firstImage} className='mt-5 w-full h-96 object-cover' />
                        <div className=" text-white text-[20px] font-normal font-['Javanese Text'] mt-5">Elevate your event to the next level with our professional Event Host services.
                            With our expertise in orchestrating the event flow and fostering audience engagement, we guarantee a memorable event that leaves a lasting impression.</div>

                    </div>

                </div>
                <div className=" text-white text-[32px] font-normal font-['Javanese Text'] px-16 mt-40">Previous works</div>
                <div className='flex items-start justify-between px-16 mt-5'>
                    <div className='w-[50.0%] h-72 hover:cursor-pointer flex hover:bg-blend-multiply hover:bg-gray-500 items-end pb-2 hover:pb-4 justify-center' style={{ backgroundImage: `url(${secondImage})` }}>
                    <div className=" text-white text-2xl font-normal font-['Javanese Text']">Wizkid Concert</div>
                    </div>
                    <div className='w-[50.0%] h-72 hover:cursor-pointer flex hover:bg-blend-multiply hover:bg-gray-500 items-end pb-2 hover:pb-4 justify-center'  style={{ backgroundImage: `url(${thirdImage})` }}>
                    <div className=" text-white text-2xl font-normal font-['Javanese Text']">Pulse Naija</div>
                    </div>
                  
                </div>
                <div className='flex items-start justify-between px-16 mt-5'>
                    <div className='w-[50.0%] h-72 hover:cursor-pointer flex hover:bg-blend-multiply hover:bg-gray-500 items-end pb-2 hover:pb-4 justify-center' style={{ backgroundImage: `url(${fourthImage})` }}>
                    <div className=" text-white text-2xl font-normal font-['Javanese Text']">Wizkid Concert</div>
                    </div>
                    <div className='w-[50.0%] h-72 hover:cursor-pointer flex hover:bg-blend-multiply hover:bg-gray-500 items-end pb-2 hover:pb-4 justify-center'  style={{ backgroundImage: `url(${fifthImage})` }}>
                    <div className=" text-white text-2xl font-normal font-['Javanese Text']">Pulse Naija</div>
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

export default MediaProduction
