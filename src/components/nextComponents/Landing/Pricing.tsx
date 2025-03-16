'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { PricingCard } from '@/elements/nextElements/PricingCard'

type Pricing = {
  content?: {
    hasTitle?: ('yes' | 'no') | null
    hasSubtitle?: ('yes' | 'no') | null
    title?: string | null
    subtitle?: string | null
    packages?:
      | {
          isDiscounted?: ('yes' | 'no') | null
          hasSecondaryButton?: ('yes' | 'no') | null
          isMostPopular?: ('yes' | 'no') | null
          title: string
          description: string
          regularPrice: string
          discountedPrice?: string | null
          buttonType?: ('cta' | 'link') | null;
          buttonText: string;
          ctaTitle?: string | null;
          ctaHasMessage?: boolean | null;
          ctaHasBudget?: boolean | null;
          buttonLink?: string | null;
          features?:
            | {
                feature: string
                id?: string | null
              }[]
            | null
          services?:
            | {
                service: string
                id?: string | null
              }[]
            | null
          id?: string | null
        }[]
      | null
  }
  style: {
    style: 'dark-purple' | 'light-purple' | 'blue' | 'white' | 'black' | 'red' | 'cyan' | 'orange';
  };
  id?: string | null
  blockName?: string | null
  blockType: 'pricing'
}

export const Pricing = ({ block }: { block: Pricing }) => {
  return (
    <section
    className={`bg-light-cyan flex flex-col items-center justify-around py-20 px-6 md:px-10`}
    >
        <div className='max-w-6xl w-full space-y-5 flex items-center flex-col'>
          {block.content?.hasTitle === 'yes' && (
            <h2 className='text-4xl md:text-5xl text-center text-dark-purple font-bold'>{block.content?.title}</h2>
          )}
          {block.content?.hasSubtitle === 'yes' && (
            <p className='text-xl max-w-3xl text-center text-dark-purple pb-20'>{block.content?.subtitle}</p>
          )}
        <Carousel className=' w-full'>
            <CarouselContent className='lg:-ml-10'>
                {(block.content?.packages ?? []).map((packageItem, index) => (
                    <CarouselItem key={index} className="basis-1/1 md:basis-1/2 xl:basis-1/3 lg:pl-10">
                        <PricingCard pricing={packageItem} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className='left-1/2 -ml-10 -translate-x-1/2 -top-10 border text-white border-dark-purple' />
            <CarouselNext className='right-1/2 -mr-10 translate-x-1/2 -top-10 border text-white border-dark-purple' />
        </Carousel>
        </div>
    </section>
  )
}
