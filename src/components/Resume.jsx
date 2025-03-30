import React from 'react'
import {BsDownload} from 'react-icons/bs'

const Resume = () => {
  return (
    <div id='resume' className='md:h-screen'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 text-gray-600 border-pink-600'>Resume</p>
            </div>
            <div className='mt-8 flex flex-col items-center'>
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
    </div>
  )
}

export default Resume 