import React from 'react'
import { BiLogoFacebook } from 'react-icons/bi'
import { AiOutlineInstagram } from 'react-icons/ai'
import { RiTwitterXFill } from 'react-icons/ri'

const Footer = () => {
  return (
    <div>
      <div className='flex justify-center items-center mt-20'>
          <div className='inline-flex justify-center items-center w-1/3 gap-4 text-white'>
            <div>
              <BiLogoFacebook />
            </div>
            <div>
              < AiOutlineInstagram />
            </div>
            <div>
              < RiTwitterXFill />
            </div>
          </div>
        </div>

        <div className="text-white text-sm text-center  font-normal font-['Poppins'] mt-5 pb-10">© 2023 BJ Baringo</div>
    </div>
  )
}

export default Footer
