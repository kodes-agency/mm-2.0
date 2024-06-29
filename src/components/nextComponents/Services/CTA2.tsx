'use client'

import { Service } from '@/payload-types'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Button } from '@/elements/nextElements/Button'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import SubscribePopup from '../SubscribePopup'
import useIsomorphicLayoutEffect from '@/lib/isomorphicEffect'

export const CTA2 = ({
  service,
  style,
}: {
  service: Service
  style: { highlightColor: string; bgColorFrom: string; bgColorTo: string }
}) => {
  const sectionRef = useRef<HTMLElement | any>('')
  const headerRef = useRef<HTMLElement | any>('')
  const pinnedRef = useRef<HTMLElement | any>('')
  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollToPlugin)
  })

  useGSAP(() => {
    
    let textAnmEl = gsap.utils.selector(sectionRef.current);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 1,
      }
    })

    tl.to(".bgChange", {
      backgroundColor: 'white'
    },0)

    tl.to(textAnmEl('span'), {
      color: "#181818"
    },0)
  })

  return (
    <section ref={sectionRef} className='bgChange flex flex-col items-center pb-40 md:min-h-screen overflow-hidden space-y-10'>
        <div className='max-w-4xl py-5 flex flex-col items-center space-y-10'>
              <h2 className='text-6xl md:text-8xl lg:text-9xl text-center leading-none text-white font-black'>
                  <strong style={{color: style.highlightColor}}>Your</strong> 
                  <span> time has come</span> 
                  <strong style={{color: style.highlightColor}}>!</strong>
              </h2>
              <h2 className='max-w-3xl text-center text-4xl md:text-6xl text-white font-bold'>
                <span>But are </span>
                <strong className='uppercase' style={{color: style.highlightColor}}>you</strong> 
                <span> ready to take the next step?</span>
              </h2>
        </div>
          <div className='flex items-center space-y-5 md:space-y-0 flex-col md:flex-row max-w-3xl md:space-x-5'>
              <SubscribePopup style='text-white bg-dark-purple ring-2 ring-light-purple hover:text-dark-purple hover:bg-light-purple hover:ring-dark-purple hover:ring-4 transition-all duration-300' title="Request for free consultation" hasBudget hasMessage openText="Yes, I'm ready"/>
              <button 
                onClick={()=>{
                  gsap.to(window, { duration: 1, scrollTo: '#statistics' })
                }}
              className='text-white uppercase font-medium'><span>I need more convincing</span></button>
          </div>
    </section>
  )
}
