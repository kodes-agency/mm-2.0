import { getPayload } from 'payload'
import config from '@payload-config'
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
import type { Metadata } from 'next'
import { Props } from '@/lib/types'

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  // read route params
  const {slug} = await params
 
  // fetch data
    const payload = await getPayload({ config })


  const meta = await payload.find({
    collection: 'landing',
    where: {
      uri: {
        equals: slug,
      },
    },
  })
 
 
  return {
    title: meta.docs[0].seo.metaTitle,
    description: meta.docs[0].seo.metaDescription,
  }
}

export const dynamic = 'force-dynamic'

const Page = async (
  { params }: Props,
) => {
    const { slug } = await params
    const payload = await getPayload({ config })


  const landing = await payload.find({
    collection: 'landing',
    where: {
      uri: {
        equals: slug,
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
                  // @ts-ignore
                  <Hero block={block} />
                )}
                {block.blockType === 'text' && (
                  <Text block={block} />
                )}
                {block.blockType === 'image-text' && (
                  // @ts-ignore
                  <ImageText block={block} />
                )}
                {block.blockType === 'statistics' && (
                  <Statistics block={block} />
                )}
                {block.blockType === 'services' && (
                  // @ts-ignore
                  <Services block={block} />
                )}
                {block.blockType === 'steps' && (
                  <Steps block={block} />
                )}
                {block.blockType === 'faqs' && (
                  // @ts-ignore
                  <FAQ block={block} />
                )}
                {block.blockType === 'highlights' && (
                  // @ts-ignore
                  <Highlights block={block} />
                )}
                {block.blockType === 'blog' && (
                  // @ts-ignore
                  <Blogs block={block} />
                )}
                {block.blockType === 'cta' && (
                  // @ts-ignore
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
