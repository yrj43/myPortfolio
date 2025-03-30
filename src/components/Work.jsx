import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        year: 2023,
        title: 'Coordinator 1, Advertising Sales Support & Analysis',
        duration: 'June 2023 - Present',
        details: [
            'Developed and optimized processes to streamline workflow, improving team efficiency',
            'Managed multiple processes simultaneously while meeting tight deadlines in a high-pressure environment',
            'Collaborated with cross-functional teams to ensure data accuracy and process improvements',
            'Analyzed performance metrics and provided insights to enhance operational decision-making'
        ]
    }
]

const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e] mb-8'>Work</h1>
        {data.map((item, idx) => (
            <WorkItem 
            key={idx} 
            year={item.year} 
            title={item.title} 
            duration={item.duration} 
            details={item.details}
            />
        ))}
    </div>
  )
}

export default Work