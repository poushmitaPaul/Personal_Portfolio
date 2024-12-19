// import { data } from 'autoprefixer';
import React from 'react'
import { useForm } from "react-hook-form";
import SiAxios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

function Contact() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm(); 


    const onSubmit = async (data) => {
        const userInfo = {
            name: data.name,
            email: data.email,
            message: data.message
        };
        try{
            await SiAxios.post("https://getform.io/f/avrrdqoa", userInfo);
            toast.success("Your message has been sent");
        } catch (error){
            console.log(error);
            toast.error("Something went wrong");
        }
    }



  return (
    <div name="Contacts" className='max-w-screen-2xl container mx-auto my-16 px-4 md:px-20 mt-10'>
        <h1 className='text-3xl font-bold mb-4'>Contact me</h1>
        <span>Please fill out the form below to contact me</span>
        <div className='flex flex-col items-center justify-center mt-5'>
            <form className='bg-slate-200 w-96 px-8 py-6 rounded-xl' 
                  onSubmit={handleSubmit(onSubmit)} 
                //   method='POST' 
                //   action="https://getform.io/f/avrrdqoa"
            >

                <h1>Send Your Message</h1>
                <div className='flex flex-col mb-4 mt-6'>
                    <label className='block text-gray-700'>FullName</label>
                    <input {...register("name", { required: true })} className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' name='name' type="text" placeholder='Enter your fullname' required/>
                    {errors.name && <span>This field is required</span>}
                </div>
                <div className='flex flex-col mb-4'>
                    <label className='block text-gray-700'>Email Address</label>
                    <input {...register("email", { required: true })} className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' name='email' type="text" placeholder='Enter your email address' required />
                    {errors.email && <span>This field is required</span>}
                </div>
                <div className='flex flex-col mb-4'>
                    <label className='block text-gray-700'>Message</label>
                    <textarea {...register("message", { required: true })} className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' name='message' type="text" placeholder='Type your message here' required />
                    {errors.message && <span>This field is required</span>}
                </div>
                <button className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300' type='submit'>Send</button>
            </form>
        </div>
      
    </div>
  )
}

export default Contact
