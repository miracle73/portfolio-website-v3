import React from 'react'

const NavLinks = () => {
    return (
        <div className='flex justify-center items-center '>
            <div className=" px-10 py-6 bg-black bg-opacity-20 justify-between items-center inline-flex w-[70%]">
                <div className="justify-between items-center gap-4 flex w-[30%]">
                    <div className="text-center text-white text-xl font-normal font-['Poppins']">PODCAST</div>
                    <div className="text-center text-white text-xl font-normal font-['Poppins']">SERVICES</div>
                </div>
                <div className="text-center text-white text-[32px] font-normal tracking-[0.1em] font-['Poppins']">BJ Baringo</div>
                <div className="justify-between items-center gap-4 flex w-[30%]">
                    <div className="text-center text-white text-xl font-normal font-['Poppins']">ABOUT</div>
                    <div className="text-center text-white text-xl font-normal font-['Poppins']">NEWSLETTER</div>
                </div>
            </div>
        </div>
    )
}

export default NavLinks
