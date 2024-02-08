import React from 'react'
import { BiLogoFacebook } from 'react-icons/bi'
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineInstagram } from 'react-icons/ai'
import { RiTwitterXFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className='flex justify-center items-center mt-20'>
          <div className='inline-flex justify-center items-center w-1/3 gap-4 text-white'>
            <Link to="https://www.facebook.com/originalshowman" target='_blank'>
              <BiLogoFacebook />
            </Link>
            <Link to="https://www.instagram.com/theoriginalshowman/" target='_blank'>
              < AiOutlineInstagram />
            </Link>
            <Link to="https://twitter.com/OriginalShowman" target='_blank'>
              < RiTwitterXFill />
            </Link>
            <Link to="https://www.linkedin.com/in/bjbarango/" target='_blank'>
            <FaLinkedin />
            </Link>
          </div>
        </div>

        <div className="text-white text-sm text-center  font-normal font-['Poppins'] mt-5 pb-10">© 2023 BJ Baringo</div>
    </div>
  )
}

export default Footer
