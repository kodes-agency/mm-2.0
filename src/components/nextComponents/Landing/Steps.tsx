import { Button } from '@/elements/nextElements/Button'
import { LandingButton } from '@/elements/nextElements/LandingButton'
import { getStyle } from '@/functions/styleTheSection'
import { Media } from '@/payload-types'
import Image from 'next/image'

type Steps = {
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
    steps: {
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
  blockType: 'steps'
}

export const Steps = ({ block }: { block: Steps }) => {
  return (
    <section
      className={`${getStyle(
        block.style.style,
      )} flex flex-col items-center justify-center py-20 px-6 md:px-10 space-y-20`}
    >
      <div className="flex flex-col space-y-10">
        <div className="flex flex-col space-y-5">
          {block.content.hasTitle === 'yes' && (
            <h2 className="font-bold text-3xl text-center md:text-4xl">{block.content.title}</h2>
          )}
          {block.content.hasSubtitle === 'yes' && (
            <div
              className=" space-y-3"
              dangerouslySetInnerHTML={{ __html: block.content.subtitle_html || '' }}
            ></div>
          )}
        </div>
        <div className="relative flex items-center justify-center max-w-4xl">
          <div className="grid grid-cols-1 gap-10 md:gap-0">
            {block.content.steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col space-y-2 pl-5 md:w-1/2 ${
                  index % 2 === 0
                    ? 'md:items-end pr-10'
                    : 'md:items-start md:translate-x-full md:pl-10'
                }`}
              >
                <h3
                  className={` text-6xl font-bold ${
                    index % 2 === 0 ? 'md:text-end' : 'md:text-start'
                  }`}
                >
                  {index + 1}.
                </h3>
                <h4
                  className={` text-2xl font-bold ${
                    index % 2 === 0 ? 'md:text-end' : 'md:text-start'
                  }`}
                >
                  {step.title}
                </h4>
                <p className={` ${index % 2 === 0 ? 'md:text-end' : 'md:text-start'}`}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <div className="absolute left-0 md:left-auto top-0 w-px h-full bg-light-purple"></div>
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
        />
      )}
    </section>
  )
}
;``
