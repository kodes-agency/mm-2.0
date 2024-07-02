import { Button } from '@/elements/nextElements/Button'
import { LandingButton } from '@/elements/nextElements/LandingButton'
import { getStyle } from '@/functions/styleTheSection'

type Statistics = {
  content: {
    hasTitle?: ('yes' | 'no') | null
    hasSubtitle?: ('yes' | 'no') | null
    hasButton?: ('yes' | 'no') | null
    title?: string | null
    subtitle?: string | null
    buttonType?: ('cta' | 'link') | null
    buttonText: string
    ctaTitle?: string | null
    ctaHasMessage?: boolean | null
    ctaHasBudget?: boolean | null
    buttonLink?: string | null
    statistic: {
      prefix?: string | null
      number: string
      suffix?: string | null
      description: string
      id?: string | null
    }[]
  }
  style: {
    style: 'dark-purple' | 'light-purple' | 'blue' | 'white' | 'black' | 'red' | 'cyan' | 'orange'
  }
  id?: string | null
  blockName?: string | null
  blockType: 'statistics'
}

export const Statistics = ({ block }: { block: Statistics }) => {
  return (
    <section
      className={`${getStyle(
        block.style.style,
      )} flex flex-col items-center justify-center py-20 px-6 md:px-10 space-y-10`}
    >
      <div className="flex flex-col space-y-5">
        {block.content.hasTitle === 'yes' && (
          <h2 className="font-bold text-center text-3xl md:text-4xl ">{block.content.title}</h2>
        )}
        {block.content.hasSubtitle === 'yes' && (
          <p className="text-center text-lg  max-w-4xl">{block.content.subtitle}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-flow-col md:auto-cols-fr  w-full justify-center gap-10 md:gap-20 max-w-5xl">
        {block.content.statistic.map((stat, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <div className="flex items-baseline space-x-2">
              <p className="text-lg  font-bold whitespace-nowrap">{stat.prefix || ''}</p>
              <h4 className="text-6xl  font-bold">{stat.number}</h4>
              <p className="text-lg  font-bold whitespace-nowrap">{stat.suffix || ''}</p>
            </div>
            <p className=" text-center uppercase">{stat.description}</p>
          </div>
        ))}
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
