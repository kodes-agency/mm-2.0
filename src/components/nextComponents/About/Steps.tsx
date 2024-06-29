'use client'

import gsap from 'gsap'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { about } from '@/content/content'
import SplitType from 'split-type'
import SubscribePopup from '../SubscribePopup'

export const Steps = () => {
  const sqareRef = useRef(null)
  const sectionRef = useRef(null)
  const textRef = useRef(null)
  const endTriggerRef = useRef(null)
  const headerRef = useRef(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()
    const steps = gsap.utils.toArray('.step')
    // @ts-expect-error
    const header = new SplitType(headerRef.current, { type: 'lines, words', linesClass: 'line'})

    gsap.set('.line', {
        overflow: 'hidden',
        fontKerning: 'none',
        }
    )

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        // @ts-expect-error
        end: `+=${sectionRef.current.offsetHeight}`,
        scrub: 1,
        pin: sqareRef.current,
        onUpdate: (self: any) => {
          if (self.progress > 0.9) {
            gsap.to(textRef.current, {
              innerText: 'success',
            })
          } else {
            gsap.to(textRef.current, {
              innerText: 'your project',
            })
          }
        },
      },
    })

    steps.forEach((step) => {
      mm.add('(min-width: 768px)', () => {
        // @ts-expect-error
        gsap.from(step, {
          scrollTrigger: {
            trigger: step,
            start: 'top center',
            end: 'top top',
            scrub: 1,
          },
          y: 100,
          opacity: 0,
          duration: 1.5,
          ease: 'power2.out',
        })
      })
      mm.add('(max-width: 767px)', () => {
        // @ts-expect-error
        gsap.from(step, {
          scrollTrigger: {
            trigger: step,
            start: 'top bottom',
            end: 'top top',
            scrub: 1,
          },
          y: 100,
          opacity: 0,
          duration: 1.5,
          ease: 'power2.out',
        })
      })
    })

    mm.add('(min-width: 768px)', () => {
      tl.to(
        sqareRef.current,
        {
          rotate: 360,
          scale: 2,
          borderRadius: '100%',
        },
        0,
      )
      tl.to(
        textRef.current,
        {
          rotate: -360,
        },
        0,
      )
    })

    mm.add('(max-width: 767px)', () => {
      tl.to(sqareRef.current, {
        rotate: 360,
        scale: 1.5,
        borderRadius: '100%',
      })
      tl.to(
        textRef.current,
        {
          rotate: -360,
        },
        0,
      )
    })

    gsap.from(header.words, {
        scrollTrigger: {
            trigger: headerRef.current,
            start: 'bottom bottom ',
            end: 'top top',
            scrub: 1,
        },
        opacity: 0,
        y: 100,
        stagger: 0.01,
        delay: 0.2,
        duration: 1.2,
        ease: 'power2.out',
        })

    return () => {
        header.revert()
    }

  })

  return (
    <section
      className={`flex bg-gradient-to-b from-green to-dark-purple flex-col items-center justify-center md:px-10 min-h-screen`}
    >
      <div ref={sectionRef} className="relative flex items-center justify-center max-w-7xl">
        <div className="grid grid-cols-1 gap-10 md:gap-0 pl-20 pr-5 md:pr-0 md:pl-0 relative z-20">
          {about.steps.map((step, index) => (
            <div
              key={index}
              className={`step flex flex-col space-y-5 pl-5 md:w-1/2 ${
                index % 2 === 0
                  ? 'md:items-end md:pr-20 xl:pr-40'
                  : 'md:items-start md:translate-x-full md:pl-20 xl:pl-40'
              }`}
            >
              <h3
                className={`text-light-cyan text-7xl lg:text-9xl font-black ${
                  index % 2 === 0 ? 'md:text-end' : 'md:text-start'
                }`}
              >
                {index + 1}.
              </h3>
              <h4
                className={`text-light-cyan text-2xl max-w-96 lg:text-4xl font-black ${
                  index % 2 === 0 ? 'md:text-end' : 'md:text-start'
                }`}
              >
                {step.title}
              </h4>
              <p
                className={`text-sm md:text-base text-white ${
                  index % 2 === 0 ? 'md:text-end' : 'md:text-start'
                }`}
              >
                {step.text}
              </p>
            </div>
          ))}
        </div>

        <div
          ref={sqareRef}
          className="absolute top-0 left-3.5 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center p-1 bg-light-cyan w-14 h-14 md:w-20 md:h-20 z-30 text-center "
        >
          <p ref={textRef} className="font-bold uppercase text-[10px] md:text-xs text-dark-purple">
            your project
          </p>
        </div>

        <div className="absolute left-10 md:left-auto top-0 w-0.5 h-full bg-light-cyan"></div>
      </div>
      <div
        ref={endTriggerRef}
        className="flex flex-col md:items-center max-w-7xl w-full z-20 pb-20 space-y-6"
      >
        <div className="translate-x-10 md:translate-x-0  w-0.5 h-16 md:h-28 bg-light-cyan"></div>
        <div className="p-5 flex flex-col space-y-10">
          <h3 ref={headerRef} className=" text-light-purple text-7xl md:text-center lg:text-9xl font-black">
            {about.cta.title}
          </h3>
          <p className="max-w-lg w-full text-white text-lg uppercase">{about.cta.text}</p>
          <div className="w-full flex items-center justify-center">
          <SubscribePopup 
            title='Free consultation request'
            openText='Schedule a free consultation today'
            hasBudget
            hasMessage
            style='bg-light-cyan text-dark-purple hover:bg-light-purple hover:text-light-cyan ring-2 ring-light-cyan  transition-all duration-300'
          />
          </div>
        </div>
      </div>
    </section>
  )
}
