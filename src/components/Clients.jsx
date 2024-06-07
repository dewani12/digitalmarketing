import React, { useState } from 'react'
import w1 from '/w1.jpg'
import w2 from '/w2.jpg'
import w3 from '/w3.jpg'
import w4 from '/w4.jpg'
import w5 from '/w5.jpg'
import { BsArrowLeftCircleFill,BsArrowRightCircleFill } from "react-icons/bs";

const slides = [
    {
        "src" : w1,
        "alt" : "ClientsReview"
    },
    {
        "src" : w2,
        "alt" : "ClientsReview"
    },
    {
        "src" : w3,
        "alt" : "ClientsReview"
    },
    {
        "src" : w4,
        "alt" : "ClientsReview"
    },
    {
        "src" : w5,
        "alt" : "ClientsReview"
    }
]

function Clients() {
    const [slide, setSlide] = useState(0);
    const nextSlide = () => {
        setSlide(slide === slides.length - 1 ? 0 :slide+1);
    }
    const prevSlide = () => {
        setSlide(slide === 0 ? slides.length - 1 :slide-1);
    }
  return (
    <div className='w-full pb-4'>
      <hr />
      <div className='flex md:flex-row flex-col mt-5'>
        <div className='flex mx-auto items-center space-x-2 mb-3'>
      <div className='capitalize text-2xl'>What our client's say?</div>
      <div className='h-12 w-12'><img src='https://cdn-icons-png.flaticon.com/512/1591/1591045.png' alt="" /></div>
      </div>
      <div className='flex justify-center items-center relative md:w-[500px] md:h-[300px] w-[310px] h-[220px] mx-auto'>
      <BsArrowLeftCircleFill className='absolute size-5 left-[-1.8rem] cursor-pointer' onClick={prevSlide}/>
        {slides.map((item, idx) => {
            return <img key={idx} src={item.src} alt={item.alt} className={slide===idx ? "rounded-lg h-[100%] w-[100%]" : "rounded-lg h-[100%] w-[100%] hidden"} />
        })}
        <BsArrowRightCircleFill className='absolute size-5 right-[-1.8rem] cursor-pointer' onClick={nextSlide}/>
        <span className='flex absolute bottom-[-1.1rem]'>
            {slides.map((_, idx) => {
                return <button key={idx} onClick={null} className={slide === idx ? 'bg-white w-1 h-1 mx-1 rounded-full cursor-pointer' : 'bg-gray-400 w-1 h-1 mx-1 rounded-full cursor-pointer'}></button>
            })}
        </span>
      </div>
      </div>
    </div>
  )
}

export default Clients
