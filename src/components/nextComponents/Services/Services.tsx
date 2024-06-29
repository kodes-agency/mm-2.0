'use client'

import { Service } from '@/payload-types'
import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

export const Services = ({
  service,
  style,
}: {
  service: Service
  style: { highlightColor: string; bgColorFrom: string; bgColorTo: string }
}) => {

  const sectionRef = useRef<HTMLElement | any>('')

  useGSAP(() => {
    const serviceEls: HTMLElement[] = gsap.utils.toArray('.serviceCard')

    serviceEls.forEach((serviceEl, i) => {
      gsap.from(serviceEl, {
        scrollTrigger: {
          trigger: serviceEl,
          start: 'center bottom',
          end: 'bottom bottom',
          scrub: 1,
        },
        opacity: 0,
        duration: 1,
        stagger: 0.5,
      })
      })
      })


  return (
    <>
      <section
        ref={sectionRef}
        className={`bgChange flex flex-col items-center px-5 md:px-20 justify-center py-32 min-h-screen relative`}
      >
        <div className=" max-w-4xl flex-col items-center">
          {service.servicePage.services.map((service, id) => (
            <article key={id} className="serviceCard grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className=" md:col-span-1">
                <h2 className="text-white font-extrabold text-2xl lg:text-3xl">{service.title}</h2>
              </div>
              <div className="md:col-span-2 pl-5 md:pl-0 flex flex-col justify-between">
                <div className="flex flex-col space-y-4">
                  <h3 className="text-white font-bold text-xl">{service.subtitle}</h3>
                  <p className="text-white">{service.description}</p>
                </div>
                <div className="flex flex-col pt-12">
                  {service.features?.map((feature, id) => (
                    <div key={id} className="flex items-center space-x-2">
                      <p className=" font-medium" style={{ color: style.highlightColor }}>
                        {feature.feature}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="h-px w-full my-10 bg-white"></div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
