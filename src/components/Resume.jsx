import React from 'react'
import {BsDownload} from 'react-icons/bs'

const Resume = () => {
  return (
    <div id='resume' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e] mb-8'>Resume</h1>
        <div className='flex flex-col items-center'>
            <div className='w-full max-w-[800px] bg-white rounded-lg shadow-lg p-6'>
                <div className='flex justify-between items-center mb-4'>
                    <h2 className='text-2xl font-semibold text-gray-800'>My Resume</h2>
                    <a 
                        href="/resume/Resume.pdf" 
                        download 
                        className='flex items-center gap-2 bg-[#001b5e] text-white px-4 py-2 rounded-md hover:bg-[#001b5e]/90 transition-colors'
                    >
                        <BsDownload className='text-xl' />
                        Download PDF
                    </a>
                </div>
                <div className='w-full h-[800px]'>
                    <iframe
                        src="/resume/Resume.pdf"
                        className='w-full h-full'
                        title="Resume Preview"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Resume 