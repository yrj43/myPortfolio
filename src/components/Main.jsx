import React from "react";
import {TypeAnimation} from 'react-type-animation'
import {FaTwitter,FaFacebook,FaInstagram,FaLinkedinIn} from 'react-icons/fa'

const Main = () => {
    return (
        <div id='main'>
            <img className='w-full h-screen object-cover object-left scale-x-[-1]' 
            src="https://images.unsplash.com/photo-1479920252409-6e3d8e8d4866?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1lciUyMHdvcmtpbmclMjBmdWxsJTIwaGR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" 
            alt="" />
            <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Yuvaraj</h1>
                <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I'm  
                <TypeAnimation
                    sequence={[
                    'Developer', // Types 'One'
                    2000, // Waits 1s
                    'Designer', // Deletes 'One' and types 'Two'
                    2000, // Waits 2s
                    'Tech enthusiast', // Types 'Three' without deleting 'Two'
                    2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '1em', paddingLeft: '5px' }}
                />    
                </h2>
                <div className='flex justify-between pt-5 max-w-[200px] w-full'>
                    <FaTwitter className="cursor-pointer" size={20}/>
                    <FaFacebook className="cursor-pointer" size={20}/>
                    <FaInstagram className="cursor-pointer" size={20}/>
                    <FaLinkedinIn className="cursor-pointer" size={20}/>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Main