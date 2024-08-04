import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        year: 2017,
        title: 'Google',
        duration: '1 Years',
        details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum et ipsum et tincidunt. Phasellus venenatis libero at metus scelerisque feugiat. In placerat a felis a congue. Pellentesque tempus leo ultrices porttitor consectetur. Aliquam in lectus viverra diam mollis finibus. Proin sapien odio, accumsan a semper in, semper sed felis. Sed consectetur porta ante, eu mattis mi maximus id.'
    },
    {
        year: 2018,
        title: 'Amazon',
        duration: '1 Years',
        details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum et ipsum et tincidunt. Phasellus venenatis libero at metus scelerisque feugiat. In placerat a felis a congue. Pellentesque tempus leo ultrices porttitor consectetur. Aliquam in lectus viverra diam mollis finibus. Proin sapien odio, accumsan a semper in, semper sed felis. Sed consectetur porta ante, eu mattis mi maximus id.'
    },
    {
        year: 2019,
        title: 'Facebook',
        duration: '1 Years',
        details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum et ipsum et tincidunt. Phasellus venenatis libero at metus scelerisque feugiat. In placerat a felis a congue. Pellentesque tempus leo ultrices porttitor consectetur. Aliquam in lectus viverra diam mollis finibus. Proin sapien odio, accumsan a semper in, semper sed felis. Sed consectetur porta ante, eu mattis mi maximus id.'
    },
    {
        year: 2020,
        title: 'Apple',
        duration: '1 Years',
        details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum et ipsum et tincidunt. Phasellus venenatis libero at metus scelerisque feugiat. In placerat a felis a congue. Pellentesque tempus leo ultrices porttitor consectetur. Aliquam in lectus viverra diam mollis finibus. Proin sapien odio, accumsan a semper in, semper sed felis. Sed consectetur porta ante, eu mattis mi maximus id.'
    },
]

const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
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