import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import { Hero } from '@/components/nextComponents/Services/Hero'
import { Services } from '@/components/nextComponents/Services/Services'
import { Statistics } from '@/components/nextComponents/Services/Statistics'
import { Landings } from '@/components/nextComponents/Services/Landings'
import { CTA } from '@/components/nextComponents/Services/CTA'
import { Blog } from '@/components/nextComponents/Services/Blog'
import { CTA2 } from '@/components/nextComponents/Services/CTA2'


const Page = async ({ params }: { params: { slug: string } }) => {
    const payload = await getPayloadHMR({ config: configPromise })

    const services = await payload.find({
      collection: 'services',
      where: {
        slug: {
          equals: params.slug,
        },
      },
    })

    let currentService = services.docs[0]

    const colors = {
        highlightColor: currentService.style.highlightColor,
        bgColorFrom: currentService.style.bgColorFrom,
        bgColorTo: currentService.style.bgColorTo,
    }

  return (
    <section className="min-h-screen bg-black flex flex-col">
      {services?.docs?.length === 0 ? (
        <div>404 Not found</div>
      ) : (
        <div className='flex flex-col -space-y-px md:-space-y-0 '>
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
