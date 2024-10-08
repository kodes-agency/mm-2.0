import { Button } from '@/elements/nextElements/Button'
import { LandingButton } from '@/elements/nextElements/LandingButton'
import { getStyle } from '@/functions/styleTheSection'
import { Media } from '@/payload-types'
import Image from 'next/image'

type CTA = {
  content: {
    title: string
    text: string
    buttonType?: ('cta' | 'link') | null
    buttonText: string
    ctaTitle?: string | null
    ctaHasMessage?: boolean | null
    ctaHasBudget?: boolean | null
    buttonLink?: string | null
    image: string | Media
  }
  style: {
    style: 'dark-purple' | 'light-purple' | 'blue' | 'white' | 'black' | 'red' | 'cyan' | 'orange'
  }
  id?: string | null
  blockName?: string | null
  blockType: 'cta'
}

export const CTA = ({ block }: { block: CTA }) => {
  return (
    <section
      className={`${getStyle(
        block.style.style,
      )} flex py-20 min-h-[700px] p-6 flex-col items-center`}
    >
      <div className="max-w-3xl space-y-8 flex flex-col relative">
        <h2 className=" text-3xl md:text-4xl font-black uppercase leading-snug lg:text-7xl relative z-10 pb-40 md:pb-0">
          {block.content.title}
        </h2>
        <p className=" text-lg relative z-10 font-medium max-w-xl">{block.content.text}</p>
        <LandingButton
          type={block.content.buttonType}
          buttonText={block.content.buttonText}
          buttonLink={block.content.buttonLink}
          ctaHasMessage={block.content.ctaHasMessage}
          ctaHasBudget={block.content.ctaHasBudget}
          ctaHeading={block.content.ctaTitle}
        />
        <Image
          // @ts-expect-error
          src={block.content.image.url} alt={block.content.image.alt}
          className="absolute right-0 top-0 md:bottom-0 w-52 md:w-72"
          width={300}
          height={534}
        />
      </div>
    </section>
  )
}
