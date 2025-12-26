import React from 'react'

const ProjectsCard = (props) => {
    return (
        <>
            <div className='cursor-pointer lg:w-1/2 lg:h-full h-1/2 group relative transition-all hover:rounded-[50px] overflow-hidden'>
                <img className='lg:h-full h-full lg:w-full w-full object-cover group-hover:scale-105 transition-all' src={props.image1} alt="" />
                <div className='opacity-0 transition-all group-hover:opacity-100 absolute flex items-center justify-center top-0 left-0 h-full w-full bg-black/10'>
                    <h2 className='uppercase text-[4vw] px-4 pt-1.5 leading-12 text-white border-white font-[font2] border-2 rounded-full '>Vior le projet</h2>
                </div>
            </div>
            <div className='cursor-pointer lg:w-1/2 lg:h-full h-1/2 group relative transition-all hover:rounded-[50px] overflow-hidden'>
                <img className='lg:h-full h-full lg:w-full w-full object-cover group-hover:scale-105 transition-all' src={props.image2} alt="" />
                <div className='opacity-0 transition-all group-hover:opacity-100 absolute flex items-center justify-center top-0 left-0 h-full w-full bg-black/10'>
                    <h2 className='uppercase text-[4vw] px-4 pt-1.5 leading-12 text-white border-white font-[font2] border-2 rounded-full '>Vior le projet</h2>
                </div>
            </div>
        </>
    )
}

export default ProjectsCard
