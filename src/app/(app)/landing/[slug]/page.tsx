import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import { Hero } from '@/components/nextComponents/Landing/Hero'
import { ImageText } from '@/components/nextComponents/Landing/ImageText'
import { Text } from '@/components/nextComponents/Landing/Text'
import { Statistics } from '@/components/nextComponents/Landing/Statistics'
import { Services } from '@/components/nextComponents/Landing/Services'
import { Steps } from '@/components/nextComponents/Landing/Steps'
import { FAQ } from '@/components/nextComponents/Landing/FAQ'
import { Highlights } from '@/components/nextComponents/Landing/Highlights'
import { Blogs } from '@/components/nextComponents/Landing/Blogs'
import { CTA } from '@/components/nextComponents/Landing/CTA'
import { Pricing } from '@/components/nextComponents/Landing/Pricing'
import { Reviews } from '@/components/nextComponents/Landing/Reviews'



const Page = async ({ params }: { params: { slug: string } }) => {
  const payload = await getPayloadHMR({ config: configPromise })

  const landing = await payload.find({
    collection: 'landing',
    where: {
      slug: {
        equals: params.slug,
      },
    },
  })

  return (
    <section className="min-h-screen bg-white flex flex-col">
      {landing.docs[0].contnet && !landing.docs[0].contnet.layout ? (
        <div>404 Not found</div>
      ) : (
        <div>
          {landing.docs[0].contnet && landing.docs[0].contnet.layout?.map((block) => {
            return (
              <div key={block.id}>
                {block.blockType === 'hero' && (
                  <Hero block={block} />
                )}
                {block.blockType === 'text' && (
                  <Text block={block} />
                )}
                {block.blockType === 'image-text' && (
                  <ImageText block={block} />
                )}
                {block.blockType === 'statistics' && (
                  <Statistics block={block} />
                )}
                {block.blockType === 'services' && (
                  <Services block={block} />
                )}
                {block.blockType === 'steps' && (
                  <Steps block={block} />
                )}
                {block.blockType === 'faqs' && (
                  <FAQ block={block} />
                )}
                {block.blockType === 'highlights' && (
                  <Highlights block={block} />
                )}
                {block.blockType === 'blog' && (
                  <Blogs block={block} />
                )}
                {block.blockType === 'cta' && (
                  <CTA block={block} />
                )}   
                {block.blockType === 'pricing' && (
                  <Pricing block={block} />
                )}           
                {block.blockType === 'review' && (
                  // @ts-ignore
                  <Reviews block={block} />
                )}                                               
              </div>
            )
          })}
        </div>
      )}
    </section>
  )
}

export default Page
