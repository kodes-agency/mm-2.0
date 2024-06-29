'use client'

import SubscribePopup from '@/components/nextComponents/SubscribePopup'
import { Service } from '@/payload-types'
import Link from 'next/link'
import React from 'react'
import { Logo } from './SVGs'

export const Menu = ({
  isMenuVisible,
  setIsMenuVisible,
  services,
}: {
  isMenuVisible: boolean
  setIsMenuVisible: React.Dispatch<React.SetStateAction<boolean>>
  services: Service[]
}) => {
  const pages = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'About',
      url: '/about',
    },
    {
      name: 'Blog',
      url: '/blog',
    },
    {
      name: 'FAQ',
      url: '/faq',
    },
  ]

  return (
    <section
      className={`fixed top-0 left-0 bg-white h-screen w-full z-40 overflow-hidden flex flex-col md:items-center px-5 pt-10 md:pt-0 transition-all duration-700 ease-in-out  md:justify-center ${
        isMenuVisible ? 'translate-y-0' : ' -translate-y-full'
      }`}
    >
      <div
        className={`relative flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-20 lg:space-x-60 items-start pt-20 transition-opacity duration-1000 ${
          isMenuVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex flex-col space-y-2 md:space-y-3 relative">
          <p className="font-bold uppercase text-2xl md:text-3xl lg:text-4xl">PAGES://</p>
          {pages.map((page) => (
            <Link
              className={`links transition-all duration-500 uppercase group text-2xl md:text-3xl lg:text-4xl w-fit`}
              href={page.url}
              key={page.name}
              onClick={() => {
                setIsMenuVisible(false)
              }}
            >
              <p>{page.name}</p>
              <div className="w-0 h-1 bg-light-purple group-hover:w-full transition-all duration-500"></div>
            </Link>
          ))}
        </div>
        <div className="flex flex-col space-y-2 md:space-y-3 relative">
          <p className="transition-all duration-500 font-bold uppercase text-2xl md:text-3xl lg:text-4xl">
            SERVICES://
          </p>

          {services.map((service, id) => (
            <Link
              className={`links transition-all duration-500 uppercase group text-2xl md:text-3xl lg:text-4xl w-fit`}
              href={'/services/' + service.slug || '/'}
              key={id}
              onClick={() => {
                setIsMenuVisible(false)
              }}
            >
              <p>{service.homePage.buttonText}</p>
              <div className="w-0 h-1 bg-light-purple group-hover:w-full transition-all duration-500"></div>
            </Link>
          ))}
        </div>

      </div>
        <Logo fill="" style="w-[1200px] h-[1200px] absolute bottom-2/4  opacity-30  -z-10 fill-light-cyan" />
      <div className="flex flex-col md:items-center md:justify-center mt-20 space-y-4 relative">
        <p className='md:text-center'>
          <strong>Ready to transform your digital presence? </strong> <br />
          Let's craft your unique journey together.
        </p>
        <SubscribePopup
          style="bg-light-purple text-dark-purple hover:ring-2 hover:ring-light-purple hover:bg-dark-purple hover:text-light-purple transition-all duration-300"
          hasBudget
          hasMessage
          title="Free consulatition request"
          openText="Get a free consultation"
        />
      </div>
    </section>
  )
}
