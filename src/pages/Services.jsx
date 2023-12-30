import React from 'react'
import BackgroundImage from '../assets/images/background-image.jpg'
import NavLinks from '../components/NavLinks'
import firstImage from '../assets/images/eventHosting.png'
import secondImage from '../assets/images/contentCreation.png'
import thirdImage from '../assets/images/marketingPromotion.png'
import fourthImage from '../assets/images/mediaProduction.png'
import firstTestimonial from '../assets/images/firstTestimonial.png'
import secondTestimonial from '../assets/images/secondTestimonial.png'
import thirdTestimonial from '../assets/images/thirdTestimonial.png'
import fourthTestimonial from '../assets/images/fourthTestimonial.png'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { FaStar } from "react-icons/fa";

const Services = () => {
    return (
        <div className='min-h-screen w-full p-0'>
            <div style={{ backgroundImage: `url(${BackgroundImage})` }}
                className="bg-cover bg-center h-[15rem] w-full">
                <div className='pt-20'>
                    <NavLinks />
                </div>

            </div>
            <div className="  w-full flex flex-col pt-10 bg-black ">
                <div className="text-center text-white text-[32px] font-semibold font-['Poppins']">Explore our Services</div>
                <div className='flex items-start justify-between px-16 mt-10 '>
                    <div className='w-[45%] '>
                        <Link to="/events" className=" text-white text-[24px] font-normal font-['Javanese Text']">Event Hosting</Link>
                        <img src={firstImage} className='mt-5' />
                        <div className=" text-white text-[16px] font-normal font-['Javanese Text'] mt-5">Elevate your event to the next level with our professional Event Host services. With our expertise in orchestrating the event flow and fostering audience engagement, we guarantee a memorable event that leaves a lasting impression.</div>
                    </div>
                    <div className='w-[45%] '>
                        <Link to="/" className=" text-white text-[24px] font-normal font-['Javanese Text']">Content Creation</Link>
                        <img src={secondImage} className='mt-5' />
                        <div className=" text-white text-[16px] font-normal font-['Javanese Text'] mt-5">Need help with brainstorming and creating compelling content? We offer content strategy and scriptwriting services to keep your audience engaged.</div>
                    </div>
                </div>
                <div className='flex items-start justify-between px-16 mt-14 '>
                    <div className='w-[45%] '>
                        <Link to="/marketing" className=" text-white text-[24px] font-normal font-['Javanese Text']">Marketing & Promotion</Link>
                        <img src={thirdImage} className='mt-5' />
                        <div className=" text-white text-[16px] font-normal font-['Javanese Text'] mt-5">Expand the reach of your business and services with our marketing and promotion services, including social media campaigns and audience growth strategies.</div>
                    </div>
                    <div className='w-[45%] '>
                        <Link to="/" className=" text-white text-[24px] font-normal font-['Javanese Text']">Media Production</Link>
                        <img src={fourthImage} className='mt-5' />
                        <div className=" text-white text-[16px] font-normal font-['Javanese Text'] mt-5">Elevate the quality and impact of your services with our media production services. We provide all the required resources to give your business that unique brans that resonates with your target audience</div>
                    </div>
                </div>
                <div className="mt-24 text-white text-[32px] font-normal font-['Poppins'] text-center">What Others Are Saying...</div>
                <div className='flex items-center justify-around flex-wrap'>
                    <div className="w-[20%] max-md:w-[40%] max-xsm:w-[46%] max-xsm:h-fit max-xsm:p-2 max-lg:h-[24rem] max-md:h-64 max-sm:h-[21rem] px-4 py-2 bg-white rounded-2xl border border-slate-300 justify-center items-center inline-flex my-10">
                        <div className=" flex-col justify-start items-start gap-2 inline-flex">
                            <div className='flex items-start w-full justify-between'>
                                <div className="self-stretch flex-col justify-center items-start gap-1 flex">
                                    <img className="w-[60px] h-[60px] rounded-[50px]" src={firstTestimonial} />
                                    <div className="self-stretch text-black text-base font-semibold ">Floyd Miles</div>
                                </div>
                                <div className='flex items-start mt-5 justify-between'>
                                <FaStar className='text-[#F7A301]'/>
                                <FaStar className='text-[#F7A301]'/>
                                <FaStar className='text-[#F7A301]'/>
                            

                                </div>
                            </div>
                            <div className="self-stretch text-neutral-500 text-sm font-normal ">I've been podcasting for years, and working with this podcast services team has truly been a game-changer.  I can't recommend them enough. If you're serious about your podcast, these folks are the ones to turn to.</div>
                        </div>
                    </div>
                    <div className="w-[20%] max-md:w-[40%] max-xsm:w-[46%] max-xsm:h-fit max-xsm:p-2   max-lg:h-[24rem] max-md:h-64 max-sm:h-[21rem] px-4 py-2 bg-white rounded-2xl border border-slate-300 justify-center items-center inline-flex">
                        <div className=" flex-col justify-start items-start gap-2 inline-flex">
                            <div className='flex items-start justify-between w-full'>
                                <div className="self-stretch flex-col justify-center items-start gap-1 flex">
                                    <img className="w-[60px] h-[60px] rounded-[50px]" src={secondTestimonial} />
                                    <div className="self-stretch text-black text-base font-semibold ">Ronald Richards</div>
                                </div>
                                <div className='flex items-start mt-5 justify-between'>
                                <FaStar className='text-[#F7A301]'/>
                                <FaStar className='text-[#F7A301]'/>
                                <FaStar className='text-[#F7A301]'/>
                                <FaStar className='text-[#F7A301]'/>
                            

                                </div>
                            </div>
                            <div className="self-stretch text-neutral-500 text-sm font-normal ">I've been podcasting for years, and working with this podcast services team has truly been a game-changer.  I can't recommend them enough. If you're serious about your podcast, these folks are the ones to turn to.</div>
                        </div>
                    </div>
                    <div className="w-[20%] max-md:w-[40%] max-xsm:w-[46%] max-xsm:h-fit max-xsm:p-2  max-lg:h-[24rem] max-md:h-64 max-sm:h-[21rem] px-4 py-2 bg-white rounded-2xl border border-slate-300 justify-center items-center inline-flex">
                        <div className=" flex-col justify-start items-start gap-2 inline-flex">
                            <div className='flex items-start w-full justify-between'>
                                <div className="self-stretch flex-col justify-center items-start gap-1 flex">
                                    <img className="w-[60px] h-[60px] rounded-[50px]" src={thirdTestimonial} />
                                    <div className="self-stretch text-black text-base font-semibold ">Savannah Nguyen</div>
                                </div>
                                <div className='flex items-start mt-5  justify-between'>
                                <FaStar className='text-[#F7A301]'/>
                                <FaStar className='text-[#F7A301]'/>
                                <FaStar className='text-[#F7A301]'/>
                            

                                </div>
                            </div>
                            <div className="self-stretch text-neutral-500 text-sm font-normal ">I've been podcasting for years, and working with this podcast services team has truly been a game-changer.  I can't recommend them enough. If you're serious about your podcast, these folks are the ones to turn to.</div>
                        </div>
                    </div>
                    <div className="w-[20%] max-md:w-[40%] max-xsm:w-[46%]  max-xsm:h-fit max-xsm:p-2  max-lg:h-[24rem] max-md:h-64 max-sm:h-[21rem] px-4 py-2 bg-white rounded-2xl border border-slate-300 justify-center items-center inline-flex">
                        <div className=" flex-col justify-start items-start gap-2 inline-flex">
                            <div className='flex items-start w-full justify-between'>
                                <div className="self-stretch flex-col justify-center items-start gap-1 flex ">
                                    <img className="w-[60px] h-[60px] rounded-[50px]" src={fourthTestimonial} />
                                    <div className="self-stretch text-black text-base font-semibold ">Babalawo Iguana</div>
                                </div>
                                <div className='flex items-start mt-5 justify-between'>
                                <FaStar className='text-[#F7A301]'/>
                                <FaStar className='text-[#F7A301]'/>
                                
                            

                                </div>
                            </div>
                            <div className="self-stretch text-neutral-500 text-sm font-normal  ">I've been podcasting for years, and working with this podcast services team has truly been a game-changer.  I can't recommend them enough. If you're serious about your podcast, these folks are the ones to turn to.</div>
                        </div>
                    </div>
                </div>
                <div className=' '>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Services
