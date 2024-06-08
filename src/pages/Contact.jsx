import React, { useState } from 'react'
import BackgroundImage from '../assets/images/back3.png'
import NavLinks from '../components/NavLinks'
import '../App.css'
import Phone from '../assets/images/phone.png'
import Footer from '../components/Footer'
import MobileNav from '../components/MobileNav'

const Contact = () => {
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
            <div className="  w-full flex flex-col pt-10 bg-black">
                <div className='flex justify-center items-center'>
                    <img src={Phone} className='max-sm:w-10 max-sm:h-10 max-md:w-14 max-md:h-14' />
                </div>
                <div className='px-20 pb-16 max-lg:px-14 max-md:px-10'>
                    <div className="text-white text-[32px] max-lg:text-2xl max-md:text-xl font-normal font-['Poppins'] mt-20 max-md:mt-16">Let's Connect and Create Something Extraordinary!</div>
                    <div className="text-white text-lg max-lg:text-base max-md:text-sm font-normal font-['Inter'] mt-2">Thank you for considering BJ Baringo for your upcoming event, project, or collaboration. I'am excited to hear from you and turn your ideas into reality. Contact me using the information below or fill out the form to get started.</div>
                    <div className=" text-white text-[24px] max-lg:text-xl max-md:text-lg font-semibold font-['Jacques Francois'] mt-5">Phone</div>
                    <div className=" text-white text-lg max-lg:text-base max-md:text-sm font-normal font-['Inter'] mt-2">+2348118794450</div>
                    <div className=" text-white text-[24px] max-lg:text-xl max-md:text-lg font-semibold font-['Jacques Francois'] mt-5">Email</div>
                    <div className=" text-white text-lg max-lg:text-base max-md:text-sm font-normal font-['Inter'] mt-2">hello.bjbarango@gmail.com</div>
                    <div className=" text-white text-[24px] max-lg:text-xl max-md:text-lg  font-semibold font-['Jacques Francois'] mt-5">Business Hours</div>
                    <div className=" text-white text-lg max-lg:text-base max-md:text-sm font-normal font-['Inter'] mt-2">Monday - Friday: 9:00 AM - 6:00 PM</div>
                    <div className=" text-white text-lg max-lg:text-base max-md:text-sm  font-normal font-['Inter'] mt-2">Saturday: 10:00 AM - 4:00 PM</div>
                    <div className=" text-white text-lg max-lg:text-base max-md:text-sm font-normal font-['Inter'] mt-2">Sunday: Closed</div>
                </div>
                <div className='border-b border-white flex justify-center items-center '>
                    <div className=' w-2/3 mb-8 '>

                        <div className=" text-center text-white text-[18px] max-lg:text-base max-md:text-sm mt-5 font-normal font-['Inter']">Have a specific inquiry or want to discuss your project in detail? Fill out the form below, and I'll get back to you as soon as possible.</div>
                        <form className='mt-5 flex flex-col justify-center items-center w-full'>
                            <a href='https://docs.google.com/forms/d/e/1FAIpQLScDVKjfqj6Vg3B1Tgg8mvEEX1ewuNSbLu3ADP2TYFp8E0LRjA/viewform?usp=sf_link' target='_blank' className=" h-8 max-md:h-12 px-4 py-6 bg-white rounded-[32px] justify-start items-center gap-4 inline-flex mt-10">
                                <p className="text-center text-black text-lg max-lg:text-base max-md:text-sm font-normal font-['Jacques Francois']">Send me a message</p>
                            </a>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Contact;
