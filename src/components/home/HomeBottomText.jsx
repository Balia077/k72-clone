import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-5'>
        <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-25 flex items-center lg:px-10 px-3 border-white rounded-full uppercase'>
            <Link className='text-[6vw] lg:mt-4' to='/projects'>Projects</Link>
        </div>
        <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-25 flex items-center lg:px-10 px-3 border-white rounded-full uppercase'>
            <Link className='text-[6vw] lg:mt-4' to='/agence'>Agence</Link>
        </div>
    </div>
  )
}

export default HomeBottomText
