'use client'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import SplitType from 'split-type'
import { useRef, useState } from 'react'
import Image from "next/image"
import { Service } from "@/payload-types.js"


export const Services = ({services} : {services: Service[]}) => {
    const [visibleService, setVisibleService] = useState(services[0].homePage.buttonText)
    const sectionRef = useRef<HTMLElement>(null)

    useGSAP(() => {
        const button = new SplitType('.serviceButton', {
            types: 'lines,words',
            lineClass: 'line',
        })

        gsap.set('.line', {
            overflow: 'hidden',
            fontKerning: 'none',
        })

        const tlImg = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.5,
            },
          })
      
          tlImg.fromTo(
            '.serviceImgFg',
            {
              y: -65,
            },
            {
              y:50,  
            },
            0,
          )
          tlImg.fromTo(
            '.serviceImgBg',
            {
              y: -40,
            },
            {
              y: 40,
            },
            0,
          )

        const tlText = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: '+=300 bottom',
                end: 'bottom bottom',
                scrub: 2,
            },
        })

        tlText.from(button.words, {
            opacity: 0,
            y: 100,
            duration: 1,
            stagger: 0.01,
            ease: 'power3.out',
        })

        tlText.from('.serviceText', {
            opacity: 0,
        }, '-=0.5')

        tlText.from('.serviceHeading', {
            opacity: 0,
        }, '-=0.5')

        return () => {
            button.revert()
        }
    })

    return (
        <section ref={sectionRef} className="bg-gradient-to-b from-cyan to-magenta pt-40 pb-20 md:min-h-[60vh] lg:min-h-screen flex flex-col items-center  px-6 md:px-20 relative">
            <div className="flex flex-col space-y-10 lg:space-y-20 max-w-5xl">
                {/* Heading */}
                <div className="relative z-10 pr-5 serviceHeading">
                    {services.map((service,id) => (
                        visibleService === service.homePage.buttonText && (<h2 key={service.homePage.buttonText + id*10} className="text-4xl uppercase leading-snug sm:text-5xl lg:text-7xl font-black text-light-cyan">{service.homePage.title}</h2>)
                    ))}
                </div>
                <div className="flex flex-col lg:flex-row lg:justify-between space-y-10 lg:space-y-0">
                {/* Buttons */}
                    <div className="flex flex-col items-start space-y-5 relative z-10">
                        {services.map((service, i) => (
                            <div key={i} className="w-fit">
                                <button onMouseOver={()=>{
                                    setVisibleService(service.homePage.buttonText)    
                                }} className={` ${visibleService === service.homePage.buttonText ? "opacity-100" : "opacity-50"}`}> <p className='serviceButton text-2xl lg:text-3xl uppercase text-start leading-snug font-black text-light-cyan'>{service.homePage.buttonText}</p> </button>
                                <div className='w-ful serviceText'>
                                    <div className={`h-1 w-full bg-medium-purple ${visibleService === service.homePage.buttonText ? "opacity-100" : "opacity-0"}`}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                {/* Text */}
                    <div className="flex flex-col items-start space-y-5 relative z-10 serviceText">
                        {services.map((service, i) => (
                            visibleService === service.homePage.buttonText
                            && <p key={i} className=" max-w-lg text-light-cyan text-lg">{service.homePage.text}</p>
                        ))}
                    </div>

                </div>
                {/* Image */}
                <div className="max-w-5xl w-full absolute top-0">
                    <div className='relative'>
                        {services.map((service, i) => (
                            <div key={i} className={`absolute right-12 top-20 lg:top-auto md:right-[20%] lg:right-[40%] ${visibleService === service.homePage.buttonText ? "opacity-100" : "opacity-0"} transition-opacity w-64 h-auto md:w-72`}>
                                    
                                    {
                                        service.homePage["image-bg"] &&
                                        // @ts-expect-error
                                        <Image className="serviceImgBg top-0 absolute" src={service.homePage['image-bg'].url} alt={service.homePage["image-bg"].alt} width={288} height={554} />
                                    }
                                    {/* @ts-expect-error */}
                                    <Image className="absolute serviceImgFg" src={service.homePage.image.url} alt={service.homePage.image.alt} width={288} height={554} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
} 