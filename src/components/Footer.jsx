import React from 'react'
import { FaInstagram,FaFacebook,FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
    <hr />
    <div className='w-full bg-zinc-800 md:px-20 px-4 py-6'>
        <div className='flex flex-col justify-center items-center'>
            <div className='flex space-x-4 cursor-pointer'>
              <a href="https://www.linkedin.com/in/sachin-kushwaha-11456827a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "><FaLinkedin size={24} /></a>
            <a href="https://www.instagram.com/sachinkushwaha_555?igsh=OTNzbnBtdDB4eTBi"><FaInstagram size={24} /></a>
            <a href="https://www.facebook.com/354398261911485"><FaFacebook size={24} /></a>
            </div>
            <div className='mt-6 border-t border-white flex flex-col items-center pt-5'>
                <p className='text-[12px]'>&copy; 2024 KushwahG Media. All rights reserved.</p>
                <p className='text-[12px]'>Supportive Partner &#9829; Sachin</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer
