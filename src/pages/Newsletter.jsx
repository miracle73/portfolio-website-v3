import React, {useState} from 'react'
import '../App.css'
import BackgroundImage from '../assets/images/background-image.jpg'
import FirstImage from '../assets/images/newsletter1.png'
import SecondImage from '../assets/images/newsletter2.png'
import ThirdImage from '../assets/images/newsletter3.png'
import NavLinks from '../components/NavLinks'
import Footer from '../components/Footer'
import MobileNav from '../components/MobileNav'

const Newsletter = () => {
    const [nav, setNav] = useState(false)
    return (
        <div className='min-h-screen w-full p-0'>
            {nav && <div className='w-full h-full flex items-center justify-center fixed'>
                <MobileNav setNav={setNav}  />
            </div>} 
            <div style={{ backgroundImage: `url(${BackgroundImage})` }}
                className="bg-cover bg-center h-[15rem] w-full">
                <div className='lg:pt-10 max-lg:pt-14 max-md:pt-5 max-md:flex max-md:items-center max-md:justify-end max-md:pr-10'>
                    <NavLinks setNav={setNav} />
                </div>

            </div>
            <div className="  w-full flex flex-col pt-10 bg-black ">
                <div className="text-white text-[32px] font-semibold font-['Javanese Text'] max-sm:mx-2 mx-10 mt-16">Newsletter</div>
                <div className="mt-3 text-white text-base font-normal font-['Inter'] max-sm:mx-2 mx-10">A curated collection of 20 newsletters websites for inspiration and references. Each review includes a full screenshot of the website design along with noteworthy features. These landing pages promote email newsletters and most likely feature an embedded news</div>
                <div className='  my-10 w-full'>
                    <div className='flex items-center max-sm:flex-col justify-between max-sm:mx-2 mx-10'>
                        <div className='w-[30%] max-sm:border-2 h-full   max-sm:w-[90%] max-sm:mx-auto shadow-md  border border-white'>
                            <div style={{ backgroundImage: `url(${FirstImage})` }} className=" bg-cover hover:cursor-pointer h-56 flex ">
                            </div>
                            <div className='flex items-center justify-center  hover:cursor-pointer py-2 ' >
                                <div className="text-white hover:text-[#D6D6D6] text-sm font-semibold   text-center uppercase">Everything u need to know about design</div>
                            </div>
                        </div>
                        <div className='w-[30%] max-sm:border-2 h-full max-sm:w-[90%] max-sm:mx-auto shadow-md border border-white'>
                            <div style={{ backgroundImage: `url(${SecondImage})` }} className="  bg-cover hover:cursor-pointer  h-56 flex ">
                            </div>
                            <div className='flex items-center justify-center py-2 hover:cursor-pointer ' >
                                <div className="text-white hover:text-[#D6D6D6]  text-sm font-semibold text-center uppercase">People and Blogs</div>
                            </div>
                        </div>
                        <div className='w-[30%] max-sm:border-2 max-sm:w-[90%] max-sm:mx-auto h-full shadow-md border border-white'>
                            <div style={{ backgroundImage: `url(${ThirdImage})` }} className=" bg-cover hover:cursor-pointer h-56 flex ">
                            </div>
                            <div className='flex items-center justify-center  py-2  hover:cursor-pointer ' >
                                <div className="text-white hover:text-[#D6D6D6] text-sm  font-semibold  text-center uppercase">Your design inspiration</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' pt-32 '>
                    <div className=" text-center text-white text-[32px] font-normal font-['Poppins'] ">Sign up for my Newsletter</div>
                    <div className=" text-center text-white text-lg font-normal font-['Poppins'] mt-5">Sign up here to receive vital weekly messages directly from me.
                     </div>
                    <form className='mt-20  flex flex-col justify-center items-center w-full'>
                        <input type="text" className=' email-input text-white border-b-[1px] bg-black border-white w-1/2  text-xl font-javanese-text text-center' placeholder="Email address" />
                        <button className=" h-8 px-4 py-4 bg-white rounded-[32px] justify-start items-center gap-4 inline-flex mt-10">
                            <div className="text-center text-black text-lg font-normal font-['Jacques Francois']">Sign up for my Newsletter</div>
                        </button>
                    </form>
                    <Footer />


                </div>
            </div>
        </div>
    )
}

export default Newsletter
