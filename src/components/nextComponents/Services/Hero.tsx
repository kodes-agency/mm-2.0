'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import useIsomorphicLayoutEffect from '@/lib/isomorphicEffect'
import SplitType from 'split-type'

import { Service } from '@/payload-types'
import Image from 'next/image'

export const Hero = ({
  service,
  style,
}: {
  service: Service
  style: { highlightColor: string; bgColorFrom: string; bgColorTo: string }
}) => {
  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
  })

  const sectionRef = useRef<HTMLElement | any>('')
  const wrapperRef = useRef<HTMLElement | any>('')
  const labelRef = useRef<HTMLElement | any>('')
  const headerRef = useRef<HTMLElement | any>('')
  const paraRef = useRef<HTMLElement | any>('')

  useGSAP(() => {

    const title = new SplitType(headerRef.current, {
      types: 'lines,words',
      lineClass: 'line',
    })

    gsap.set('.line', {
      overflow: 'hidden',
      fontKerning: 'none',
    })

    const textTl = gsap.timeline({})

    textTl.from(title.words, {
      opacity: 0,
      y: 100,
      stagger: 0.01,
      delay: 0.2,
      duration: 1.5,
      ease: 'power3.out',
    })

    textTl.from(
      paraRef.current,
      {
        opacity: 0,
        delay: 0.5,
        duration: 2,
        ease: 'power3.out',
      },
      '<'
    )

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        end: 'center center',
        scrub: 1,
      },
    })

    gsap.to(wrapperRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: '10% top',
        end: 'bottom top',
        scrub: 1,
      },
      scale: 0.9,
      opacity: 0.5,
    })

    return () => {
      title.revert()
    }

  })

  return (
    <div className="flex items-center w-full justify-center bg-black" ref={wrapperRef}>
      <section
        ref={sectionRef}
        className={`flex flex-col items-center px-5 md:px-20 w-full justify-center h-screen relative overflow-x-clip`}
        style={{
          background: `linear-gradient(to bottom, ${style.bgColorFrom}, ${style.bgColorTo})`,
        }}
      >
        <div className="max-w-4xl flex flex-col space-y-6 md:space-y-10 relative z-10">
          <div ref={labelRef} className=" md:space-x-2 flex flex-col md:flex-row">
            <p className={`text-white font-bold md:text-lg uppercase`}>Services://</p>
            <p
              className={`font-bold md:text-lg uppercase`}
              style={{ color: `${style.highlightColor}` }}
            >
              {service.label}
            </p>
          </div>
          <h1 ref={headerRef} className="text-3xl text-white font-black md:text-6xl lg:text-7xl uppercase">
            {service.servicePage.title}
          </h1>
          <p ref={paraRef} className="text-white text-lg ">{service.servicePage.description}</p>
        </div>
        <Image
          className="absolute top-0 left-0 z-0 w-full h-full object-cover opacity-40"
          width={1024}
          height={750}
          priority
          // @ts-ignore
          src={service.servicePage.image.url} alt={service.servicePage.image.alt}
        />
        <div
          id="box"
          className="absolute top-0 left-0 z-0 w-full h-full object-cover"
          style={{ background: `linear-gradient(to bottom,rgba(0,0,0,0), ${style.bgColorTo})` }}
        ></div>
      </section>
    </div>
  )
}
