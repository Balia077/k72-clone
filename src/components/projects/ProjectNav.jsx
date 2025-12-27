import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

const ProjectNav = () => {

    const NavGreenRef = useRef(null)
    const NavGreenRef2 = useRef(null)
    const NavGreenRef3 = useRef(null)
    const NavLinesRef = useRef(null)
    const NavLinesRef2 = useRef(null)

  return (
    <div className='w-full flex font-[font2] top-0 items-start justify-end'>
      <div onMouseEnter={()=>{
        NavGreenRef.current.style.height = '100%';
        NavGreenRef.current.style.color = 'black';
      }} 
      onMouseLeave={()=>{
        NavGreenRef.current.style.height = '0%';
        NavGreenRef.current.style.color = 'white';
      }}
      className='relative lg:h-[3.5vw] h-0 lg:w-[20vw] text-white bg-black flex '>
      <div ref={NavGreenRef} className='absolute h-0 w-full bg-[#D3FD50] text-white transition-all lg:text-[1.4vw] text-[0px] cursor-pointer'><Link className='h-full w-full absolute py-5 px-3 uppercase' to={'/projects'}>project(17)</Link></div>
      </div>
      <div onMouseEnter={()=>{
        NavGreenRef2.current.style.height = '100%';
        NavGreenRef2.current.style.color = 'black';
      }} 
      onMouseLeave={()=>{
        NavGreenRef2.current.style.height = '0%';
        NavGreenRef2.current.style.color = 'white';
      }} className='relative text-white lg:h-[5.5vw] h-0 lg:w-[30vw] bg-black flex'>
      <div ref={NavGreenRef2} className='absolute h-0 w-full bg-[#D3FD50] text-white transition-all lg:text-[1.4vw] text-[0px] cursor-pointer'><Link className='w-full h-full absolute px-3 uppercase leading-34' to={'/agence'}>agence</Link></div>
      </div>
      <div onMouseEnter={()=>{
        NavGreenRef3.current.style.height = '100%';
        NavGreenRef3.current.style.color = 'black';
        NavLinesRef.current.style.backgroundColor = 'black';
        NavLinesRef2.current.style.backgroundColor = 'black';
      }}
      onMouseLeave={()=>{
        NavGreenRef3.current.style.height = '0%';
        NavGreenRef3.current.style.color = 'white';
        NavLinesRef.current.style.backgroundColor = 'white';
        NavLinesRef2.current.style.backgroundColor = 'white';
      }}
      className='relative text-white lg:h-[7.5vw] lg:w-[15vw] h-[12vw] w-[50vw] bg-black flex lg:text-[1.4vw]'>
        <div ref={NavGreenRef3} className='text-white h-0 w-full bg-[#D3FD50] transition-all cursor-pointer absolute'><span className='absolute px-3 uppercase w-full h-full leading-50'>menu</span></div>
        <div ref={NavLinesRef2} className='bg-white lg:h-[0.1vw] lg:w-[1.5vw] h-[0.5vw] w-[6vw] mt-6 right-8 absolute'></div>
        <div ref={NavLinesRef} className='bg-white lg:h-[0.1vw] lg:w-[3vw] h-[0.5vw] w-[10vw] mt-5 right-8 absolute'></div>
      </div>
    </div>
  )
}

export default ProjectNav
