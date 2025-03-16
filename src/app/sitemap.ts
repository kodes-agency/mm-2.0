import { MetadataRoute } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
      const payload = await getPayload({ config })

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
            url: `https://missionmorph.com/blog/${blog.slug}`,
            lastModified: blog.updatedAt,
            changeFrequency: 'daily',
            priority: 1,
        }
    })

    const landingXML = landingPages.docs.map((landing) => {
        return {
            url: `https://missionmorph.com/landing/${landing.uri}`,
            lastModified: landing.updatedAt,
            changeFrequency: 'weekly',
            priority: 1,
        }
    })

    const serviceXML = services.docs.map((service) => {
        return {
            url: `https://missionmorph.com/service/${service.slug}`,
            lastModified: service.updatedAt,
            changeFrequency: 'monthly',
            priority: 1,
        }
    })

    const staticPages = [
        {
            url: 'https://missionmorph.com',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://missionmorph.com/about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://missionmorph.com/blog',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://missionmorph.com/faq',
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