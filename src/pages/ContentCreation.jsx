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
                <div className='flex items-start justify-between px-16 mt-10'>
                    <div className=' w-full '>
                        <div className=" text-white text-[32px] font-normal font-['Javanese Text']">Content Creation</div>
                        <div className='flex items-center justify-between mt-5'>
                            <div className='w-[48%]'>
                                <img src={firstImage} className='h-72 w-full object-cover' />
                            </div>

                            <div className='w-[48%]'>
                                <div className=" text-white text-[16px] font-normal font-['Javanese Text'] mt-5">Elevate your event to the next level with our professional Event Host services.
                                    With our expertise in orchestrating the event flow and fostering audience engagement, we guarantee a memorable event that leaves a lasting impression.</div>
                                <div className=" text-white text-[16px] font-normal font-['Javanese Text'] mt-5">
                                    Elevate your event to the next level with our professional Event Host services. With our expertise in orchestrating the event flow and fostering audience engagement,
                                    we guarantee a memorable event that leaves a lasting impression.</div>
                                    
                            </div>

                        </div>

                    </div>

                </div>
                <div className=" text-center text-white text-[32px] font-normal font-['Javanese Text'] mt-40">What Type of Content Do We Create?</div>
                <div className=" text-center text-white text-2xl font-medium font-['Inter'] mt-10">Our huge roster of talented writers execute on all types of written content.</div>
                <div className='flex justify-between items-center mt-10 px-16'>
                    <div className=" bg-neutral-900 h-80 w-[33%] flex flex-col justify-center items-start px-5">
            
                        <img src={firstIcon} className='' />
                        <div className="text-center text-white text-2xl font-bold font-['Inter'] mt-2">Product Descriptions</div>
                        <div className=" text-white text-2xl font-normal font-['Inter'] mt-2">Create new product descriptions or have existing ones rewritten to avoid duplicate content penalties from Google.</div>

                    </div>
                    <div className=" bg-neutral-900 h-80 w-[33%] flex flex-col justify-center items-start px-5">
                        <img src={secondIcon} className='' />
                        <div className="text-center text-white text-2xl font-bold font-['Inter'] mt-2">Website Content Creation</div>
                        <div className=" text-white text-2xl font-normal font-['Inter'] mt-2">Create new product descriptions or have existing ones rewritten to avoid duplicate content penalties from Google.</div>

                    </div>
                    <div className=" bg-neutral-900 h-80 w-[33%] flex flex-col justify-center items-start px-5">
                        <img src={thirdIcon} className='' />
                        <div className="text-center text-white text-2xl font-bold font-['Inter'] mt-2">Blog Posts</div>
                        <div className=" text-white text-2xl font-normal font-['Inter'] mt-2">Create new product descriptions or have existing ones rewritten to avoid duplicate content penalties from Google.</div>

                    </div>

                </div>
                <div className='flex justify-between items-center mt-10 px-16'>
                    <div className=" bg-neutral-900 h-80 w-[33%] flex flex-col justify-center items-start px-5">
            
                        <img src={fourthIcon} className='' />
                        <div className="text-center text-white text-2xl font-bold font-['Inter'] mt-2">Tweets</div>
                        <div className=" text-white text-2xl font-normal font-['Inter'] mt-2">Create new product descriptions or have existing ones rewritten to avoid duplicate content penalties from Google.</div>

                    </div>
                    <div className=" bg-neutral-900  h-80 w-[33%] flex flex-col justify-center items-start px-5">
                        <img src={fifthIcon} className='' />
                        <div className="text-center text-white text-2xl font-bold font-['Inter'] mt-2">Facebook Posts</div>
                        <div className=" text-white text-2xl font-normal font-['Inter'] mt-2">Create new product descriptions or have existing ones rewritten to avoid duplicate content penalties from Google.</div>

                    </div>
                    <div className=" bg-neutral-900  h-80 w-[33%] flex flex-col justify-center items-start px-5">
                        <img src={sixthIcon} className='' />
                        <div className="text-center text-white text-2xl font-bold font-['Inter'] mt-2">Newsletters</div>
                        <div className=" text-white text-2xl font-normal font-['Inter'] mt-2">Create new product descriptions or have existing ones rewritten to avoid duplicate content penalties from Google.</div>

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

export default ContentCreation
