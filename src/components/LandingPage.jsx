import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

function LandingPage() {
    return (
        <div name="home" className='w-full bg-zinc-900 pt-1 md:px-20 px-4'>
            <div className="text-structure mt-28">
                {["we get you", "customers,", "not just traffic."].map((item, index) => {
                    return <div key={index} className={`uppercase md:text-8xl text-5xl  ${item === "customers," && 'text-yellow-300'}`}>
                        {item}
                    </div>
                })}
            </div>
            <div className='my-6'>
                <h1 className='md:text-xl'>Ready to Elevate your Business! Let's get in Touch,</h1>
                <div className='mt-3 py-3 md:py-2 px-4 w-32 rounded-full border-[1px]'>
                    <a href="https://wa.me/917489347620?text=Hey,%20I'm%20Interested%20in%20your%20Digital%20Marketing%20services!" target='_blank' className='flex items-center'><FaWhatsapp /><span className='text-sm ml-1'>Let's Chat</span></a>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
