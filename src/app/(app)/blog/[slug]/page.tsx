import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import { Hero } from '@/components/nextComponents/Blog/slug/Hero'
import { Content } from '@/components/nextComponents/Blog/slug/Content'

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
    <>
      {blogs?.docs?.length < 1 ? (
        <div>404 Not found</div>
      ) : (
        <div className=" -space-y-px">
          <Hero blog={blogs.docs[0]} /> <Content blog={blogs.docs[0]} />
        </div>
      )}
    </>
  )
}

export default Page
