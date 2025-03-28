import { Hero } from "@/components/nextComponents/Home/Hero"
import { About } from "@/components/nextComponents/Home/About"
import { Services } from "@/components/nextComponents/Home/Services"
import { CTA } from "@/components/nextComponents/Home/CTA"
import { Blog } from "@/components/nextComponents/Home/Blog"
import { getPayload } from 'payload'
import config from '@payload-config'
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Digital Marketing Agency Miami FL | Web Dev, Branding & SEO',
  description: 'Mission Morph is a digital marketing agency in Miami that is set to transform your online presence starting with custom web development, brand design and SEO.',
}
 
export const dynamic = 'force-dynamic'


const Page = async () => {
      const payload = await getPayload({ config })

    
    const services = await payload.find({
        collection: 'services',
        
    })

    const blogs = await payload.find({
      collection: 'blogs',
      where: {
        'content.featured': {
            equals: 'true'
        }
      }
    })

    return (
        <div className=" -space-y-px">
            <Hero />
            <About />
            <Services services={services.docs} />
            <CTA />
            {
              // @ts-expect-error
              blogs.docs.length > 0 && <Blog blogs={blogs}/>
            }
        </div> 
    )
}

export default Page