import React, { useState } from 'react'
import '../App.css'
import BackgroundImage from '../assets/images/background-image.jpg'
import HomeIcon from '../assets/images/home-icon.png'
import FirstImage from '../assets/images/money.jpg'
import SecondImage from '../assets/images/problem-solving.jpg'
import ThirdImage from '../assets/images/love.jpg'
import NavLinks from '../components/NavLinks'
import Footer from '../components/Footer'
import MobileNav from '../components/MobileNav'


const HomePage = () => {
  const [nav, setNav] = useState(false)
  return (
    <div className='min-h-screen w-full p-0 relative'>

      <div style={{ backgroundImage: `url(${BackgroundImage})` }}
        className="bg-cover bg-center h-[40rem] w-full max-md:flex max-md:flex-col relative">

        {nav && <div className='w-full h-full flex items-center justify-center absolute'>
          <MobileNav setNav={setNav} />
        </div>}
        {!nav && <div className='lg:pt-10 max-lg:pt-14 max-md:pt-5 max-md:flex max-md:items-center max-md:justify-end max-md:pr-10 '>
          <NavLinks setNav={setNav} />
        </div>}
        <div className='flex items-end justify-center md:hidden flex-1 pb-5'>
          <div className=" text-white text-[32px] font-normal font-['Javanese Text'] text-center">BJ Baringo</div>
        </div>

      </div>
      <div className=" h-[30rem] w-full flex flex-col justify-center items-center bg-black max-md:pt-32 max-sm:pt-40">
        <div><img src={HomeIcon} className='max-md:w-14 max-md:h-14 max-sm:w-10 max-sm:h-10' /></div>
        <div className='flex justify-center items-center'>
          <p className=' text-center text-white mt-10 max-sm:mt-3 max-md:mt-5 px-10 w-[70%] max-sm:w-[100%] leading-8'>
            Hey there! I'm BJ Baringo, and I'm thrilled to welcome you to my Portfolio. I'm a passionate storyteller, a lifelong explorer of ideas, and your host on this audio journey. I've always been captivated by the power of the spoken word and the magic of a well-told story.
            Whether it's diving into fascinating conversations with thought leaders, sharing personal anecdotes, or exploring niche interests, I'm here to make your listening experience enriching and enjoyable.
          </p>
        </div>
      </div>
      <div className=" text-white bg-black text-[32px] max-lg:text-2xl max-md:text-xl  font-normal font-['Poppins'] px-10 max-md:pt-40">Listen to my latest podcasts</div>
      <div className='flex max-sm:flex-col max-sm:gap-4 justify-between items-center bg-black py-10 px-10'>
        <div className='w-[30%] h-60 max-sm:w-[90%] max-sm:mx-auto shadow-2xl  hover:cursor-pointer '>
          <div className=" mb-5 bg-cover h-full  flex hover:bg-blend-multiply hover:bg-gray-500 items-end pb-2 hover:pb-4 justify-center" style={{ backgroundImage: `url(${FirstImage})` }}>
            <div className="text-white text-xl max-lg:text-base  font-semibold text-center font-['Poppins']">The Role of Finance in Relationships</div>
          </div>
        </div>
        <div className='w-[30%] h-60 max-sm:w-[90%] max-sm:mx-auto  shadow-md hover:cursor-pointer   '>
          <div className="  mb-5 bg-cover hover:cursor-pointer  h-full flex hover:bg-blend-multiply items-end pb-2 hover:pb-4 justify-center hover:bg-gray-500" style={{ backgroundImage: `url(${SecondImage})` }}>
            <div className="text-white  text-xl max-lg:text-base  font-semibold text-center font-['Poppins']">Career Change: How to Navigate and Manage the Risks</div>
          </div>
        </div>
        <div className='w-[30%] h-60 max-sm:w-[90%] max-sm:mx-auto shadow-md hover:cursor-pointer   '>
          <div className=" mb-5 bg-cover hover:cursor-pointer h-full flex hover:bg-blend-multiply hover:bg-gray-500 items-end pb-2 hover:pb-4 justify-center" style={{ backgroundImage: `url(${ThirdImage})` }}>
            <div className="text-white text-xl max-lg:text-base  font-semibold  text-center font-['Poppins']">Do You Love Yourself</div>
          </div>
        </div>
      </div>
      <div className='bg-black pt-20'>
        <div className=" text-center text-white text-[32px] max-lg:text-2xl max-md:text-xl  font-normal font-['Poppins'] max-md:px-10 ">Sign up for my Newsletter</div>
        <div className=" text-center text-white text-lg max-lg:text-base max-md:text-sm  font-normal font-['Poppins'] mt-5 max-md:px-10">Sign up here to receive vital weekly messages directly from me.</div>
        <form className='mt-20  flex flex-col justify-center items-center w-full'>
          <input type="text" className=' email-input text-white border-b-[1px] bg-black border-white w-1/2 max-sm:w-3/4  text-xl font-javanese-text text-center' placeholder="Email address" />
          <button className=" h-8 px-4 py-4 bg-white rounded-[32px] justify-start items-center gap-4 inline-flex mt-10">
            <div className="text-center text-black text-lg max-lg:text-base max-md:text-sm  font-normal font-['Jacques Francois']">Sign up for my Newsletter</div>
          </button>
        </form>
        <Footer />


      </div>

    </div>
  )
}

export default HomePage