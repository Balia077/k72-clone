import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
    return (
        <div className='font-[font1] p-2 text-center'>
            <div className='text-[9.5vw] justify-center flex items-center uppercase leading-[9vw]'>L'étincelle</div>
            <div className='text-[9.5vw] justify-center flex items-center uppercase leading-[9vw]'>qui
                <div className='h-[7vw] w-[16vw] -mt-7 rounded-full overflow-hidden'>
                    <Video />
                </div>
                génère</div>
            <div className='text-[9.5vw] justify-center flex items-center uppercase leading-[8vw]'>la créativité</div>
        </div>
    )
}

export default HomeHeroText
