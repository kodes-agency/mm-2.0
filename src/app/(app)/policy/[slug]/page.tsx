import { getPayload } from 'payload'
import config from '@payload-config'
import type { Metadata } from 'next'
import { CookieConsent } from '@/components/nextComponents/CookieConsent'
import { Props } from '@/lib/types'

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  // read route params
  const {slug}= await params
 
  // fetch data
    const payload = await getPayload({ config })


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

const Page = async (
  { params }: Props,
) => {
    const { slug } = await params
    const payload = await getPayload({ config })




  const policy = await payload.find({
    collection: 'policies',
    where: {
        slug: {
            equals: slug,
        }
    }
  })

  const data = policy.docs[0]


  return (
    <section className="min-h-screen bg-white flex flex-col items-center">
        <div className='max-w-5xl w-full pt-40 pb-20 space-y-4 px-5 md:px-10'>
            <h1 className='text-3xl font-bold text-center'>{data.title}</h1>
            {
              slug === 'cookie-policy' && (
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
