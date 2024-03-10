import React, { useState } from 'react'
import '../App.css'
import BackgroundImage from '../assets/images/background-image.jpg'
import FirstImage from '../assets/images/BJ11.jpeg'
import SecondImage from '../assets/images/BJ12.jpeg'
import NavLinks from '../components/NavLinks'
import Footer from '../components/Footer'
import MobileNav from '../components/MobileNav'
import { Link } from 'react-router-dom'

const Newsletter = () => {
    const [nav, setNav] = useState(false)
    return (
        <div className='min-h-screen w-full p-0'>
            {nav && <div className='fixed w-full flex items-center justify-center z-10 bg-black'>
                <MobileNav setNav={setNav} />
            </div>}
            <div style={{ backgroundImage: `url(${BackgroundImage})` }}
                className="bg-cover bg-center h-[15rem] w-full relative">
           
                {!nav && <div className='lg:pt-10 max-lg:pt-14 max-md:pt-5 max-md:flex max-md:items-center max-md:justify-end max-md:pr-10 '>
                    <NavLinks setNav={setNav} />
                </div>}

            </div>
            <div className="  w-full flex flex-col pt-10 bg-black ">
                <div className=" text-center text-white text-[32px] max-lg:text-[28px] max-md:text-[24px] max-sm:text-[20px] font-normal font-['Poppins'] ">Newsletter</div>
                <div className=" text-center text-white text-lg max-lg:text-base max-md:text-sm font-normal font-['Poppins'] max-md:px-5 mt-5">Click on  these links below to read my newsletters and directly receive them in your mailbox.
                </div>
                <div className='  my-10 w-full'>
                    <div className='flex items-center gap-12 max-sm:flex-col max-sm:gap-2 justify-center max-sm:mx-0 mx-10'>
                        <Link to='https://opinionsandwhatever.substack.com' target='_blank' className='w-[45%]  h-full   max-sm:w-[80%] max-sm:mx-auto shadow-md  '>
                            <div style={{ backgroundImage: `url(${FirstImage})` }} className=" bg-cover hover:cursor-pointer h-56 flex ">
                            </div>
                            <div className='flex items-center justify-center  hover:cursor-pointer h-10 bg-white ' >
                                <div className="text-black hover:text-[#D6D6D6] text-sm font-semibold   text-center uppercase">Opinions & Whatever!</div>
                            </div>
                        </Link>
                        <Link to="https://marketingmentions.substack.com" target='_blank' className='w-[45%]  h-full max-sm:w-[80%] max-sm:mx-auto  shadow-md '>
                            <div style={{ backgroundImage: `url(${SecondImage})` }} className="  bg-cover hover:cursor-pointer  h-56 flex ">
                            </div>
                            <div className='flex items-center justify-center h-10 hover:cursor-pointer bg-white ' >
                                <div className="text-black hover:text-[#D6D6D6]  text-sm font-semibold text-center uppercase">Marketing Mentions Africa Cool </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className=' pt-32 max-sm:pt-24 '>


                    <Footer />


                </div>
            </div>
        </div>
    )
}

export default Newsletter
