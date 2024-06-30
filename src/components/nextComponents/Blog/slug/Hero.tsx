'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react'

import Image from 'next/image'
import { Blog } from '@/payload-types'

export const Hero = ({ blog }: { blog: Blog }) => {
  function getReadTime(text: string) {
    const removeHtmlTags = text.replace(/<[^>]*>?/gm, '')
    const wordsPerMinute = 200
    const words = text.split(' ').length
    return Math.ceil(words / wordsPerMinute)
  }

  return (
    <section className="flex bg-white flex-col items-center justify-center pt-20 md:pt-40 pb-10 md:pb-20 space-y-14">
      <div className="max-w-4xl flex flex-col space-y-10 md:space-y-14 px-5 md:px-10">
        <div className="grid grid-cols-3">
          <div className="flex gap-2 flex-wrap">
            {blog.content.category.map((category, id) => (
              <p
                key={id}
                className="text-xs text-black capitalize bg-light-cyan p-1 rounded-sm whitespace-nowrap"
              >
                {category.replace(/-/g, ' ')}
              </p>
            ))}
          </div>

          <time
            className="text-black text-center text-sm whitespace-nowrap"
            dateTime={new Date(blog.createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
            })}
          >
            {new Date(blog.createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
            })}
          </time>

          <p className="text-black text-sm text-end whitespace-nowrap">
            {getReadTime(blog.content.content_html || '')} min read
          </p>
        </div>

        <h1 className="text-4xl text-black md:text-6xl lg:text-7xl">{blog.title}</h1>
        <p className="text-black">{blog.content.description}</p>
      </div>
      <Image
        // @ts-expect-error
        src={blog.content.image.url} alt={blog.content.image.alt}
        priority
        width={1024}
        height={750}
        className=" w-full md:h-[65vh] object-cover"
      />
    </section>
  )
}
