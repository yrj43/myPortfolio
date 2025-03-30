import React from 'react'

const WorkItem = ({year, title, duration, details}) => {
  return (
    <ol className='flex flex-col md:flex-row relative border-l border-stone-200'>
        <li className='mb-10 ml-4'>
            <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white'/>
            <p className='flex flex-wrap gap-8 flew-row items-center justify-start text-xs md:text-sm'>
                <span className='inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md'>{year}</span>
                <span className='text-lg font-semibold text-[#001b5e]'>{title}</span>
                <span className='my-1 text-sm font-normal loading-none text-stone-400'>{duration}</span>
            </p>
            <ul className='my-4 text-base font-normal text-stone-500 list-disc pl-5'>
                {Array.isArray(details) ? 
                    details.map((detail, index) => (
                        <li key={index} className='mb-2'>{detail}</li>
                    ))
                    : <li>{details}</li>
                }
            </ul>
        </li>
    </ol>
  )
}

export default WorkItem