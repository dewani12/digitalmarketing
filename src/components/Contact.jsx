import React from 'react'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast';
import { CiMail } from "react-icons/ci";

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
    const onSubmit = async (data) => {
        console.log(data);
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            phone: data.phone,
            subject: data.subject,
            message: data.message
        }
        try {
            await axios.post('https://getform.io/f/lajkgxxb', userInfo);
            toast.success('Message Sent!');
        } catch (error) {
            toast.error('Something went wrong!');
        }
    }

    const mailtoLink = "mailto:gauravdewani2@gmail.com?subject=Interested in your Digital Marketing services";

    return (
        <div name='contact us' className='w-full bg-zinc-900 py-10'>
            <hr />
            <div className='text-center'>
                <div className='capitalize text-3xl text-yellow-300 mt-4'>Contact us.</div>
                <div className='mt-3 md:text-xl mx-2'>Let Our Digital Marketing Experts Help You Reach Your Goals. Get in Touch!</div>
            </div>
            <div className='flex flex-col items-center mt-8 mx-2'>
                <div className='flex flex-col items-center'>
                    <a href={mailtoLink} className='flex items-center border-[1px] border-white rounded w-[240px] my-5 p-2'>
                        <CiMail size={42}/>
                        <div>
                            <p className='mx-2 text-sm'>Have a project in mind!</p>
                            <p className='mx-2 text-sm'>Directly Mail Us!</p>
                        </div>
                    </a>
                    <div className='text-2xl font-bold mb-5'>Or</div>
                </div>
                <form action='' onSubmit={handleSubmit(onSubmit)} className='bg-zinc-700 md:w-96 w-[360px] py-4 rounded-lg md:px-8 px-4'>
                    <h1 className='text-xl mb-5 font-bold text-center'>Send us a message&#128640;</h1>
                    <div className='flex flex-col mb-4'>
                        <input {...register("fullname", { required: true })} type="text" id='name' name='fullname' placeholder='Full name' className='shadow appearance-none border rounded px-2 py-1 leading-tight focus:outline-none focus:shadow-outline mt-1 h-10 md:h-7 text-black'/>
                        {errors.fullname && <span className='text-yellow-300 text-sm mt-1'>This field is required</span>}
                    </div>
                    <div className='flex flex-col mb-4'>
                        <input {...register("email", { required: true })} type="text" id='email' name='email' placeholder='Email address' className='shadow appearance-none border rounded px-2 py-1 leading-tight focus:outline-none focus:shadow-outline mt-1 h-10 md:h-7 text-black'/>
                        {errors.email && <span className='text-yellow-300 text-sm mt-1'>This field is required</span>}
                    </div>
                    <div className='flex flex-col mb-4'>
                        <input {...register("phone", { required: true })} type="text" id='phone' name='phone' placeholder='Phone number' className='shadow appearance-none border rounded px-2 py-1 leading-tight focus:outline-none focus:shadow-outline mt-1 h-10 md:h-7 text-black'/>
                        {errors.phone && <span className='text-yellow-300 text-sm mt-1'>This field is required</span>}
                    </div>
                    <div className='flex flex-col mb-4'>
                        <input {...register("subject", { required: true })} type="text" id='subject' name='subject' placeholder='Subject' className='shadow appearance-none border rounded px-2 py-1 leading-tight focus:outline-none focus:shadow-outline mt-1 h-10 md:h-7 text-black'/>
                        {errors.subject && <span className='text-yellow-300 text-sm mt-1'>This field is required</span>}
                    </div>
                    <div className='flex flex-col mb-4'>
                        <textarea {...register("message", { required: false })} type="text" id='message' name='message' placeholder='Message' className='shadow appearance-none border rounded px-2 py-1 leading-tight focus:outline-none focus:shadow-outline mt-1 h-40 text-black'/>
                    </div>
                    <div className='flex justify-center'>
                        <button type="submit" className='py-2 px-6 rounded-full border-[1px] mt-3 border-white text-xl'>Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
