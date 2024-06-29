'use client'

import { Faq } from '@/payload-types'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const categoryLabels = [
    { category: 'general', label: 'General' },
    { category: 'web-dev', label: 'Web Development' },
    { category: 'seo', label: 'Search Engine Optimisation' },
    { category: 'brand-design', label: 'Brand Design' },
]

export const Archive = ({ faq }: { faq: Faq[] }) => {
  const faqCategories = faq.map((faq) => {
    return faq.category
  })

  const uniqueFaqCategories = [...new Set(faqCategories)]

  // Group the FAQs by their categories
  const faqsByCategory = faq.reduce(
    (groups: { general: Faq[]; 'web-dev': Faq[]; seo: Faq[]; 'brand-design': Faq[] }, item) => {
      const group = groups[item.category] || []
      group.push(item)
      groups[item.category] = group
      return groups
    },
    { general: [], 'web-dev': [], seo: [], 'brand-design': [] },
  )

  return (
    <section className="flex bg-gray flex-col items-center px-5 md:p-10 md:pt-20 pb-40 relative space-y-10">
      {uniqueFaqCategories.map((category, index) => (
        <div key={index} className='max-w-4xl w-full space-y-4'>
            <h2 className="text-4xl font-bold">{categoryLabels.map((labels)=>(
                labels.category === category && labels.label
            ))}</h2>
          {faqsByCategory[category].map((faq, index) => (
            <div key={index}>
              <Accordion type="multiple" className=" space-y-5 w-full">
                <AccordionItem
                  key={faq.question}
                  value={`value-${faq.question}`}
                  className="border-4 border-light-purple rounded-3xl px-4 md:px-10"
                >
                  <AccordionTrigger className="text-start">{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    <div
                      className="         
                    space-y-3
                    [&_h3]:font-bold [&_h3]:text-2xl
                    [&_h4]:font-bold [&_h4]:text-xl
                    [&_ul]:list-disc [&_ul]:pl-6 md:[&_ul]:pl-12 [&_ul]:space-y-1
                    [&_ol]:list-decimal [&_ol]:pl-6 md:[&_ol]:pl-12 [&_ol]:space-y-1"
                      dangerouslySetInnerHTML={{ __html: faq.answer_html || '' }}
                    ></div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </div>
      ))}
    </section>
  )
}
