import React from 'react'

const ProjectBottom = () => {
  return (
    <div className='bg-black h-[69.5vh] absolute bottom-0 left-0 w-full z-0 text-white flex flex-col overflow-hidden'>
      <div className='w-full h-1/2 flex justify-between p-3'>
        <div className='font-[font2] uppercase gap-3 flex'>
            <div className='hover:text-[#D3FD50] h-[4.7vw] w-[8.5vw] border-2 px-5 rounded-full text-[5vw] leading-20'><h2>fb</h2></div>
            <div className='hover:text-[#D3FD50] h-[4.7vw] w-[8vw] border-2 px-5 rounded-full text-[5vw] leading-20'><h2>ig</h2></div>
            <div className='hover:text-[#D3FD50] h-[4.7vw] w-[8vw] border-2 px-5 rounded-full text-[5vw] leading-20'><h2>in</h2></div>
            <div className='hover:text-[#D3FD50] h-[4.7vw] w-[8.5vw] border-2 px-5 rounded-full text-[5vw] leading-20'><h2>be</h2></div>
        </div>
        <div className='hover:text-[#D3FD50] font-[font2] text-[5vw] uppercase flex'>
            <div className='absolute right-5 border-2 rounded-full px-6.5 items-center leading-13.5 pt-3'>
                <h2>contact</h2>
            </div>
        </div>
      </div>
      <div className='bottom h-1/2'></div>
    </div>
  )
}

export default ProjectBottom
