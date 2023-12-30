import React from 'react'
import { Link } from 'react-router-dom'

const NavLinks = () => {
    return (
        <div className='flex justify-center items-center '>
            <div className=" px-4 py-6 bg-black bg-opacity-20 justify-between items-center inline-flex w-[80%]">
                {/* <div className="justify-between items-center gap-2 flex w-[40%]"> */}

                    <Link to="/podcast"  className="text-center text-white text-xl font-normal font-['Poppins']">PODCAST</Link>
                    <Link to="/services" className="text-center text-white text-xl font-normal font-['Poppins']">SERVICES</Link>
                    <Link to="/services" className="text-center text-white text-xl font-normal font-['Poppins']">GALLERY</Link>
                {/* </div> */}
                
                <Link to="/"   className="text-center text-white text-[32px] font-normal tracking-[0.1em] font-['Poppins']">BJ Baringo</Link>
                {/* <div className="justify-between items-center gap-4 flex w-[40%]"> */}
                    <Link to="/contact"  className="text-center text-white text-xl font-normal font-['Poppins']">CONTACT</Link>
                    <Link to="/newsletter"  className="text-center text-white text-xl font-normal font-['Poppins']">NEWSLETTER</Link>
                    <Link to="/newsletter"  className="text-center text-white text-xl font-normal font-['Poppins']">BACKYARD RAVE</Link>
                {/* </div> */}
            </div>
        </div>
    )
}

export default NavLinks
