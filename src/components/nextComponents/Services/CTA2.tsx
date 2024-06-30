'use client'

import { Service } from '@/payload-types'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import SubscribePopup from '../SubscribePopup'

export const CTA2 = ({
  service,
  style,
}: {
  service: Service
  style: { highlightColor: string; bgColorFrom: string; bgColorTo: string }
}) => {
  const sectionRef = useRef<HTMLElement | any>('')
  const wrapperRef = useRef<HTMLElement | any>('')

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 1,
      }
    })

    tl.from(wrapperRef.current, {
      scale: 0.8,
    })
  })

  return (
    <section ref={sectionRef} className='bg-white flex flex-col items-center space-y-10'>
        <div ref={wrapperRef} style={{backgroundColor: style.highlightColor}} className='w-full py-40 flex flex-col items-center'>
          <div className='max-w-4xl w-full space-y-10 flex flex-col items-center p-5 md:p-10'>
              <div className='flex flex-col items-center space-y-5'>
                <h2 className='text-4xl md:text-5xl lg:text-7xl text-center leading-none text-dark-purple font-black'>
                    {service.servicePage.ctaTitle}
                </h2>
                <p className='text-lg text-black font-medium text-center'>
                  {service.servicePage.ctaDescription}
                </p>
              </div>
              <SubscribePopup 
                style='text-white bg-dark-purple ring-2 ring-light-purple hover:text-dark-purple hover:bg-light-purple hover:ring-dark-purple hover:ring-4 transition-all duration-300' 
                title="Request for free consultation" 
                openText={service.servicePage.ctaButtonText}
                hasBudget 
                hasMessage 
              />
          </div>
          </div>
    </section>
  )
}
