import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
    return (
        <div className='font-[font1] lg:mt-0 mt-76 p-2 text-center'>
            <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[9vw] leading-[10vw]'>
                L'étincelle
            </div>
            <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[9vw] leading-[10vw]'>
                qui
                <div className='lg:h-[7vw] lg:w-[16vw] lg:-mt-7 h-[8.5vw] w-[20vw] rounded-full overflow-hidden'>
                    <Video />
                </div>
                génère
            </div>
            <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[9vw] leading-[10vw]'>
                la créativité
            </div>
        </div>
    )
}

export default HomeHeroText
