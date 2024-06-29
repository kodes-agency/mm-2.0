import { Hero } from "@/components/nextComponents/About/Hero"
import { Steps } from "@/components/nextComponents/About/Steps"
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Your Success Is Our True Reward - Mission Morph Agency',
  description: 'Mission Morph is a digital marketing agency based in Miami, Fl, where our team merges SEO sorcery, web mastery, and design artistry, propelling your triumph.',
}

const Page = async () => {
    return (
        <div className="flex flex-col -space-y-px">
            <Hero/>
            <Steps />
        </div>
    )
}

export default Page