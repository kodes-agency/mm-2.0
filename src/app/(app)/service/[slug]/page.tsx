import { getPayload } from 'payload'
import config from '@payload-config'
import { Hero } from '@/components/nextComponents/Services/Hero'
import { Services } from '@/components/nextComponents/Services/Services'
import { Statistics } from '@/components/nextComponents/Services/Statistics'
import { Landings } from '@/components/nextComponents/Services/Landings'
import { CTA } from '@/components/nextComponents/Services/CTA'
import { Blog } from '@/components/nextComponents/Services/Blog'
import { CTA2 } from '@/components/nextComponents/Services/CTA2'
import type { Metadata } from 'next'
import { Props } from '@/lib/types'

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  // read route params
  const {slug}= await params
 
  // fetch data
    const payload = await getPayload({ config })


  const meta = await payload.find({
    collection: 'services',
    where: {
      slug: {
        equals: slug,
      },
    },
  })
 
 
  return {
    title: meta.docs[0]?.seo?.metaTitle,
    description: meta.docs[0]?.seo?.metaDescription,
  }
}

export const dynamic = 'force-dynamic'


const Page = async (
  { params }: Props,
) => {
    const { slug } = await params
    const payload = await getPayload({ config })


  const services = await payload.find({
    collection: 'services',
    where: {
      slug: {
        equals: slug,
      },
    },
  })


  let currentService = services.docs[0]

  const colors = {
    highlightColor: currentService?.style?.highlightColor,
    bgColorFrom: currentService?.style?.bgColorFrom,
    bgColorTo: currentService?.style?.bgColorTo,
  }

  return (
    <section className="min-h-screen bg-black flex flex-col">
      {services?.docs?.length === 0 ? (
        <div>404 Not found</div>
      ) : (
        <div className="flex flex-col -space-y-px md:-space-y-0 ">
          <Hero service={currentService} style={colors} />
          <Services service={currentService} style={colors} />
          <Landings service={currentService} style={colors} />
          <CTA service={currentService} style={colors} />
          <Statistics service={currentService} style={colors} />
          <Blog service={currentService} style={colors} />
          <CTA2 service={currentService} style={colors} />
        </div>
      )}
    </section>
  )
}

export default Page
