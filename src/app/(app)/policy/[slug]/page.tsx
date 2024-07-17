import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import type { Metadata } from 'next'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import { CookieConsent } from '@/components/nextComponents/CookieConsent'

export async function generateMetadata(
  { params }: {params: Params},
): Promise<Metadata> {
  // read route params
  const slug = params.slug
 
  // fetch data
  const payload = await getPayloadHMR({ config: configPromise })

  const meta = await payload.find({
    collection: 'policies',
    where: {
      slug: {
        equals: slug,
      },
    },
  })
 
  return {
    robots: 'noindex, nofollow',
    title: meta.docs[0].title,
  }
}

export const dynamic = 'force-dynamic'

const Page = async ({ params }: { params: { slug: string } }) => {
  const payload = await getPayloadHMR({ config: configPromise })

  const policy = await payload.find({
    collection: 'policies',
    where: {
        slug: {
            equals: params.slug,
        }
    }
  })

  const data = policy.docs[0]


  return (
    <section className="min-h-screen bg-white flex flex-col items-center">
        <div className='max-w-5xl w-full pt-40 pb-20 space-y-4 px-5 md:px-10'>
            <h1 className='text-3xl font-bold text-center'>{data.title}</h1>
            {
              params.slug === 'cookie-policy' && (
                <CookieConsent changable/>
              )
            }
            <p><i>Last updated: {" "}{new Date(data.updatedAt).toLocaleString('en-US')}</i></p>
            <div 
              dangerouslySetInnerHTML={{__html: data.content_html || ''}}
              className='
                [&_blockquote]:font-bold [&_blockquote]:pl-5 md:[&_blockquote]:pl-10 [&_blockquote]:text-red [&_blockquote]:text-lg [&_blockquote]:max-w-3xl
                space-y-4
                [&_h2]:text-4xl [&_h2]:pt-3
                [&_h3]:text-2xl [&_h3]:pt-2
                [&_h4]:text-xl
                [&_ul]:list-disc [&_ul]:pl-6 md:[&_ul]:pl-12 [&_ul]:space-y-1
                [&_ol]:list-decimal [&_ol]:pl-6 md:[&_ol]:pl-12 [&_ol]:space-y-1
              '
            >
            </div>
        </div>
    </section>
  )
}

export default Page
