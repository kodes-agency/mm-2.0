import { useState } from 'react'

type PricingCard = {
  isDiscounted?: ('yes' | 'no') | null
  hasSecondaryButton?: ('yes' | 'no') | null
  isMostPopular?: ('yes' | 'no') | null
  title: string
  description: string
  regularPrice: string
  discountedPrice?: string | null
  primaryButtonText: string
  primaryButtonLink: string
  secondaryButtonText: string
  secondaryButtonLink: string
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
  const handleButtonClick = () => {}

  return (
    <article
      className={`border border-dark-purple w-[82vw] md:w-[350px]  ${
        pricing.isMostPopular === "yes" ? 'bg-white' : 'bg-[#F7F7F7]'
      } rounded-3xl h-fit box-content`}
    >
      <div className="p-5 lg:p-8 space-y-5">
        <div className="flex flex-col space-y-2">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl text-dark-purple font-bold">{pricing.title}</h2>
            {pricing.isMostPopular === "yes" && (
              <p className="bg-light-purple rounded-full py-1 px-2 text-xs text-black whitespace-nowrap font-semibold">
                Most popular
              </p>
            )}
          </div>
          <p className="text-sm">{pricing.description}</p>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-3xl text-dark-purple font-bold">${pricing.regularPrice}</p>
          {/* @ts-ignore */}
          <p className="text-sm opacity-50">{pricing.priceDetails}</p>
        </div>
        <div className="space-y-2">
          <button className="w-full bg-dark-purple rounded-full text-white py-3 hover:font-bold hover:bg-cyan  transition-all">
            <a className="h-full py-3 whitespace-nowrap lg:px-16" href={pricing.primaryButtonLink} target="_blank">
              {pricing.primaryButtonText}
            </a>
          </button>
          {pricing.hasSecondaryButton === "yes" && (
            <button className="google-book-app w-full underline underline-offset-2 text-dark-purple hover:font-bold  transition-all">
              {pricing.secondaryButtonText}
            </button>
          )}
        </div>
      </div>
      <div className="p-8 border-t border-dark-purple rounded-3xl h-full space-y-8">
        <div className="flex flex-col space-y-1">
          {pricing.features?.map((feature, i) => (
            <div className="flex flex-row items-center space-x-2" key={i}>
              <p className="font-bold text-lg">+</p>
              <p className={`leading-snug text-sm ${i === 0 ? 'font-bold' : ''}`}>
                {feature.feature}
              </p>
            </div>
          )) ?? []}
        </div>
        <div>
          <h3 className="font-bold text-lg">Included services</h3>
          <div className="flex flex-row flex-wrap">
            {pricing.services?.map((service, i) => (
              <div
                className="border border-dark-purple rounded-full py-1 px-2 flex items-center justify-center mr-2 mt-2"
                key={i}
              >
                <p className="text-sm">{service.service}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
