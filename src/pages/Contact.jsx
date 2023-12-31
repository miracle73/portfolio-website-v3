import React from 'react'
import BackgroundImage from '../assets/images/background-image.jpg'
import NavLinks from '../components/NavLinks'
import '../App.css'
import Phone from '../assets/images/phone.png'
import Footer from '../components/Footer'

const Contact = () => {
    return (
        <div className='min-h-screen w-full p-0'>
            <div style={{ backgroundImage: `url(${BackgroundImage})` }}
                className="bg-cover bg-center h-[15rem] w-full">
                <div className='lg:pt-10 max-lg:pt-14 max-md:pt-5 max-md:flex max-md:items-center max-md:justify-end max-md:pr-10 '>
                    <NavLinks />
                </div>

            </div>
            <div className="  w-full flex flex-col pt-10 bg-black">
                <div className='flex justify-center items-center'>
                    <img src={Phone} className='max-sm:w-10 max-sm:h-10 max-md:w-14 max-md:h-14' />
                </div>
                <div className='px-20 pb-16'>
                    <div className="text-white text-[32px] max-md:text-2xl font-normal font-['Poppins'] mt-20 max-md:mt-16">Let's Connect and Create Something Extraordinary!</div>
                    <div className="text-white text-lg font-normal font-['Inter'] mt-2">Thank you for considering BJ Baringo for your upcoming event, project, or collaboration. I'am excited to hear from you and turn your ideas into reality. Contact me using the information below or fill out the form to get started.</div>
                    <div className=" text-white text-[24px]  font-['Jacques Francois'] font-semibold mt-5">Address</div>
                    <div className="text-white text-lg font-normal font-['Inter'] mt-2">14 Peter Kings road, Edjeba, Warri, Delta State.</div>
                    <div className=" text-white text-[24px] font-semibold font-['Jacques Francois'] mt-5">Phone</div>
                    <div className=" text-white text-lg font-normal font-['Inter'] mt-2">08131014376</div>
                    <div className=" text-white text-[24px] font-semibold font-['Jacques Francois'] mt-5">Email</div>
                    <div className=" text-white text-lg font-normal font-['Inter'] mt-2">marysokoh4@gmail.com</div>
                    <div className=" text-white text-[24px] font-semibold font-['Jacques Francois'] mt-5">Business Hours</div>
                    <div className=" text-white text-lg font-normal font-['Inter'] mt-2">Monday - Friday: 9:00 AM - 6:00 PM</div>
                    <div className=" text-white text-lg font-normal font-['Inter'] mt-2">Saturday: 10:00 AM - 4:00 PM</div>
                    <div className=" text-white text-lg font-normal font-['Inter'] mt-2">Sunday: Closed</div>
                </div>
                <div className='border-y border-white '>
                    <div className='ml-56 max-lg:ml-36 max-md:ml-20 max-sm:ml-14 mr-10 w-2/3 my-16 '>
                        <div className="text-center text-white text-[32px] font-normal font-['Javanese Text']">Send us a Message</div>
                        <div className=" text-center text-white text-[18px] mt-5 font-normal font-['Inter']">Have a specific inquiry or want to discuss your project in detail? Fill out the form below, and we'll get back to you as soon as possible.</div>
                        <form className='mt-5 flex flex-col justify-center items-center w-full'>
                            <input type="text" className=' email-input text-white border-b-[1px] bg-black border-white w-full   text-xl font-javanese-text text-center mt-10' placeholder="Name" />
                            <input type="text" className=' email-input text-white border-b-[1px] bg-black border-white w-full   text-xl font-javanese-text text-center mt-10' placeholder="Email address" />
                            <input type="text" className=' email-input text-white border-b-[1px] bg-black border-white w-full  text-xl font-javanese-text text-center mt-10' placeholder="Message" />
                            <button className=" h-8 max-md:h-12 px-4 py-4 bg-white rounded-[32px] justify-start items-center gap-4 inline-flex mt-10">
                                <div className="text-center text-black text-lg font-normal font-['Jacques Francois']">Sign up for my Newsletter</div>
                            </button>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Contact
