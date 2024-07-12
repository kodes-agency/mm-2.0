import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import { Hero } from '@/components/nextComponents/Blog/slug/Hero'
import { Content } from '@/components/nextComponents/Blog/slug/Content'
import { CTA } from '@/components/nextComponents/Blog/slug/CTA'
import { Blogs } from '@/components/nextComponents/Blog/slug/Blogs'
import type { Metadata } from 'next'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'

export async function generateMetadata(
  { params }: {params: Params},
): Promise<Metadata> {
  // read route params
  const slug = params.slug
 
  // fetch data
  const payload = await getPayloadHMR({ config: configPromise })

  const blogs = await payload.find({
    collection: 'blogs',
    where: {
      slug: {
        equals: slug,
      },
    },
  })
 
 
  return {
    title: blogs.docs[0].seo.metaTitle,
    description: blogs.docs[0].seo.metaDescription,
  }
}


export const dynamic = 'force-dynamic'


const Page = async ({ params }: { params: { slug: string } }) => {
  const payload = await getPayloadHMR({ config: configPromise })

  const blogs = await payload.find({
    collection: 'blogs',
    where: {
      slug: {
        equals: params.slug,
      },
    },
  })

  const relatedBlogs = await payload.find({ collection: 'blogs' })
  const randomBlogs = relatedBlogs.docs
    .filter(blog => blog.id !== blogs.docs[0].id)
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);

  return (
    <>
      {blogs?.docs?.length < 1 ? (
        <div>404 Not found</div>
      ) : (
        <div className=" -space-y-px">
          <Hero blog={blogs.docs[0]} /> 
          <Content blog={blogs.docs[0]} />
          <CTA blog={blogs.docs[0]} />
          <Blogs blogs={randomBlogs} />
        </div>
      )}
    </>
  )
}

export default Page
