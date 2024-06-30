'use client'

import { Stats } from '@/elements/nextElements/Stats'
import { Service } from '@/payload-types'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import SplitType from 'split-type'

export const Statistics = ({
  service,
  style,
}: {
  service: Service
  style: { highlightColor: string; bgColorFrom: string; bgColorTo: string }
}) => {

  const sectionRef = useRef<HTMLElement | any>('')
  const headerRef = useRef<HTMLElement | any>('')

  
  useGSAP(() => {
    const title = new SplitType(headerRef.current, {
      types: 'lines,words',
      lineClass: 'line',
    })
  
    gsap.set('.line', {
      overflow: 'hidden',
      fontKerning: 'none',
    })

    gsap.set(title.words, {
      lineHeight: 1.3,
    }
    )

    gsap.from(title.words, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'top top',
        scrub: 1,
      },
      y: 100,
      opacity: 0,
      duration: 1,
    })
  })


  return (
    <section
      ref={sectionRef}
      id="statistics"
      className={`flex bg-white flex-col items-center px-5 md:px-20 py-20 justify-center min-h-screen relative space-y-20`}
    >
      <h2
        ref={headerRef}
        className="serviceStatsHeaderEl text-black text-4xl md:text-7xl md:text-center max-w-4xl font-bold"
      >
        Here are the industry numbers that
        <strong className="font-black" style={{ color: style.highlightColor }}>
          matter:
        </strong>
      </h2>
      <div className="max-w-5xl flex flex-col items-center space-y-40">
        {service.servicePage.statistics &&
          service.servicePage.statistics.map((statistic, id) => (
            <Stats
              key={id}
              id={id}
              number={statistic.number}
              color={style.highlightColor}
              text={statistic.text}
            />
          ))}
      </div>
    </section>
  )
}
