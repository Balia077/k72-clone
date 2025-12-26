import React, { useRef } from 'react'

const ProjectNav = () => {

    const NavGreenRef = useRef(null)
    const NavGreenRef2 = useRef(null)

  return (
    <div className=' w-full flex font-[font2] top-0 items-start justify-end'>
      <div onMouseEnter={()=>{
        NavGreenRef.current.style.height = '100%';
        NavGreenRef.current.style.color = 'black';
      }} 
      onMouseLeave={()=>{
        NavGreenRef.current.style.height = '0%';
        NavGreenRef.current.style.color = 'white';
      }}
      className='relative lg:h-[3.5vw] h-0 lg:w-[20vw] text-white bg-black flex '>
      <div ref={NavGreenRef} className='absolute h-0 w-full bg-[#D3FD50] text-white transition-all lg:text-[1.4vw] text-[0px]'><h2 className='absolute top-5 px-3 uppercase'>project(17)</h2></div>
      </div>
      <div onMouseEnter={()=>{
        NavGreenRef2.current.style.height = '100%';
        NavGreenRef2.current.style.color = 'black';
      }} 
      onMouseLeave={()=>{
        NavGreenRef2.current.style.height = '0%';
        NavGreenRef2.current.style.color = 'white';
      }} className='relative text-white lg:h-[5.5vw] h-0 lg:w-[30vw] bg-black flex lg:text-[1.4vw]'>
      <div ref={NavGreenRef2} className='absolute h-0 w-full bg-[#D3FD50] transition-all'><h2 className='absolute top-13 px-4 uppercase'>agence</h2></div>
      </div>
      <div className='text-white lg:h-[7.5vw] lg:w-[15vw] h-[12vw] w-[50vw] bg-black flex lg:text-[1.4vw]'><h2 className='py-21 p-3 uppercase'>menu</h2>
        <div className='bg-white lg:h-[0.1vw] lg:w-[3vw] h-[0.5vw] w-[10vw] mt-5 right-8 absolute'></div>
        <div className='bg-white lg:h-[0.1vw] lg:w-[1.5vw] h-[0.5vw] w-[6vw] mt-6 right-8 absolute'></div>
      </div>
    </div>
  )
}

export default ProjectNav
