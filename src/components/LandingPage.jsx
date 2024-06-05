import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { IoMdCall } from "react-icons/io";

function LandingPage() {
    const textVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay:0.15+ i * 0.3, // delay based on the index
            },
        }),
    };

    return (
        <div name="home" className='w-full md:h-screen bg-zinc-900 pt-1 md:px-20 px-4'>
            <div className="text-structure mt-36 uppercase md:text-7xl text-5xl">
                {['we get you', 'customers,', 'not just traffic.'].map((text, i) => (
                    <motion.div
                        key={i}
                        custom={i}
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                    >
                        <div className={i === 1 ? 'text-yellow-300' : ''}>{text}</div>
                    </motion.div>
                ))}
            </div>
            <div className='my-8'>
                <h1 className='md:text-xl'>Ready to Elevate your Business! Let's get in Touch,</h1>
                <div className='flex space-x-2'>
                    <div className='mt-3 py-3 md:py-2 px-3 w-30 rounded-full border-[1px] hover:bg-zinc-700 duration-300'>
                        <a
                            href="https://wa.me/917803991500?text=Hey,%20I'm%20Interested%20in%20your%20Digital%20Marketing%20services!"
                            target='_blank'
                            className='flex items-center'
                        >
                            <FaWhatsapp size={18} />
                            <span className='text-sm ml-1'>Let's Chat</span>
                        </a>
                    </div>
                    <div className='mt-3 py-3 md:py-2 px-4 w-28 rounded-full border-[1px] flex items-center hover:bg-zinc-700 duration-300'>
                        <IoMdCall size={20} />
                        <a href="tel:+917803991500" className='ml-1 text-sm text-white'>Call Us</a>
                    </div>
                </div>
                </div>
        </div>
    );
}

export default LandingPage;