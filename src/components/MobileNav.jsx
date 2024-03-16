import React from 'react'
import { Link } from 'react-router-dom'
import { IoClose } from "react-icons/io5";

const MobileNav = ({setNav}) => {
  return (
   <div className='min-h-screen w-full bg-black bg-opacity-20 flex justify-around items-center flex-col px-5 pt-2 pb-3 '>
    <IoClose className=' w-10 text-white' onClick={() => setNav(false)}/>
    {/* <div className="  justify-between items-end flex flex-col  gap-2 "> */}
            <Link to="/podcast"  className="text-center text-white text-lg  font-normal font-['Poppins']">PODCAST</Link>
            <Link to="/services" className="text-center text-white text-lg  font-normal font-['Poppins']">EXPERTISE</Link>
            <Link to="/gallery" className="text-center text-white text-lg  font-normal font-['Poppins']">GALLERY</Link> 
        <Link to="/"   className="text-center text-white text-[32px] max-lg:text-lg font-normal tracking-[0.1em] font-['Poppins']">BJ Baringo <br/>
         <span className="text-center text-white text-[20px] max-lg:text-lg font-normal font-['Poppins'] tracking-[0em]">THE SHOWMAN</span></Link>
            <Link to="/contact"  className="text-center text-white text-lg  font-normal font-['Poppins']">CONTACT</Link>
            <Link to="/newsletter"  className="text-center text-white text-lg  font-normal font-['Poppins']">NEWSLETTER</Link>
            <Link to="/backyardrave"  className="text-center text-white text-lg  font-normal font-['Poppins']">SHOP</Link>
    {/* </div> */}
    

</div>
    
  )
}

export default MobileNav
