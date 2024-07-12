'use client'

import gsap from 'gsap'
import { useGSAP } from "@gsap/react"
import SplitType from 'split-type'
import useIsomorphicLayoutEffect from "@/lib/isomorphicEffect"
import { useRef, useState } from "react"
import Image from "next/image"
import { home } from "../../../content/content.js"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"


export const Hero = () => {
    const sectionRef = useRef<HTMLElement>(null)
    const headingRef = useRef<HTMLHeadingElement>(null)
    const paragraphRef = useRef<HTMLParagraphElement>(null)
    const invisibleRef = useRef<HTMLDivElement>(null)

    useIsomorphicLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
    })

    useGSAP(() => {
        const spinners = gsap.utils.toArray('.spinner')

        const title = new SplitType('.headingEl', {
            types: 'lines,words',
            lineClass: 'line'
        })
        const text = new SplitType('.paraEl', {
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

        tlText.set(invisibleRef.current, {
            autoAlpha: 1
        })

        tlText.from(title.words, {
            opacity: 0,
            y: 100,
            stagger: 0.01,
            delay: 0.2,
            duration: 1.5,
            ease: 'power3.out',
        })

        tlText.from(text.words, {
            opacity: 0,
            y: 100,
            stagger: 0.01,
            duration: 1,
            ease: 'bounce1.out',
        }, '-=1.2')

        return () => {
            title.revert()
            text.revert()
        }
    }) 



    return (
        <section className=" bg-gradient-to-b from-dark-purple to-medium-purple h-screen flex flex-col items-center justify-center p-6 md:p-10 relative z-0">
            <div className="flex flex-col justify-between h-full max-w-5xl relative z-20">
                <div></div>
                <div ref={invisibleRef} className="space-y-5 flex flex-col items-center invisible">
                    <h1  className="headingEl text-4xl text-center md:text-6xl whitespace-pre-line uppercase max-w-2xl lg:text-7xl font-black transition-all text-light-cyan">{home.hero.title}</h1>
                    <p className="paraEl text-2xl md:text-3xl whitespace-pre-line font-base text-center max-w-2xl transition-all text-light-cyan">{home.hero.subtitle}</p>
                </div>
                <p className=" text-light-cyan underline text-sm w-full text-center">{home.hero.cta}</p>
            </div>
                <Image priority width="357" height="357" src="/media/mission-morph-large-vector.webp" alt="Mission Morph vector image" className="spinner animate-[spin_150000ms_infinite] absolute top-16 md:top-20 left-10 overflow-hidden w-52 h-auto md:w-80 md:left-40 z-0"/>
                <Image priority width="218" height="218" src="/media/mission-morph-medium-vector.webp" alt="Mission Morph vector image" className="spinner animate-[spin_100000ms_infinite] mix-blend-luminosity w-40 h-auto absolute bottom-32 md:bottom-40 overflow-hidden right-32 md:right-40 z-10"/>
                <Image priority width="97" height="97" src="/media/mission-morph-small-vector.webp" alt="Mission Morph vector image " className="spinner animate-[spin_60000ms_infinite] mix-blend-luminosity absolute bottom-10 right-10 w-12 h-auto md:w-auto md:right-auto md:left-96 z-0"/>
        </section>
    )
}