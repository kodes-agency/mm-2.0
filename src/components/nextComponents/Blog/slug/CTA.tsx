import { LandingButton } from '@/elements/nextElements/LandingButton'
import { Blog } from '@/payload-types'

export const CTA = ({ blog }: { blog: Blog }) => {
  return (
    <>
        {
            blog.content.ctaHeading && (
                <section className="flex flex-col items-center py-40 px-5 bg-white space-y-10 md:space-y-0">
                <div className="max-w-3xl flex flex-col space-y-5 items-center">
                    <h2 className='text-center font-bold text-4xl md:text-5xl lg:text-6xl text-black'>{blog.content.ctaHeading}</h2>
                    {blog.content.ctaDescription && <p className='text-center text-lg text-black'>{blog.content.ctaDescription}</p>}
                    <LandingButton
                    type={blog.content.buttonType}
                    buttonText={blog.content.buttonText}
                    buttonLink={blog.content.buttonLink}
                    ctaHasMessage={blog.content.ctaHasMessage}
                    ctaHasBudget={blog.content.ctaHasBudget}
                    ctaHeading={blog.content.ctaTitle}
                    style='bg-dark-purple ring-2 ring-light-purple text-light-purple hover:bg-light-purple hover:text-dark-purple hover:ring-dark-purple transition-all duration-300'
                    />
                </div>
                </section>
            )
        }
    </>
  )
}
