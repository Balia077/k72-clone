import React from 'react'

const ProjectBottom = () => {
  return (
    <div className='bg-black h-[69.5vh] absolute bottom-0 left-0 w-full z-0 text-white flex flex-col overflow-hidden'>
      <div className='h-1/2 w-full flex justify-between p-5'>
        <div className='font-[font2] text-8xl uppercase gap-10 flex h-full w-1/2'>
            <h2 className='border rounded-full'>fb</h2>
            <h2 className='border rounded-full'>ig</h2>
            <h2 className='border rounded-full'>in</h2>
            <h2 className='border rounded-full'>be</h2>
        </div>
        <div className='h-full w-1/2'>
            <div>
                <h2>contact</h2>
            </div>
        </div>
      </div>
      <div className='bottom h-1/2'></div>
    </div>
  )
}

export default ProjectBottom
