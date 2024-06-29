'use client'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import SplitType from 'split-type'
import { useRef } from 'react'
import Image from "next/image"
import { home } from "@/content/content"
import useIsomorphicLayoutEffect from "@/lib/isomorphicEffect"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

export const Hero = () => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const headerRef = useRef<HTMLHeadingElement>(null)
    const textRef = useRef<HTMLParagraphElement>(null)
    const imgRef = useRef(null)

    useIsomorphicLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
    })

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

        const tlText = gsap.timeline()

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
                delay: 0.2,
                duration: 1.5,
                ease: 'power3.out',
            },
            '-=1.2',
        )

        const tlImg = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: 0.5,
            },
        })

        tlImg.to(imgRef.current, {
            scale: 0.9,
        })

        return ()=>{
            title.revert()
            text.revert()
        }
    }
)
  return (
        <section ref={sectionRef} className='bg-gray flex flex-col items-center justify-center h-[80vh] relative'>
            <div className="max-w-4xl flex flex-col space-y-5 relative z-10 px-5 md:px-10">
                <h1 ref={headerRef} className="text-5xl text-white text-center font-bold md:text-7xl xl:text-8xl font-serif">{home.blog.title}</h1>
                <p ref={textRef} className="text-xl text-white text-center">{home.blog.text}</p>
            </div>
            <Image ref={imgRef} src={home.blog.image} alt={home.blog.alt} width={1024} height={750} 
                className="absolute top-0 left-0 z-0 w-full h-full object-cover object-top grayscale"
            />
        </section>  
    )
}
