import React from 'react'
import { motion } from "framer-motion";

function Marque() {
  return (
    <div className='w-full py-4 rounded-tl-xl rounded-tr-xl bg-yellow-300'>
      <div className='text border-t-2 border-b-2 py-3 border-zinc-600 flex overflow-hidden whitespace-nowrap'>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:'linear', repeat:Infinity, duration:10}} className='text-black text-5xl md:text-8xl leading-none uppercase font-semibold pr-8'>we grow your business</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:'linear', repeat:Infinity, duration:10}} className='text-black text-5xl md:text-8xl leading-none uppercase font-semibold pr-8'>we grow your business</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:'linear', repeat:Infinity, duration:10}} className='text-black text-5xl md:text-8xl leading-none uppercase font-semibold'>we grow your business</motion.h1>
        </div>
    </div>
  )
}

export default Marque
