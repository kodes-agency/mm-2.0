import { Archive } from "@/components/nextComponents/FAQ/Archive"
import { Hero } from "@/components/nextComponents/FAQ/Hero"
import { getPayload } from 'payload'
import config from '@payload-config'
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Mission Morph Marketing Agency',
  description: 'Do you have questions about our Digital Marketing services, agency contracts, business eligibility or contact options? See our FAQ page for more information.',
}
export const dynamic = 'force-dynamic'


const Page = async () => {
      const payload = await getPayload({ config })

    const faqs = await payload.find({
        collection: 'faqs',
        pagination: false,
        sort: 'createdAt',
    })

    return (
        <div className="">
            <Hero />
            <Archive faq={faqs.docs} />
        </div> 
    )
}

export default Page