'use client'

import Image from "next/image"
import { faq } from "@/content/content"
import gsap from "gsap"
import { useRef } from "react"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import useIsomorphicLayoutEffect from "@/lib/isomorphicEffect"
import SplitType from "split-type"
import { useGSAP } from "@gsap/react"

export const Hero = () => {
    const sectionRef = useRef<HTMLElement>(null)
    const headingRef = useRef<HTMLHeadingElement>(null)
    const paragraphRef = useRef<HTMLParagraphElement>(null)

    useIsomorphicLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
    })

    useGSAP(() => {
        // @ts-expect-error
        const title = new SplitType(headingRef.current, {
            types: 'lines,words',
            lineClass: 'line'
        })

        gsap.set('.line', {
            overflow: 'hidden',
            fontKerning: 'none'
        })

        gsap.set(title.lines, {
            fontKerning: 'none'
        })

        const tlText = gsap.timeline({})

        tlText.from(title.words, {
            opacity: 0,
            y: 100,
            stagger: 0.01,
            delay: 0.2,
            duration: 1.5,
            ease: 'power3.out',
        })

        tlText.from(paragraphRef.current, {
            opacity: 0,
            duration: 2,
            ease: 'bounce1.out',
        }, '-=1')

        return () => {
            title.revert()
        }
    }) 
  return (
        <section ref={sectionRef} className='flex bg-gradient-to-b from-light-cyan to-gray flex-col items-center p-5 md:p-10 min-h-screen h-full relative'>
            <div className="max-w-5xl w-full flex flex-col space-y-10 relative md:pt-20">
            <Image src={faq.image} alt={faq.alt} width={720} height={520} 
                className="md:absolute md:right-0 md:-top-20  lg:top-1/4 -mb-20 md:-mb-0 z-0 md:object-cover md:h-80 w-auto"
            />
                <h1 ref={headingRef} className="text-5xl text-black font-black md:text-7xl relative z-10">{faq.title}</h1>
                <div ref={paragraphRef} className="text-xl max-w-2xl text-black font-medium relative z-10" dangerouslySetInnerHTML={{__html:faq.text}}></div>
            </div>
        </section>  
    )
}
