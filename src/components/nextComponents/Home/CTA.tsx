'use client'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import SplitType from 'split-type'
import { useRef } from 'react'

import Image from 'next/image'
import { home } from '../../../content/content.js'
import SubscribePopup from '../SubscribePopup'

export const CTA = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLHeadingElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)
  const imgBgRef = useRef(null)
  const imgFgRef = useRef(null)

  useGSAP(() => {
    // @ts-expect-error
    const title = new SplitType(headerRef.current, {
      types: 'lines,words',
      lineClass: 'line',
    })
    // @ts-expect-error
    const text = new SplitType(textRef.current, {
      types: 'lines,words',
      lineClass: 'line',
    })

    gsap.set('.line', {
      overflow: 'hidden',
      fontKerning: 'none',
    })

    gsap.set(title.lines, {
      fontKerning: 'none',
    })

    const tlText = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: '+=300 bottom',
        end: 'bottom bottom',
        scrub: 2,
      },
    })

    tlText.from(title.words, {
      opacity: 0,
      y: 100,
      stagger: 0.01,
      delay: 0.2,
      duration: 1.5,
      ease: 'power3.out',
    })

    tlText.from(
      text.words,
      {
        opacity: 0,
        y: 100,
        stagger: 0.01,
        duration: 1,
        ease: 'bounce1.out',
      },
      '-=1.2',
    )

    const tlImg = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.5,
      },
    })

    tlImg.fromTo(
      imgFgRef.current,
      {
        y: -65,
      },
      {
        y: 65,
      },
      0,
    )
    tlImg.fromTo(
      imgBgRef.current,
      {
        y: -40,
      },
      {
        y: 40,
      },
      0,
    )

    return () => {
      title.revert()
      text.revert()
    }
  })


  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-magenta to-yellow flex pb-40 md:pb-60 pt-20 md:pt-40 p-6 flex-col items-center justify-center">
      <div className="max-w-3xl space-y-8 flex flex-col relative">
        <h2 ref={headerRef} className="text-white text-3xl md:text-4xl font-black uppercase leading-snug lg:text-7xl relative z-10 pb-40 md:pb-0">
          {home.cta.title}
        </h2>
        <p ref={textRef} className="text-white text-lg relative z-10 max-w-xl">{home.cta.text}</p>
        <SubscribePopup
          style={`  transition-all bg-magenta text-white hover:ring-2 hover:ring-magenta hover:bg-cyan w-fit duration-500`}
          hasMessage
          title="Free consultation request"
          openText="Request a free consultation"
        />
        <Image
          ref={imgBgRef}
          className="absolute right-0 top-0 md:top-auto md:-bottom-40 xl:-bottom-20 w-52 md:w-72"
          src={home.cta.imageBg}
          alt={home.cta.altBg}
          width={300}
          height={534}
        />
        <Image
          ref={imgFgRef}
          className="absolute right-0 top-0 md:top-auto md:-bottom-40 xl:-bottom-20 w-52 md:w-72"
          src={home.cta.image}
          alt={home.cta.alt}
          width={300}
          height={534}
        />
      </div>
    </section>
  )
}
