import React from 'react'
import serv from '../../serv.json'
import {Link} from 'react-scroll'

function Services() {
  return (
    <div name="Services" className='w-full bg-zinc-900 text-center my-8'>
        <hr />
        <div className='capitalize text-3xl text-yellow-300 mt-4'>our services.</div>
        <div className='capitalize text-lg font-light'>the digital marketing agency</div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3 mx-10 my-5'>
        {serv.map((items)=>{
          return  <div key={items.id} className='hover:scale-105 duration-300 md:w-72 rounded-xl mb-3 p-3 bg-yellow-300'>
              <div className='font-bold text-lg text-black'>{items.title}</div>
              <div className='w-36 h-24 mx-auto flex items-center border-[1px] border-black shadow-lg my-2 overflow-hidden'><img className='p-1' src={items.imgUrl} alt="" /></div>
              <div className='text-start text-[12px] text-gray-800'>{items.description}</div>
              <div className='capitalize py-2 rounded-full border-[1px] mt-3 cursor-pointer border-black text-black font-bold'><Link to='contact us' smooth={true}
            duration={500}
            offset={-26}
            activeClass='active'>Contact</Link></div>
            </div>
        })}
        </div>
    </div>
  )
}

export default Services
