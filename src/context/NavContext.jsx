import React, { createContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const NavbarContext = createContext()
export const NavbarColorContext = createContext()
export const NavMenuContext = createContext()

const NavContext = ({children}) => {

  const [navColor, setNavColor] = useState('white')
  const [navMenu, setNavMenu] = useState('block')
  const [navOpen, setNavOpen] = useState(false)


  const locate = useLocation().pathname
  
  useEffect(function(){
    if(locate === '/projects' || locate === '/agence'){
      setNavMenu('none')
      setNavColor('black')
    }else{
      setNavMenu('block')
      setNavColor('white')
    }
  }, [locate])
  
  return (
    <div>
      <NavbarContext.Provider value={[navOpen, setNavOpen]}>
        <NavbarColorContext.Provider value={[navColor, setNavColor]}>
          <NavMenuContext.Provider value={[navMenu, setNavMenu]}>
            {children}
          </NavMenuContext.Provider>
        </NavbarColorContext.Provider>
      </NavbarContext.Provider>
    </div>
  )
}

export default NavContext
