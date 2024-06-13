import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';
import { IoClose } from "react-icons/io5";

function PopUpContact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    const closePopup = () => {
        setShowPopup(false);
    };

    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            phone: data.phone,
        };
        try {
            await axios.post('https://getform.io/f/rbeqkjeb', userInfo);
            closePopup();
            toast.success('Message Sent!', {
                style: {
                    border: '1px solid #713200',
                    padding: '16px',
                    color: '#713200',
                },
                iconTheme: {
                    primary: '#713200',
                    secondary: '#FFFAEE',
                },
            });
        } catch (error) {
            toast.error('Something went wrong!');
        }
    };

    return (
        <div>
            {showPopup && (
                <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-70 z-[9999]'>
                    <div className='bg-zinc-700 md:w-96 w-[360px] py-4 rounded-lg md:px-8 px-4 relative'>
                        <button className='absolute top-0 right-0 m-2 text-white' onClick={closePopup}><IoClose size={28} /></button>
                        <form onSubmit={handleSubmit(onSubmit)} className={'py-4'}>
                            <h1 className='text-xl mb-5 font-bold text-center'>Get in Touch!&#128640;</h1>
                            <div className='flex flex-col mb-4'>
                                <input {...register("fullname", { required: true })} type="text" id='name' name='fullname' placeholder='Full name' className='shadow appearance-none border rounded px-2 py-1 leading-tight focus:outline-none focus:shadow-outline mt-1 h-10 md:h-7 text-black' />
                                {errors.fullname && <span className='text-zinc-300 text-sm mt-1'>This field is required</span>}
                            </div>
                            <div className='flex flex-col mb-4'>
                                <input {...register("email", { required: true })} type="text" id='email' name='email' placeholder='Email address' className='shadow appearance-none border rounded px-2 py-1 leading-tight focus:outline-none focus:shadow-outline mt-1 h-10 md:h-7 text-black' />
                                {errors.email && <span className='text-zinc-300 text-sm mt-1'>This field is required</span>}
                            </div>
                            <div className='flex flex-col mb-4'>
                                <input {...register("phone", { required: true })} type="text" id='phone' name='phone' placeholder='Phone number' className='shadow appearance-none border rounded px-2 py-1 leading-tight focus:outline-none focus:shadow-outline mt-1 h-10 md:h-7 text-black' />
                                {errors.phone && <span className='text-zinc-300 text-sm mt-1'>This field is required</span>}
                            </div>
                            <div className='flex justify-center'>
                                <button type="submit" className='py-2 px-7 md:py-1 md:px-5 rounded-full border-[1px] mt-2 border-white text-xl hover:bg-zinc-600 duration-300'>Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PopUpContact;
