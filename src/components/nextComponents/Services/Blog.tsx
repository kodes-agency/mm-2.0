'use client'

import { Service } from '@/payload-types'
import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { BlogCard } from '@/elements/nextElements/BlogCard'
import SplitType from 'split-type'

export const Blog = ({
  service,
  style,
}: {
  service: Service
  style: { highlightColor: string; bgColorFrom: string; bgColorTo: string }
}) => {
  const sectionRef = useRef<HTMLElement | any>('')
  const headerRef = useRef<HTMLElement | any>('')

  useGSAP(() => {
    const title = new SplitType('.serviceBlogHeadingEl', {
      types: 'lines,words',
      lineClass: 'line',
    })

    gsap.set('.line', {
      overflow: 'hidden',
      fontKerning: 'none',
    })

    gsap.set(title.words, {
      lineHeight: 1.2,
    })

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
    return () => {
      title.revert()
    }
  })

  return (
    <>
      {service.servicePage.blogs && (
        <section
          ref={sectionRef}
          className="bg-white flex flex-col items-center py-40 md:min-h-screen space-y-10 px-5 md:px-10"
        >
          <h2 className="serviceBlogHeadingEl text-4xl md:text-5xl max-w-4xl font-bold">
            Our job is to inform <strong style={{ color: style.highlightColor }}>you</strong> about
            industry trends, so you stay ahead of the competition.
          </h2>
          <div className="max-w-4xl gap-10 grid grid-cols-1 md:grid-cols-2">
            {service.servicePage.blogs.map((blog, index) => (
              // @ts-ignore
              <BlogCard key={index} blog={blog} blacked />
            ))}
          </div>
        </section>
      )}
    </>
  )
}
