import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import { Hero } from '@/components/nextComponents/Blog/slug/Hero'
import { Content } from '@/components/nextComponents/Blog/slug/Content'
import { CTA } from '@/components/nextComponents/Blog/slug/CTA'
import { Blogs } from '@/components/nextComponents/Blog/slug/Blogs'

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

  return (
    <>2
      {blogs?.docs?.length < 1 ? (
        <div>404 Not found</div>
      ) : (
        <div className=" -space-y-px">
          <Hero blog={blogs.docs[0]} /> 
          <Content blog={blogs.docs[0]} />
          <CTA blog={blogs.docs[0]} />
          <Blogs blog={blogs.docs[0]} />
        </div>
      )}
    </>
  )
}

export default Page
