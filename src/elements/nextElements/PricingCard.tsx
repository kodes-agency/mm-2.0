import { useState } from 'react'
import { LandingButton } from './LandingButton'

type PricingCard = {
  isDiscounted?: ('yes' | 'no') | null
  hasSecondaryButton?: ('yes' | 'no') | null
  isMostPopular?: ('yes' | 'no') | null
  title: string
  description: string
  regularPrice: string
  discountedPrice?: string | null
  buttonType?: ('cta' | 'link') | null
  buttonText: string
  ctaTitle?: string | null
  ctaHasMessage?: boolean | null
  ctaHasBudget?: boolean | null
  buttonLink?: string | null
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
}

export const PricingCard = ({ pricing }: { pricing: PricingCard }) => {
  return (
    <article
      className={`border border-dark-purple w-[82vw] md:w-[350px]  ${
        pricing.isMostPopular === 'yes' ? 'bg-white' : 'bg-[#F7F7F7]'
      } rounded-3xl h-fit box-content`}
    >
      <div className="space-y-5">
        <div className="flex flex-col space-y-2">
          <div className="flex justify-between items-center bg-light-purple rounded-t-3xl p-5 lg:p-8">
            <h2 className="text-2xl text-dark-purple font-bold">{pricing.title}</h2>
            {pricing.isMostPopular === 'yes' && (
              <p className="bg-dark-purple rounded-full py-1 px-2 text-xs text-white whitespace-nowrap font-semibold">
                Most popular
              </p>
            )}
          </div>
        </div>
        <div className='flex flex-col space-y-2 px-5 lg:px-8'>
          <p className="text-sm">{pricing.description}</p>
          <div className="flex flex-col space-y-2">
            <p className="text-3xl text-dark-purple font-bold">${pricing.regularPrice}</p>
            {/* @ts-ignore */}
            <p className="text-sm opacity-50">{pricing.priceDetails}</p>
          </div>
          <LandingButton
            type={pricing.buttonType}
            buttonText={pricing.buttonText}
            buttonLink={pricing.buttonLink}
            ctaHasMessage={pricing.ctaHasMessage}
            ctaHasBudget={pricing.ctaHasBudget}
            ctaHeading={pricing.ctaTitle}
            style='bg-dark-purple text-white rounded-full p-1 w-fit text-xs font-semibold px-5 transition-all duration-300 ring-2 ring-light-purple hover:bg-light-purple hover:text-dark-purple hover:ring-dark-purple'
          />
        </div>
        <div className="p-8 border-t border-dark-purple rounded-3xl h-full space-y-8">
          <div className="flex flex-col space-y-0">
            {pricing.features?.map((feature, i) => (
              <div className="flex flex-row items-center space-x-2" key={i}>
                <p className="font-bold text-lg leading-tight">+</p>
                <p className={`leading-tight text-sm ${i === 0 ? 'font-bold' : ''}`}>
                  {feature.feature}
                </p>
              </div>
            )) ?? []}
          </div>
          <div>
            <h3 className="font-bold text-lg">Services on focus</h3>
            <div className="flex flex-row flex-wrap">
              {pricing.services?.map((service, i) => (
                <div
                  className="border border-dark-purple bg-light-cyan rounded-full py-1 px-2 flex items-center justify-center mr-2 mt-2"
                  key={i}
                >
                  <p className="text-sm">{service.service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
    </article>
  )
}
