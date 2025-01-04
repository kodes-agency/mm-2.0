import { MetadataRoute } from 'next'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const payload = await getPayloadHMR({ config: configPromise })
    const blogs = await payload.find({
        collection: 'blogs',
        pagination: false,
        limit: 1000,
    })
    const landingPages = await payload.find({
        collection: 'landing',
        pagination: false,
        limit: 1000,
    })

    const services = await payload.find({
        collection: 'services',
        pagination: false,
        limit: 1000,
    })

    const blogXML = blogs.docs.map((blog) => {
        return {
            url: `htpps://missionmorph.com/blog/${blog.slug}`,
            lastModified: blog.updatedAt,
            changeFrequency: 'daily',
            priority: 1,
        }
    })

    const landingXML = landingPages.docs.map((landing) => {
        return {
            url: `htpps://missionmorph.com/landing/${landing.uri}`,
            lastModified: landing.updatedAt,
            changeFrequency: 'weekly',
            priority: 1,
        }
    })

    const serviceXML = services.docs.map((service) => {
        return {
            url: `htpps://missionmorph.com/service/${service.slug}`,
            lastModified: service.updatedAt,
            changeFrequency: 'monthly',
            priority: 1,
        }
    })

    const staticPages = [
        {
            url: 'htpps://missionmorph.com',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'htpps://missionmorph.com/about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'htpps://missionmorph.com/blog',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'htpps://missionmorph.com/faq',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
    ]


    // @ts-expect-error
    return [
        ...blogXML,
        ...landingXML,
        ...serviceXML,
        ...staticPages,
    ]
}