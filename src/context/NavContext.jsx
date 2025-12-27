import React, { createContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const NavbarContext = createContext()
export const NavbarColorContext = createContext()
export const NavMenuContext = createContext()
export const NavWidContext = createContext()
export const NavbarWidContext = createContext()

const NavContext = ({children}) => {

  const [navColor, setNavColor] = useState('white')
  const [navMenu, setNavMenu] = useState('block')
  
  const [navWid, setNavWid] = useState('100%')
  const [navBarWid, setNavBarWid] = useState('100%')

  const [navOpen, setNavOpen] = useState(false)


  const locate = useLocation().pathname
  
  useEffect(function(){
    if(locate === '/projects' || locate === '/agence'){
      setNavMenu('none')
      setNavColor('black')
      setNavWid('0')
      setNavBarWid('100%')
    }else{
      setNavMenu('block')
      setNavColor('white')
      setNavWid('100%')
      setNavBarWid('0%')
    }
  }, [locate])
  
  return (
    <div>
      <NavbarContext.Provider value={[navOpen, setNavOpen]}>
        <NavbarColorContext.Provider value={[navColor, setNavColor]}>
          <NavMenuContext.Provider value={[navMenu, setNavMenu]}>
            <NavWidContext.Provider value={[navWid, setNavWid]}>
              <NavbarWidContext.Provider value={[navBarWid, setNavBarWid]}>
                {children}
              </NavbarWidContext.Provider>
            </NavWidContext.Provider>
          </NavMenuContext.Provider>
        </NavbarColorContext.Provider>
      </NavbarContext.Provider>
    </div>
  )
}

export default NavContext
