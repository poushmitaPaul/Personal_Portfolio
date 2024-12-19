import React from 'react'

import java from "../../public/java.png"
import python from "../../public/python.webp"
import mongodb from "../../public/mongodb.jpg"
import express from "../../public/express.png"
import reactjs from "../../public/reactjs.png"
import node from "../../public/node.png"




function Portfolio() {
    const cardItem=[
        {
            id:1,
            logo:mongodb,
            name:"MongoDB"
        },
        {
            id:2,
            logo:express,
            name:"Express"
        },
        {
            id:3,
            logo:reactjs,
            name:"ReactJS"
        },
        {
            id:4,
            logo:node,
            name:"NodeJS"
        },
        {
            id:5,
            logo:python,
            name:"Python"
        },
        {
            id:6,
            logo:java,
            name:"Java"
        },
    ]


  return (
    <div name="Portfolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
        <div>
            <h1 className='text-3xl font-bold mb-5'>Portfolio</h1>
            <span className='underline font-semibold'>Featured Project</span>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-x-3 gap-y-3 my-5'>
                {
                    cardItem.map(({id,logo,name}) =>(
                        <div className='md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-105 duration-300' key={id}>
                            <img 
                                src={logo} 
                                className='w-[120px] h-[120px] p-1 rounded-full border-[2px]' 
                                alt="" 
                            />
                            <div>
                                <div className='font-bold text-xl mb-2 ml-2'>{name}</div>
                                <p className='px-2 text-gray-700'>Lorem ipsum dolor sit amet  quis illum hic obcaecati.</p>
                            </div>
                            <div className='px-6 py-4 space-x-4 justify-around'>
                                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>Video</button>
                                <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded'>Source code</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
      
    </div>
  )
}

export default Portfolio
