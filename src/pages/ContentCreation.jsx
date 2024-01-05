import React, {useState} from 'react'
import BackgroundImage from '../assets/images/background-image.jpg'
import NavLinks from '../components/NavLinks'
import firstImage from '../assets/images/content2.png'
import firstIcon from '../assets/images/contentIcon.png'
import secondIcon from '../assets/images/solid.png'
import thirdIcon from '../assets/images/blog.png'
import fourthIcon from '../assets/images/twitter2.png'
import fifthIcon from '../assets/images/facebook.png'
import sixthIcon from '../assets/images/email3.png'
import Footer from '../components/Footer'
import MobileNav from '../components/MobileNav'


const ContentCreation = () => {
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
                <div className='flex items-start justify-between px-16 max-lg:px-10 max-md:px-6 mt-10'>
                    <div className=' w-full '>
                        <div className=" text-white text-[32px] max-sm:text-2xl font-normal font-['Javanese Text']">Content Creation</div>
                        <div className='flex items-center justify-between max-sm:flex-col mt-5'>
                            <div className='w-[48%] max-sm:w-[100%]'>
                                <img src={firstImage} className='h-72 w-full object-cover' />
                            </div>

                            <div className='w-[48%] max-sm:w-[100%]'>
                                <div className=" text-white text-[16px] max-sm:text-sm font-normal font-['Javanese Text'] mt-5">Elevate your event to the next level with our professional Event Host services.
                                    With our expertise in orchestrating the event flow and fostering audience engagement, we guarantee a memorable event that leaves a lasting impression.</div>
                                <div className=" text-white text-[16px] max-sm:text-sm font-normal font-['Javanese Text'] mt-5 max-sm:mt-2">
                                    Elevate your event to the next level with our professional Event Host services. With our expertise in orchestrating the event flow and fostering audience engagement,
                                    we guarantee a memorable event that leaves a lasting impression.</div>
                                    
                            </div>

                        </div>

                    </div>

                </div>
                <div className=" text-center text-white text-[32px] max-md:text-2xl max-sm:text-xl font-normal font-['Javanese Text'] mt-40 max-lg:mt-32 max-md:mt-24 max-sm:mt-18">What Type of Content Do We Create?</div>
                <div className=" text-center text-white text-2xl max-md:text-xl max-sm:text-lg max-xsm:text-base font-medium font-['Inter'] mt-10 max-md:mt-7 max-sm:mt-4 max-md:px-5">Our huge roster of talented writers execute on all types of written content.</div>
                <div className='flex justify-between items-center max-sm:flex-col max-sm:gap-2 mt-10 max-md:mt-7 max-sm:mt-4 px-16 max-lg:px-10 max-md:px-5'>
                    <div className=" bg-neutral-900 h-80 max-sm:h-36  w-[33%] max-sm:w-[100%] flex flex-col justify-center items-start px-5">
            
                        <img src={firstIcon} className='max-sm:w-6 max-md:w-8 max-lg:w-10 max-xsm:w-5' />
                        <div className="text-center text-white text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base max-xsm:text-xs font-bold font-['Inter'] mt-2">Product Descriptions</div>
                        <div className=" text-white text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base max-xsm:text-xs font-normal font-['Inter'] mt-2">Create new product descriptions or have existing ones rewritten to avoid duplicate content penalties from Google.</div>

                    </div>
                    <div className=" bg-neutral-900 h-80 max-sm:h-36 w-[33%] max-sm:w-[100%] flex flex-col justify-center items-start px-5">
                        <img src={secondIcon} className='max-sm:w-6 max-md:w-8 max-lg:w-10 max-xsm:w-5' />
                        <div className="text-center text-white text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base max-xsm:text-xs font-bold font-['Inter'] mt-2">Website Content Creation</div>
                        <div className=" text-white text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base max-xsm:text-xs font-normal font-['Inter'] mt-2">Create new product descriptions or have existing ones rewritten to avoid duplicate content penalties from Google.</div>

                    </div>
                    <div className=" bg-neutral-900 h-80 max-sm:h-36 w-[33%] max-sm:w-[100%] flex flex-col justify-center items-start px-5">
                        <img src={thirdIcon} className='max-sm:w-6 max-md:w-8 max-lg:w-10 max-xsm:w-5' />
                        <div className="text-center text-white text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base max-xsm:text-xs font-bold font-['Inter'] mt-2">Blog Posts</div>
                        <div className=" text-white text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base max-xsm:text-xs font-normal font-['Inter'] mt-2">Create new product descriptions or have existing ones rewritten to avoid duplicate content penalties from Google.</div>

                    </div>

                </div>
                <div className='flex justify-between items-center max-sm:flex-col max-sm:gap-2 mt-10 max-sm:mt-3 px-16 max-lg:px-10 max-md:px-5'>
                    <div className=" bg-neutral-900 h-80 max-sm:h-36 w-[33%] max-sm:w-[100%]  flex flex-col justify-center items-start px-5">
            
                        <img src={fourthIcon} className='max-sm:w-6 max-md:w-8 max-lg:w-10 max-xsm:w-5' />
                        <div className="text-center text-white text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base max-xsm:text-xs font-bold font-['Inter'] mt-2">Tweets</div>
                        <div className=" text-white text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base max-xsm:text-xs font-normal font-['Inter'] mt-2">Create new product descriptions or have existing ones rewritten to avoid duplicate content penalties from Google.</div>

                    </div>
                    <div className=" bg-neutral-900  h-80 max-sm:h-36 w-[33%] max-sm:w-[100%]  flex flex-col justify-center items-start px-5">
                        <img src={fifthIcon} className='max-sm:w-6 max-md:w-8 max-lg:w-10 max-xsm:w-5' />
                        <div className="text-center text-white text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base max-xsm:text-xs font-bold font-['Inter'] mt-2">Facebook Posts</div>
                        <div className=" text-white text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base max-xsm:text-xs font-normal font-['Inter'] mt-2">Create new product descriptions or have existing ones rewritten to avoid duplicate content penalties from Google.</div>

                    </div>
                    <div className=" bg-neutral-900  h-80 max-sm:h-36 w-[33%] max-sm:w-[100%]  flex flex-col justify-center items-start px-5">
                        <img src={sixthIcon} className='max-sm:w-6 max-md:w-8 max-lg:w-10 max-xsm:w-5' />
                        <div className="text-center text-white text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base max-xsm:text-xs font-bold font-['Inter'] mt-2">Newsletters</div>
                        <div className=" text-white text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base max-xsm:text-xs font-normal font-['Inter'] mt-2">Create new product descriptions or have existing ones rewritten to avoid duplicate content penalties from Google.</div>

                    </div>

                </div>
                <div className='flex justify-center items-center mt-16 '>
                    <button className=" h-8 px-4 py-4 bg-white rounded-[32px] justify-start items-center gap-4 inline-flex mt-10">
                        <div className="text-center text-black text-lg   max-md:text-base max-sm:text-xs font-normal font-['Jacques Francois']">Book now</div>
                    </button>
                </div>
                <div className=' mt-10'>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default ContentCreation
