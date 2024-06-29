'use client'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import SplitType from 'split-type'
import { useRef } from 'react'
import Image from 'next/image'
import { home } from '../../../content/content.js'
import { Button } from '@/elements/nextElements/Button'

export const About = () => {
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
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-medium-purple to-cyan py-20 flex flex-col justify-center items-center"
    >
      <div className="p-6 max-w-3xl space-y-10 flex flex-col">
        <div className="-mb-[105px] ml-auto  lg:-mb-[150px] md:-ml-[120px] lg:-ml-[200px] xl:-ml-[280px] w-56 md:w-80 h-52 md:h-64 z-0 relative">
          <Image
            ref={imgBgRef}
            priority
            width="224"
            height="224"
            src="/media/Business_Transformation_Mission_Morph_Digital_Marketing_Agency-bg.webp"
            alt="Business Transformation Mission Morph Digital Marketing Agency"
            className="absolute w-56 md:w-80"
          />
          <Image
            ref={imgFgRef}
            priority
            width="224"
            height="224"
            src="/media/Business_Transformation_Mission_Morph_Digital_Marketing_Agency-img.webp"
            alt="Business Transformation Mission Morph Digital Marketing Agency"
            className="absolute w-56 md:w-80"
          />
        </div>
        <h2
          ref={headerRef}
          className="text-5xl md:text-7xl uppercase font-black text-light-cyan relative z-1"
        >
          {home.about.title}
        </h2>
        <p ref={textRef} className="text-light-cyan text-lg max-w-md font-light relative z-1">
          {home.about.text}
        </p>
        <Button
          link="/about"
          text={home.about.button}
          style="text-light-cyan bg-dark-purple hover:bg-light-purple hover:ring-4 hover:ring-dark-purple hover:text-dark-purple transition-all duration-300"
        />
      </div>
    </section>
  )
}
