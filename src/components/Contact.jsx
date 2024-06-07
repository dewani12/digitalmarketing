import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';
import { CiMail } from "react-icons/ci";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    
    const [formVisible, setFormVisible] = useState(false);
    const { ref, inView } = useInView();
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
            setFormVisible(true);
        }
    }, [controls, inView]);

    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            phone: data.phone,
            subject: data.subject,
            message: data.message
        };
        try {
            await axios.post('https://getform.io/f/rbeqkjeb', userInfo);
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

    const mailtoLink = "mailto:kushwahaji658@gmail.com?subject=Interested in your Digital Marketing services";

    return (
        <div name='contact us' className='w-full bg-zinc-900 py-10'>
            <hr />
            <div className='flex flex-col my-2'>
                <div className='flex items-center mx-auto'>
                <div className='capitalize text-2xl'>Contact us.</div>
                <div className='h-12 w-12'><img src="https://ksbddegreecollege.org/v1/img/Contact-Us-PNG.png" alt="" /></div>
                </div>
            <div className='text-center mx-2 md:text-xl'>Let Our Digital Marketing Experts Help You Reach Your Goals. Get in Touch!</div>
            </div>
            <div className='contactForm flex flex-col items-center mt-4 mx-2'>
                <motion.div 
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: 100 }
                    }}
                    transition={{ duration: 0.5, delay: 0.1 }} // Adding a delay of 0.1s
                    className='flex flex-col items-center'>
                    <a href={mailtoLink} className='flex items-center border-[1px] border-white rounded w-[240px] my-5 p-2'>
                        <CiMail size={42}/>
                        <div>
                            <p className='mx-2 text-sm'>Have a project in mind!</p>
                            <p className='mx-2 text-sm'>Directly Mail Us!</p>
                        </div>
                    </a>
                </motion.div>
                <motion.div 
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: 100 }
                    }}
                    transition={{ duration: 0.5, delay: 0.2 }} // Adding a delay of 0.2s
                    className='text-2xl font-bold mb-5'>
                    Or
                </motion.div>
                <motion.form 
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: 100 }
                    }}
                    transition={{ duration: 0.5, delay: 0.3 }} // Adding a delay of 0.3s
                    action='' 
                    onSubmit={handleSubmit(onSubmit)} 
                    className={`bg-zinc-700 md:w-96 w-[360px] py-4 rounded-lg md:px-8 px-4 ${formVisible ? 'opacity-100' : 'opacity-0'}`}>
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
                        <button type="submit" className='py-2 px-6 rounded-full border-[1px] mt-3 border-white text-xl hover:bg-zinc-500 duration-300'>Send</button>
                    </div>
                </motion.form>
            </div>
        </div>
    );
}

export default Contact;
