import React from 'react';
import serv from '../../serv.json';
import { Link } from 'react-scroll';
import { FaWhatsapp } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Services() {
  return (
    <div name="Services" className='w-full bg-zinc-900 text-center my-8'>
      <hr />
      <div className='capitalize text-3xl text-yellow-300 mt-4'>our services.</div>
      <div className='capitalize text-lg font-light'>the digital marketing agency</div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-3 mx-10 my-5'>
        {serv.map((items, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.1,
          });

          return (
            <motion.div
              key={items.id}
              className='hover:scale-105 duration-300 md:w-72 rounded-xl mb-3 p-3 bg-yellow-300'
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
            >
              <div className='font-bold text-lg text-black'>{items.title}</div>
              <div className='w-36 h-24 mx-auto flex items-center border-[1px] border-black shadow-lg my-2 overflow-hidden'>
                <img className='p-1' src={items.imgUrl} alt="" />
              </div>
              <div className='text-start text-[12px] text-gray-800'>{items.description}</div>
              <div className='flex justify-around'>
                <div className='mt-3 py-3 md:py-2 px-4 w-32 rounded-full bg-zinc-800 flex items-center'>
                  <a href="https://wa.me/917489347620?text=Hey,%20I'm%20Interested%20in%20your%20Digital%20Marketing%20services!" target='_blank' className='flex items-center'>
                    <FaWhatsapp size={20} />
                    <span className='text-sm ml-1 text-white'>Let's Chat</span>
                  </a>
                </div>
                <div className='mt-3 py-3 md:py-2 px-4 w-32 rounded-full bg-zinc-800 flex items-center'>
                  <IoMdCall size={24} />
                  <a href="tel:+917489347620" className='ml-1 text-sm text-white'>Call Us</a>
                </div>
              </div>
              <div className='capitalize py-2 rounded-full border-[1px] mt-3 cursor-pointer border-black text-black font-bold'>
                <Link
                  to='contact us'
                  smooth={true}
                  duration={500}
                  offset={-65}
                  activeClass='active'
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
