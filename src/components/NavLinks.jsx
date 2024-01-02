import React from 'react'
import { Link } from 'react-router-dom'

const NavLinks = ({setNav}) => {
    return (
        <div className='flex justify-center items-center '>
            <div className=''>

            </div>
            <div className="text-white text-[44px] max-lg:text-[34px] max-md:text-[24px]  font-semibold font-['Jomhuria'] hover:text-[#A9A9A9] md:hidden" onClick={() => setNav(true)}>Menu</div>
            <div className=" px-4 py-6 bg-black bg-opacity-20 justify-between items-center inline-flex xl:w-[80%]  w-[90%] max-md:hidden">
                    <Link to="/podcast"  className="text-center text-white text-xl max-xl:text-base max-lg:text-sm font-normal font-['Poppins']">PODCAST</Link>
                    <Link to="/services" className="text-center text-white text-xl max-xl:text-base max-lg:text-sm font-normal font-['Poppins']">EXPERTISE</Link>
                    <Link to="/services" className="text-center text-white text-xl max-xl:text-base max-lg:text-sm font-normal font-['Poppins']">GALLERY</Link> 
                <Link to="/"   className="text-center text-white text-[32px] max-lg:text-lg font-normal tracking-[0.1em] font-['Poppins']">BJ Baringo <br/>
                 <span className="text-center text-white text-[20px] max-lg:text-base font-normal font-['Poppins'] tracking-[0em]">THE SHOWMAN</span></Link>
                    <Link to="/contact"  className="text-center text-white text-xl max-xl:text-base max-lg:text-sm font-normal font-['Poppins']">CONTACT</Link>
                    <Link to="/newsletter"  className="text-center text-white text-xl max-xl:text-base max-lg:text-sm font-normal font-['Poppins']">NEWSLETTER</Link>
                    <Link to="/newsletter"  className="text-center text-white text-xl max-xl:text-base max-lg:text-sm font-normal font-['Poppins']">BACKYARD RAVE</Link>
            </div>
        </div>
    )
}

export default NavLinks
