import React from 'react'
import '../App.css'
import BackgroundImage from '../assets/images/background-image.jpg'
import HomeIcon from '../assets/images/home-icon.png'
import FirstImage from '../assets/images/money.jpg'
import SecondImage from '../assets/images/problem-solving.jpg'
import ThirdImage from '../assets/images/love.jpg'
import { BiLogoFacebook } from 'react-icons/bi'
import { AiOutlineInstagram } from 'react-icons/ai'
import { RiTwitterXFill } from 'react-icons/ri'

const HomePage = () => {
  return (
    <div className='min-h-screen w-full p-0'>

      <div style={{ backgroundImage: `url(${BackgroundImage})` }}
        className="bg-cover bg-center h-[40rem] w-full">
        <p>Are you okay</p>
      </div>
      <div className=" h-[30rem] w-full flex flex-col justify-center items-center bg-black">
        <div><img src={HomeIcon} /></div>
        <p className=' text-center text-white mt-10 px-10'>
          Hey there! I'm BJ Baringo, and I'm thrilled to welcome you to my Portfolio. I'm a passionate storyteller, a lifelong explorer of ideas, and your host on this audio journey. I've always been captivated by the power of the spoken word and the magic of a well-told story.
          Whether it's diving into fascinating conversations with thought leaders, sharing personal anecdotes, or exploring niche interests, I'm here to make your listening experience enriching and enjoyable.
        </p>
      </div>
      <div className=" text-white bg-black text-[32px] font-normal font-['Poppins'] px-10">Listen to my latest podcasts</div>
      <div className='flex max-sm:flex-col justify-between items-center bg-black py-10 px-10'>
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
        <div className=" text-center text-white text-[32px] font-normal font-['Poppins'] ">Sign up for my Newsletter</div>
        <div className=" text-center text-white text-lg font-normal font-['Poppins'] mt-5">Sign up here to receive vital weekly messages directly from me.</div>
        <form className='mt-20  flex flex-col justify-center items-center w-full'>
          <input type="text" className=' email-input text-white border-b-[1px] bg-black border-white w-1/2' placeholder="Email address" />
          <button className=" h-8 px-4 py-4 bg-white rounded-[32px] justify-start items-center gap-4 inline-flex mt-10">
            <div className="text-center text-black text-lg font-normal font-['Jacques Francois']">Sign up for my Newsletter</div>
          </button>
        </form>
        <div className='flex justify-center items-center mt-20'>
          <div className='inline-flex justify-center items-center w-1/3 gap-4 text-white'>
            <div>
              <BiLogoFacebook />
            </div>
            <div>
              < AiOutlineInstagram />
            </div>

            {/* < FaXTwitter /> */}
            <div>
              < RiTwitterXFill />
            </div>


          </div>
        </div>

        <div className="text-white text-sm text-center  font-normal font-['Poppins'] mt-5">© 2023 BJ Baringo</div>


      </div>

    </div>
  )
}

export default HomePage