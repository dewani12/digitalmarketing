import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { IoMdCall } from "react-icons/io";
import highlight from '/highlight.png'

function LandingPage() {
    const textVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay:0.15+ i * 0.3, 
            },
        }),
    };

    return (
        <div name="home" className='w-full md:h-screen pt-1 md:px-16 px-4 bg-zinc-900 flex flex-col md:flex-row md:space-x-5'>
            <div className='mt-32 md:mt-40'>
            <div className="text-structure uppercase md:text-5xl text-4xl">
                {['expert digital', 'marketing solutons', 'for your success.'].map((text, i) => (
                    <motion.div
                        key={i}
                        custom={i}
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                    >
                        <div className={i === 1 ? 'text-[#3ABEF9]' : ''}>{text}</div>
                    </motion.div>
                ))}
            </div>
            <div className='py-8'>
                <h1 className=''>Boost Your Business with Proven Strategies! </h1>
                <p>Get a Free Consultation,</p>
                <div className='flex space-x-2'>
                    <div className='mt-3 py-3 md:py-2 px-3 w-30 rounded-full border-[1.2px] hover:bg-zinc-700 duration-300'>
                        <a
                            href="https://wa.me/917803991500?text=Hey,%20I'm%20Interested%20in%20your%20Digital%20Marketing%20services!"
                            target='_blank'
                            className='flex items-center'
                        >
                            <FaWhatsapp size={18} />
                            <span className='text-sm ml-1'>Let's Chat</span>
                        </a>
                    </div>
                    <div className='mt-3 py-2 md:py-2 px-4 w-28 rounded-full border-[1.2px] flex items-center hover:bg-zinc-700 duration-300'>
                        <IoMdCall size={20} />
                        <a href="tel:+917803991500" className='ml-1 text-sm text-white'>Call Us</a>
                    </div>
                </div>
                </div>
                </div>
                <div className='md:mt-40 md:w-[460px]'><img src={highlight} alt="" /></div>
        </div>
    );
}

export default LandingPage;