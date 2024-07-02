'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import Autoplay from "embla-carousel-autoplay"
import { ReviewCard } from '@/elements/nextElements/Review'
import { getStyle } from '@/functions/styleTheSection'
import { Review } from '@/payload-types'
import React from 'react'
import { tr } from 'payload/i18n/tr'

type Reviews = {
  content: {
    title: string
    reveiws: (Review)[]
  }
  style: {
    style: 'dark-purple' | 'light-purple' | 'blue' | 'white' | 'black' | 'red' | 'cyan' | 'orange';
  };
  id?: string | null
  blockName?: string | null
  blockType: 'review'
}

export const Reviews = ({ block }: { block: Reviews }) => {
    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter:true})
      )
  return (
    <section
      className={`${getStyle(block.style.style)} flex flex-col items-center justify-around pt-20 pb-10 px-6 md:px-10`}
    >
      <div className="max-w-5xl w-full flex items-center flex-col">
          <h2 className="text-4xl lg:text-5xl text-center text-dark-purple font-bold">
            {block.content.title}
          </h2>
        <Carousel 
            className=""
            opts={{
                slidesToScroll: 1,
                loop: true,
            }}
            // @ts-ignore
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}

        >
          <CarouselContent className="max-w-[50vw]">
            {(block.content.reveiws ?? []).map((review, index) => (
              <CarouselItem key={index} className="max-w-[90vw] md:max-w-[50vw]">
                {/* @ts-expect-error */}
                <ReviewCard text={review.text} name={review.name} title={review.title} style={block.style.style} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}
