import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import { Hero } from '@/components/nextComponents/Blog/Hero'
import { Archive } from '@/components/nextComponents/Blog/Archive'
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'The Morph Chronicles | Web Dev, Branding & SEO Blog',
  description: 'Insider tips and expert insights about Web development, Branding & Design and SEO are shared in The Morph Chronicles blog that reshapes the digital realm.',
}

export const dynamic = 'force-dynamic'

const Page = async () => {
    const payload = await getPayloadHMR({ config: configPromise })
    
    const blogs = await payload.find({
        collection: 'blogs',
    })
    return (
        <div className=" -space-y-px">
            <Hero />
            {
                blogs.docs.length > 0 && (
                    <Archive blogs={blogs.docs} />
                )
            }
        </div> 
    )
}

export default Page