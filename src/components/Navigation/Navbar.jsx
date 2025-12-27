import React, { useContext, useRef } from 'react'
import { NavbarColorContext, NavbarContext, NavMenuContext, NavWidContext } from '../../context/NavContext'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const navGreenRef = useRef(null)
    const navWhiteRef = useRef(null)
    const navWhiteRef2 = useRef(null)

    const [navOpen, setNavOpen] = useContext(NavbarContext)
    const [navColor, setNavColor] = useContext(NavbarColorContext)
    const [navMenu, setNavMenu] = useContext(NavMenuContext)
    const [navWid, setNavWid] = useContext(NavWidContext)

    return (
        <div style = {{width:navWid}} className='flex fixed top-0 w-full z-10 items-start justify-between'>
            <div className='lg:p-2.5 p-2'>
                <div className='lg:w-29.5 w-25.5'>
                <Link className='h-full w-full' to={'/'}>
                    <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                        <path fill={navColor} fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                    </svg>
                </Link>
                </div>
            </div>
            <div style = {{display:navMenu}} onClick={()=>{
                setNavOpen(true)
            }} 
            onMouseEnter={()=>{
                navGreenRef.current.style.height = '100%';
                navWhiteRef.current.style.backgroundColor = 'black';
                navWhiteRef2.current.style.backgroundColor = 'black';
            }}
            onMouseLeave={()=>{
                navGreenRef.current.style.height = '0%';
                navWhiteRef.current.style.backgroundColor = 'white';
                navWhiteRef2.current.style.backgroundColor = 'white';
            }}
            className='relative bg-black lg:h-12.5 h-11 lg:w-[16.5vw] w-46.5'>
                <div ref={navGreenRef} className='absolute top-0 bg-[#D3FD50] h-0 w-full transition-all'></div>
                <div ref={navWhiteRef} className='relative lg:h-[0.3vh] lg:w-13 h-0.5 w-10 bg-white lg:top-5.5 top-5 lg:left-40 left-30'></div>
                <div ref={navWhiteRef2} className='relative lg:h-[0.2vh] lg:w-7 h-0.5 w-5 bg-white lg:top-6.5 top-6 lg:left-46 left-35'></div>
            </div>
        </div>
    )
}

export default Navbar
