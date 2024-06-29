'use client'

import { Service } from '@/payload-types'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { Button } from '@/elements/nextElements/Button'
import SplitType from 'split-type'

export const Landings = ({
  service,
  style,
}: {
  service: Service
  style: { highlightColor: string; bgColorFrom: string; bgColorTo: string }
}) => {
  const sectionRef = useRef<HTMLElement | any>('')
  const headerRef = useRef<HTMLElement | any>('')
  const paraRef = useRef<HTMLElement | any>('')
  const wrapperRef = useRef<HTMLElement | any>('')

  useGSAP(() => {
    const title = new SplitType(headerRef.current, {
      types: 'lines,chars',
    })

    gsap.set(title.chars, {
        lineHeight: 1.2
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: paraRef.current,
        start: '+=300 bottom',
      },
    })

    tl.from(paraRef.current, {
      opacity: 0,
      duration: 2,
      ease: 'power3.out',
    })

    gsap.from(title.chars, {
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: '+=100 bottom',
        end: 'bottom -=200',
        scrub: 2,
      },
      opacity: 0,
      stagger: 0.01,
      duration: 1.5,
      ease: 'power3.out',
    })
  })

  return (
    <>
      {service.servicePage.landing && (
        <section
          ref={sectionRef}
          className={`bgChange flex flex-col items-center px-5 md:px-20 justify-center min-h-screen pb-40 relative space-y-10`}
        >
          <div ref={wrapperRef} className="flex flex-col max-w-4xl space-y-10">
            <h2
              ref={headerRef}
              className=" text-white font-bold text-5xl lg:text-6xl "
              style={{ color: style.highlightColor }}
            >
              <strong className=" text-white font-black">Hey there!</strong> Do you know that, we
              focus on real problems, so that you get working solutions.
            </h2>
            <p ref={paraRef} className="text-white text-lg font-medium">
              We thrive in the process of solving industry wide problems for our clients. You can make
              your business grow, while our{' '}
              <strong style={{ color: style.highlightColor }} className=" uppercase font-bold">
                {service.label}
              </strong>{' '}
              experts deal with the technicalities. Check out some of our highlighted industry
              specific offers:
            </p>
          </div>
          <div className="flex flex-col max-w-4xl w-full">
            {service.servicePage.landing.map((land, i) => (
              <article key={i} className="">
                <div className="grid grid-cols-2 md:grid-cols-4 border-t gap-4 md:gap-0 py-2 border-white">
                  <div className="col-span-2 flex items-center font-bold text-lg">
                    {/* @ts-expect-error */}
                    <p className="text-white">{land.title}</p>
                  </div>
                  <div className="md:ml-10 flex items-center">
                    {/* @ts-expect-error */}
                    <p className="text-white capitalize">{land.category}</p>
                  </div>
                  <div className="flex items-center justify-end">
                    <Button
                      text="Read More"
                      // @ts-expect-error
                      link={'/landing/' + land.slug}
                      style="bg-white text-black hover:bg-black hover:text-white hover:ring-4 hover:ring-white transition-all duration-300"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </>
  )
}
