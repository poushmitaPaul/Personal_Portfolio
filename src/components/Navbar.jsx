import React, { useState } from 'react'
import logo from "../../public/photo.avif"

import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

import { Link } from 'react-scroll';





function Navbar() {

    const [menu, setMenu] = useState(false)
    const navItems = [
      {
        id:1,
        text:"Home"
      },
      {
        id:2,
        text:"About"
      },
      {
        id:3,
        text:"Portfolio"
      },
      {
        id:4,
        text:"Experience"
      },
      {
        id:5,
        text:"Contacts"
      },
    ]


  return (
    <div className="max-w-screen-2xl container mx-auto h-16 px-4 md:px-20 shadow-md fixed top-0 left-0 right-0 z-50 bg-white" >

      <div id="navbar" className='flex justify-between items-center h-16'>

        <div id="left" className="flex space-x-2">
            <img src={logo} className='h-12 w-12 rounded-full' alt="" />
            <h1 className='font-semibold text-xl cursor-pointer'>
                Pous<span className='text-pink-500 text-2xl'>h</span>
            <p className='text-sm'>Web Developer</p>
            </h1>
        </div>
        {/* Desktop_Navbar */}
        <div id="right">
            <ul className='hidden md:flex space-x-8'>
                {
                  navItems.map(({id,text}) => (
                    <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>
                      <Link to={text} smooth={true} duration={500} offset={-70} activeClass='active' >
                        {text}
                      </Link>
                    </li>
                  ))
                }
            </ul>
            <div onClick={() => setMenu(!menu)} id="menu_icon" className='md:hidden'>
                {menu ? <IoCloseSharp size={24} /> : < AiOutlineMenu size={24}  />}
            </div>
        </div>
      </div>

      {/* Mobile_Navbar */}
      {menu && (
        <div className='bg-white' id="mb_navbar">
          <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-2xl'>
              {
                navItems.map(({id,text}) => (
                  <li className='hover:scale-105 duration-200 font-medium cursor-pointer' key={id}>
                    <Link onClick={() => setMenu(!menu)} to={text} smooth={true} duration={500} offset={-70} activeClass='active' >
                      {text}
                    </Link>
                  </li>
                ))
              }
          </ul>
        </div>
      )}
      
    </div>
  )
}

export default Navbar
