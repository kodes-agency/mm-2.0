import SubscribePopup from '@/components/nextComponents/SubscribePopup'
import Link from 'next/link'

export const LandingButton = ({
  type,
  ctaHasMessage,
  ctaHasBudget,
  ctaHeading,
  buttonText,
  buttonLink,
  style,
}: {
  type: 'cta' | 'link' | null | undefined
  ctaHasMessage?: boolean | null
  ctaHasBudget?: boolean | null
  ctaHeading?: string | null | undefined
  buttonText?: string | null | undefined
  buttonLink?: string | null | undefined
  style?: string
}) => {
  return (
    <div>
      {type === 'cta' && (
        <SubscribePopup
        // @ts-ignore
          hasMessage={ctaHasMessage} hasBudget={ctaHasBudget} openText={buttonText} title={ctaHeading}
        />
      )}
      {type === 'link' && buttonLink && (
        <Link
          href={buttonLink}
          className={`${style} uppercase rounded-full p-2 w-fit text-sm font-semibold px-5 transition-all duration-300`}
        >
          {buttonText}
        </Link>
      )}
    </div>
  )
}
