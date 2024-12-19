import React from 'react'

import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped,Typed } from "react-typed";

import logo from "../../public/photo.avif"


function Home() {
  return (
    <>
        <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
            <div className='flex flex-col md:flex-row'>
                <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
                    <span className='text-xl'>Welcome In My Feed</span>
                    <div className='flex space-x-2 text-2xl md:text-4xl'>
                        <h1>Hello, I'm a </h1> 
                        {/* <span >Developer</span> */}
                        <ReactTyped
                            className='text-red-700 font-bold'
                            strings={["developer","Programmer", "Coder"]}
                            typeSpeed={40}
                            backSpeed={50}
                            loop={true}
                        />
                    </div>
                    <br />
                    <p className='text-sm md:text-md text-justify'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quibusdam ut moleur adipisicing elit. Facilis alias ullam necessitatibus! Cum, sunt fugiat praesentium eligendi beatae, aspernatur quisquam aperiam .
                    </p>
                    <br />
                    {/* social media icons */}
                    <div className='flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0'>
                        <div className='space-y-2'>
                            <h1 className='font-bold text-center'>Avaialable on</h1>
                            <ul className='flex space-x-5'>
                                <li>
                                    <a href="https://www.facebook.com" target='_blank'>
                                        <FaSquareFacebook className='text-2xl cursor-pointer' />
                                    </a>
                                    
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com" target='_blank'>
                                        <FaLinkedin className='text-2xl cursor-pointer' />
                                    </a>
                                    
                                </li>
                                <li>
                                    <a href="https://www.youtube.com" target='_blank'>
                                        <IoLogoYoutube className='text-2xl cursor-pointer' />
                                    </a>
                                    
                                </li>
                                <li>
                                    <a href="https://www.telegram.com" target='_blank'>
                                        <FaTelegram className='text-2xl cursor-pointer' />
                                    </a>
                                    
                                </li>
                            </ul>
                        </div>
                        <div className='space-y-2'>
                            <h1 className='font-bold text-center'>Currently woking on</h1>
                            <div className='flex space-x-5'>
                                <SiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                <SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                <FaNodeJs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/2 md:ml-48 md:mt-20 order-1 md:order-2 mt-8'>
                    <img src={logo} className='md:h-80 md:w-80 rounded-full' alt="" />
                </div>
            </div>           
        </div>
        <hr />
    </>
    
  )
}

export default Home
