'use client'

import SplitType from 'split-type'
import { about } from '@/content/content'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import useIsomorphicLayoutEffect from '@/lib/isomorphicEffect'
import { useRef } from 'react'

export const Hero = () => {
  const imageRef = useRef(null)
  const sectionRef = useRef(null)
    const titleRef = useRef(null)
    const textRef = useRef(null)

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
  })

  useGSAP(() => {
    // @ts-expect-error
    const title = new SplitType(titleRef.current, {
        types: 'lines, words',
        lineClass: 'line'
    })
    const tl = gsap.timeline({})
    
    gsap.set('.line', {
        overflow: 'hidden',
        fontKerning: "none"
    })

    gsap.set(title.lines, {
        fontKerning: "none"
    })

    tl.from(title.words, {
        opacity: 0,
        y: 100,
        stagger: 0.01,
        delay:0.2,
        duration: 1.2,
        ease: 'power2.out',
    })

    tl.from(textRef.current, {
        opacity: 0,
        duration: 3,
        ease: 'power2.out',
    }, '-=1')

    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom bottom',
        endTrigger: document.body,
        scrub: true,
      },
      y: -500,
    })

    return () => {
        title.revert()
    }
  })

  return (
    <section
      ref={sectionRef}
      className={`flex bg-gradient-to-b from-black to-green flex-col items-center px-5 md:px-20 justify-center h-screen relative`}
    >
      <div className="max-w-4xl flex flex-col space-y-5 relative z-20">
        <h1 ref={titleRef} className="text-5xl text-light-cyan font-black md:text-7xl xl:text-8xl">
          {about.hero.title}
        </h1>
        <p ref={textRef} className="text-lg text-white">{about.hero.text}</p>
      </div>
      <Image
        ref={imageRef}
        src="/media/About_Mission_Morph_Digital_Marketing_Agency.webp"
        alt="About Mission Morph Digital Marketing Agency"
        width={1200}
        height={700}
        className="fixed top-0 z-10 right-0 w-full h-screen object-cover mix-blend-darken"
      />
    </section>
  )
}
