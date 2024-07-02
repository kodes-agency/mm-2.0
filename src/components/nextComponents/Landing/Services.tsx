'use client'

import { Button } from '@/elements/nextElements/Button'
import { LandingButton } from '@/elements/nextElements/LandingButton'
import { Media } from '@/payload-types'
import Image from 'next/image'
import { useState, useEffect } from 'react'

type Services = {
  content: {
    hasTitle?: ('yes' | 'no') | null
    hasSubtitle?: ('yes' | 'no') | null
    hasButton?: ('yes' | 'no') | null
    title?: string | null
    subtitle?: {
      root: {
        type: string
        children: {
          type: string
          version: number
          [k: string]: unknown
        }[]
        direction: ('ltr' | 'rtl') | null
        format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | ''
        indent: number
        version: number
      }
      [k: string]: unknown
    } | null
    subtitle_html?: string | null
    buttonType?: ('cta' | 'link') | null
    buttonText: string
    ctaTitle?: string | null
    ctaHasMessage?: boolean | null
    ctaHasBudget?: boolean | null
    buttonLink?: string | null
    services: {
      icon?: string | Media | null
      title: string
      description: string
      id?: string | null
    }[]
  }
  style: {
    style: 'dark-purple' | 'light-purple' | 'blue' | 'white' | 'black' | 'red' | 'cyan' | 'orange'
  }
  id?: string | null
  blockName?: string | null
  blockType: 'services'
}

export const Services = ({ block }: { block: Services }) => {
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth)

      const handleResize = () => {
        setWindowWidth(window.innerWidth)
      }

      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])
  return (
    <section
      className={`bg-white flex flex-col items-center justify-center py-20 px-6 md:px-10 space-y-20`}
    >
      <div className="flex flex-col max-w-5xl space-y-10">
        <div className="flex flex-col space-y-5 max-w-3xl">
          {block.content.hasTitle === 'yes' && (
            <h2 className="font-bold text-3xl md:text-4xl text-dark-purple">
              {block.content.title}
            </h2>
          )}
          {block.content.hasSubtitle === 'yes' && (
            <div
              className="text-black space-y-3"
              dangerouslySetInnerHTML={{ __html: block.content.subtitle_html || '' }}
            ></div>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {block.content.services.map((service, index) => (
            <article
              className={`flex flex-col space-y-4 p-6 md:p-10 
                ${
                  windowWidth <= 768
                    ? index % 2 === 1
                      ? 'bg-[#E5E5E5]'
                      : ''
                    : [1, 2, 5, 6, 9, 10, 13, 14].includes(index)
                    ? 'md:bg-[#E5E5E5]'
                    : ''
                }`}
              key={index}
            >
              <Image
                // @ts-ignore
                src={service.icon.url} alt={service.icon.alt}
                className="fill-dark-purple w-12"
                width={60}
                height={60}
              />
              <h3 className="font-bold text-xl text-dark-purple">{service.title}</h3>
              <p className="text-black">{service.description}</p>
            </article>
          ))}
        </div>
      </div>

      {block.content.hasButton === 'yes' && (
        <LandingButton
          type={block.content.buttonType}
          buttonText={block.content.buttonText}
          buttonLink={block.content.buttonLink}
          ctaHasMessage={block.content.ctaHasMessage}
          ctaHasBudget={block.content.ctaHasBudget}
          ctaHeading={block.content.ctaTitle}
          style='bg-dark-purple text-white rounded-full p-1 w-fit text-sm font-semibold px-5 transition-all duration-300 ring-2 ring-light-purple hover:bg-light-purple hover:text-dark-purple hover:ring-dark-purple'
        />
      )}
    </section>
  )
}
;``
