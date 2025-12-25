import React from 'react'

const Projects = () => {
  return (
    <div className='p-2.5'>
      <div className='pt-[40.5vh]'>
        <h2 className='font-[font2] text-[13vw] uppercase'>Projets</h2>
      </div>
      <div>
        <div className='w-full h-[550px] mb-3 gap-3 flex -mt-20'>
          <div className='w-1/2 h-full hover:rounded-4xl overflow-hidden'>
            <img className='h-full w-full object-cover' src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=1280&h=960&s=008dc81d7a1c8fa45e299f6d2dbafc93" alt="" />
          </div>
          <div className='w-1/2 h-full hover:rounded-4xl overflow-hidden'>
            <img className='h-full w-full object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
