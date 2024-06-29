'use client'

import { useState, useEffect } from 'react'
import { Logo, Name } from '../../elements/nextElements/SVGs'
import { Menu } from '../../elements/nextElements/Menu'
import Link from 'next/link'
import { Service } from '@/payload-types'
import SubscribePopup from './SubscribePopup'

const Header = ({ services }: { services: Service[] }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const viewportHeight = window.innerHeight
      if (scrolled > viewportHeight * 0.05) {
        setIsHidden(true)
      } else {
        setIsHidden(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible)
  }

  return (
    <header>
      <nav className="relative">
        <div className="tiny w-[33vw] h-fit fixed top-6 md:top-10 z-50 left-5 md:left-10 lg:left-20 mix-blend-difference">
          <Link aria-label="Home page" href="/">
            <Logo fill="white" style=" w-8 h-8" />
          </Link>
        </div>
        <div className={`justify-center pt-3 fixed top-5 md:top-10 z-50 left-1/2 -translate-x-1/2 mix-blend-difference transition-all duration-500 ${isHidden && !isMenuVisible ? "-translate-y-20  pointer-events-none" : "-translate-y-0 opacity-100"}`}>
          <Link aria-label="Home page" href="/" className="">
            <Name fill="white" style="h-3 md:h-auto" />
          </Link>
        </div>
        <div className={`fixed flex items-center top-5 md:top-10 z-50 right-5 md:right-10 lg:right-20 w-fit  py-0.5 px-1.5 ${isHidden && !isMenuVisible ? "bg-dark-purple rounded-full" : `${!isMenuVisible ? "mix-blend-difference" : ""}`}`}>
          {
            !isMenuVisible && (
              <SubscribePopup
                style={` text-light-purple transition-all hover:text-white w-fit duration-500 !px-3 !lowercase ${isHidden ? "opacity-100" : "opacity-0 pointer-events-none"} `}
                hasBudget
                hasMessage
                title="Request a quote"
                openText="get a qoate"
              />
            )
          }
          <button onClick={toggleMenu} className={`transition-all duration-500 group p-1 w-14 md:w-16 ${isHidden && !isMenuVisible && "bg-light-purple rounded-full "}`}>
                {isMenuVisible ? (
                  <div className='relative mt-1'>
                    <p className="text-black text-sm font-medium">close</p>
                    {isMenuVisible && <div className='w-0 h-1 absolute top-5 bg-red group-hover:w-full transition-all duration-500'></div>}
                  </div>
                ) : (
                  <div className='relative'>  
                    <p className={`${isHidden ? "text-dark-purple" : "text-white"} group-hover:text-white transition-all duration-500 font-medium text-sm`}>menu</p>
                    { !isHidden && !isMenuVisible && (<div className='h-1 absolute top-5 group-hover:w-full bg-white w-0 transition-all duration-500'></div>)}
                  </div>
                )}
          </button>
        </div>
      </nav>
      <Menu isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible} services={services} />
    </header>
  )
}

export default Header
