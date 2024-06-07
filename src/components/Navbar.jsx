import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { IoMenu, IoClose } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";

function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <div>
      {/* Call Bar */}
      <div className='w-full bg-[#3ABEF9] h-10 flex items-center justify-center fixed top-0 z-50'>
        <div className='flex items-center text-black'>
          <IoMdCall size={24} style={{ color: 'white', fontWeight: 'bold' }} />
          <a href="tel:+917803991500" className='ml-2 font-bold text-white'>+91-7803991500</a>
        </div>
      </div>
      {/* Navbar */}
      <div className='w-full h-[8vh] md:h-[13vh] bg-zinc-800 z-40 cursor-pointer fixed top-10 px-4 md:px-20 py-6 flex items-center justify-between'>
        <div className="logo text-xl text-white">KushwahG Media</div>
        {/* big screen */}
        <div className="links hidden md:flex items-center gap-8">
          {["home", "Services", "About Us", "Blog"].map((item, index) => (
            <Link to={item}
              smooth={true}
              duration={500}
              offset={-120}
              activeClass='active' key={index} className={`capitalize ${index === 3 && 'mr-12'} text-white hover:text-zinc-300`}>
              {item}
            </Link>
          ))}
          <Link to='contact us' smooth={true}
            duration={500}
            offset={-80}
            activeClass='active' className='hover:bg-zinc-700 duration-300 capitalize px-4 py-2 rounded-full border-[1.2px] text-sm text-white'>
            contact us
          </Link>
        </div>
        {/* menu button */}
        <div className='md:hidden text-white' onClick={() => setMenu(!menu)}>
          {menu ? <IoClose size={28} /> : <IoMenu size={28} />}
        </div>
      </div>
      {/* small screen */}
      {menu && (
        <div className="fixed top-0 left-0 w-full h-full bg-zinc-700 flex flex-col items-center justify-center z-30">
          {["home", "Services", "About Us", "Blog"].map((item, index) => (
            <Link to={item}
              onClick={() => setMenu(!menu)}
              smooth={true}
              duration={500}
              offset={-120}
              activeClass='active' key={index} className='capitalize my-2 text-2xl text-white'>
              {item}
            </Link>
          ))}
          <Link to='contact us' smooth={true}
            onClick={() => setMenu(!menu)}
            duration={500}
            offset={-80}
            activeClass='active' className='capitalize text-2xl px-4 py-2 rounded-full border-[1px] mt-3 text-white'>
            contact us
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
