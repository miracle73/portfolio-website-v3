import React, {useState} from 'react'
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
            {nav && <div className='w-full h-full flex items-center justify-center fixed'>
                <MobileNav setNav={setNav}  />
            </div>} 
            <div style={{ backgroundImage: `url(${BackgroundImage})` }}
                className="bg-cover bg-center h-[15rem] w-full">
                <div className='lg:pt-10 max-lg:pt-14 max-md:pt-5 max-md:flex max-md:items-center max-md:justify-end max-md:pr-10 '>
                    <NavLinks setNav={setNav}  />
                </div>

            </div>
            <div className="  w-full flex flex-col pt-10 bg-black ">
                <div className='flex items-start justify-between px-16 max-lg:px-10 max-md:px-7 max-sm:px-4 mt-10 '>
                    <div className=' w-full '>
                        <div className=" text-white text-[32px] max-sm:text-2xl font-normal font-['Javanese Text']">Media Production</div>
                        <img src={firstImage} className='mt-5 w-full h-96 max-lg:h-86 max-md:72 max-sm:h-64 object-cover' />
                        <div className=" text-white text-[20px] max-sm:text-sm font-normal font-['Javanese Text'] mt-5">Elevate your event to the next level with our professional Event Host services.
                            With our expertise in orchestrating the event flow and fostering audience engagement, we guarantee a memorable event that leaves a lasting impression.</div>

                    </div>

                </div>
                <div className=" text-white text-[32px] max-sm:text-2xl font-normal font-['Javanese Text'] px-16 max-lg:px-10 max-md:px-7 max-sm:px-4 mt-40 max-lg:mt-32 max-md:mt-24 max-sm:scroll-mt-16">Previous works</div>
                <div className='flex items-start justify-between px-16 max-lg:px-10 max-md:px-7 max-sm:px-4 mt-5'>
                    <div className='w-[50.0%] h-72 hover:cursor-pointer flex hover:bg-blend-multiply hover:bg-gray-500 items-end pb-2 hover:pb-4 justify-center' style={{ backgroundImage: `url(${secondImage})` }}>
                    <div className=" text-white text-2xl max-md:text-xl max-sm:text-lg font-normal font-['Javanese Text']">Wizkid Concert</div>
                    </div>
                    <div className='w-[50.0%] h-72 hover:cursor-pointer flex hover:bg-blend-multiply hover:bg-gray-500 items-end pb-2 hover:pb-4 justify-center'  style={{ backgroundImage: `url(${thirdImage})` }}>
                    <div className=" text-white text-2xl max-md:text-xl max-sm:text-lg  font-normal font-['Javanese Text']">Pulse Naija</div>
                    </div>
                  
                </div>
                <div className='flex items-start justify-between px-16 max-lg:px-10 max-md:px-7 max-sm:px-4 mt-5'>
                    <div className='w-[50.0%] h-72 hover:cursor-pointer flex hover:bg-blend-multiply hover:bg-gray-500 items-end pb-2 hover:pb-4 justify-center' style={{ backgroundImage: `url(${fourthImage})` }}>
                    <div className=" text-white text-2xl max-md:text-xl max-sm:text-lg  font-normal font-['Javanese Text']">Wizkid Concert</div>
                    </div>
                    <div className='w-[50.0%] h-72 hover:cursor-pointer flex hover:bg-blend-multiply hover:bg-gray-500 items-end pb-2 hover:pb-4 justify-center'  style={{ backgroundImage: `url(${fifthImage})` }}>
                    <div className=" text-white text-2xl max-md:text-xl max-sm:text-lg  font-normal font-['Javanese Text']">Pulse Naija</div>
                    </div>
                  
                </div>
                <div className='flex justify-center items-center mt-16'>
                    <button className=" h-8 px-4 py-4 bg-white rounded-[32px] justify-start items-center gap-4 inline-flex mt-10">
                        <div className="text-center text-black text-lg max-md:text-base max-sm:text-xs font-normal font-['Jacques Francois']">Book now</div>
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
