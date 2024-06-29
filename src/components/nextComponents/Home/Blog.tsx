'use client'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import SplitType from 'split-type'
import { useRef } from 'react'

import Image from "next/image"
import Link from "next/link"
import { home } from "../../../content/content.js"
import { Article } from "@/elements/nextElements/Blog"
import { Blog as BlogType } from '@/payload-types.js'

export const Blog = ({blogs}: {blogs: BlogType[]}) => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const headerRef = useRef<HTMLHeadingElement >(null)
    const textRef = useRef<HTMLParagraphElement>(null)
    const imgRef = useRef(null)
    
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
                start: '+=400 bottom',
                end: 'bottom bottom',
                scrub: 3,
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
                delay: 0.2,
                duration: 1.5,
                ease: 'power3.out',
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

        tlImg.fromTo(imgRef.current, {
            y: -20,
            scale: 1.05,
        }, {
            y: 0,
            scale: 0.9,
        })

        return ()=>{
            title.revert()
            text.revert()
        }
    })


    return (
        <section className="bg-black min-h-screen flex flex-col items-center overflow-hidden">
            <div ref={sectionRef} className="relative w-full flex flex-col items-center justify-center h-screen">
                <Image
                    ref={imgRef}
                    width="1045"
                    height='813'
                    data-speed="0.95"
                    src={home.blog.image}
                    alt={home.blog.alt}
                    className="w-full h-screen grayscale object-cover z-0 absolute top-0"
                />
                <div className="relative z-10 max-w-2xl space-y-10 px-10">
                    <h2 ref={headerRef} className="text-center font-serif text-white font-bold text-4xl md:text-6xl xl:text-8xl">{home.blog.title}</h2>
                    <p ref={textRef} className="text-center font-serif text-white text-xl">{home.blog.text}</p>
                </div>
            </div>
            <section className={`py-5 md:py-10 flex flex-col items-center w-full  px-5 md:px-10`}>
                <div className="max-w-5xl flex flex-col space-y-20 ">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* @ts-expect-error */}
                    {blogs.docs.map((blog: Blog, id) => (
                        <Article key={blog.id} blog={blog} id={id} style=" [&_h3]:text-light-purple [&_p]:text-white bg-dark-purple bg-opacity-20 hover:bg-dark-purple hover:bg-opacity-70 transition-all duration-300 p-5"/>
                    ))}
                    </div>
                </div>
            </section>
            <div className=" space-y-0.5 flex flex-col w-fit">
                <Link href="/blog" className="text-white text-xl md:text-2xl">{home.blog.button}</Link>
                <div className="w-full bg-medium-purple h-1"></div>
            </div>
        </section>
    )
}