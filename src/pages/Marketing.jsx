import React, {useState} from 'react'
import BackgroundImage from '../assets/images/background-image.jpg'
import NavLinks from '../components/NavLinks'
import Footer from '../components/Footer'
import firstImage from '../assets/images/marketing1.png'
import secondImage from '../assets/images/user.png'
import thirdImage from '../assets/images/bulb.png'
import fourthImage from '../assets/images/connect.png'
import fifthImage from '../assets/images/data.png'
import MobileNav from '../components/MobileNav'


const Marketing = () => {
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
                        <div className=" text-white text-[32px] max-sm:text-2xl font-normal font-['Javanese Text']">Marketing & Promotion</div>
                        <img src={firstImage} className='mt-5 w-full' />
                        <div className=" text-white text-[16px] max-sm:text-sm font-normal font-['Javanese Text'] mt-5">Elevate your event to the next level with my professional Event Host services.
                            With my expertise in orchestrating the event flow and fostering audience engagement, I guarantee a memorable event that leaves a lasting impression.</div>
                        <div className=" text-white text-[16px] max-sm:text-sm font-normal font-['Javanese Text'] mt-5 max-sm:mt-2">
                            Elevate your event to the next level with my professional Event Host services. With my expertise in orchestrating the event flow and fostering audience engagement,
                            I guarantee a memorable event that leaves a lasting impression.</div>
                    </div>

                </div>

                <div className=" text-white text-center text-[32px] max-md:text-2xl max-sm:text-xl font-normal font-['Javanese Text'] px-16 mt-24 ">See what’s in it for you.</div>
                <div className='flex items-start justify-between px-16 max-lg:px-10 max-md:px-7 max-sm:px-4 mt-16 '>
                    <div className='w-[48%] '>
                        <div className='w-16 h-16 max-md:w-12 max-md:h-12 max-sm:w-8 max-sm:h-8 rounded-full bg-white items-center flex justify-center'>
                            <img src={secondImage} className='max-sm:w-6 max-md:w-8 max-lg:w-10 max-xsm:w-5' />
                        </div>
                        <div className=" text-white text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base font-normal font-['Inter'] mt-5">Unlock customer-centric measurement.</div>
                        <div className=" text-white text-lg max-lg:text-base max-md:text-sm max-sm:text-xs font-light font-['Inter']">Understand how your customers interact across your sites and apps, throughout their entire lifecycle.</div>

                    </div>
                    <div className='w-[48%] '>
                        <div className='w-16 h-16 max-md:w-12 max-md:h-12 max-sm:w-8 max-sm:h-8 rounded-full  bg-white items-center flex justify-center'>
                            <img src={thirdImage} className='max-sm:w-6 max-md:w-8 max-lg:w-10 max-xsm:w-5' />
                        </div>
                        <div className=" text-white text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base font-normal font-['Inter'] mt-5">Get smarter insights to improve ROI.</div>
                        <div className=" text-white text-lg max-lg:text-base max-md:text-sm max-sm:text-xs font-light font-['Inter']">Uncover new insights and anticipate future customer actions with Google’s machine learning to get more value out of your data.</div>
                    </div>
                </div>
                <div className='flex items-start justify-between px-16 max-lg:px-10 max-md:px-7 max-sm:px-4 mt-24 max-md:16 max-sm:mt-12 '>
                    <div className='w-[48%] '>
                        <div className='w-16 h-16  max-md:w-12 max-md:h-12 max-sm:w-8 max-sm:h-8  rounded-full bg-white items-center flex justify-center'>
                            <img src={fourthImage} className='max-sm:w-6 max-md:w-8 max-lg:w-10 max-xsm:w-5' />
                        </div>
                        <div className=" text-white text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base font-normal font-['Inter'] mt-5">Connect your insights to results.</div>
                        <div className=" text-white text-lg max-lg:text-base max-md:text-sm max-sm:text-xs font-light font-['Inter']">Take action to optimize marketing performance with integrations across Google’s advertising and publisher tools.</div>

                    </div>
                    <div className='w-[48%] '>
                        <div className='w-16 h-16  max-md:w-12 max-md:h-12 max-sm:w-8 max-sm:h-8  rounded-full  bg-white items-center flex justify-center'>
                            <img src={fifthImage} className='max-sm:w-6 max-md:w-8 max-lg:w-10 max-xsm:w-5' />
                        </div>
                        <div className=" text-white text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base font-normal font-['Inter'] mt-5">Make your data work for you.</div>
                        <div className=" text-white text-lg max-lg:text-base max-md:text-sm max-sm:text-xs font-light font-['Inter']">Quickly analyze your data and collaborate with an easy-to-use interface and shareable reports.</div>
                    </div>
                </div>
                <div className='flex justify-center items-center mt-16'>
                    <button className=" h-8 px-4 py-4 bg-white rounded-[32px] justify-start items-center gap-4 inline-flex mt-10">
                        <div className="text-center text-black text-lg  max-md:text-base max-sm:text-xs font-normal font-['Jacques Francois']">Book now</div>
                    </button>
                </div>
                <div className=' mt-10'>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Marketing
