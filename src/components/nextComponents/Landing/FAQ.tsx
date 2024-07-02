import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

type FAQ = {
  id: string
  question: string
  answer: {
    root: {
      type: string
      children: {
        type: string
        version: number
        [k: string]: unknown
      }[]
      direction: ('ltr' | 'rtl') | null
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | ''
      indent: number
      version: number
    }
    [k: string]: unknown
  }
  answer_html?: string | null
  updatedAt: string
  createdAt: string
}

type FAQs = {
  content?: {
    hasTitle?: ('yes' | 'no') | null;
    hasSubtitle?: ('yes' | 'no') | null;
    title?: string | null;
    subtitle?: string | null;
    faq?: (string | FAQ)[] | null;
  };
  style: {
    style: 'dark-purple' | 'light-purple' | 'blue' | 'white' | 'black' | 'red' | 'cyan' | 'orange';
  };
  id?: string | null;
  blockName?: string | null;
  blockType: 'faqs';
}

export const FAQ = ({ block }: { block: FAQs }) => {
  return (
    <section className={`py-20 flex flex-col items-center w-full px-5 md:px-10`}>
      <div className="max-w-5xl space-y-5 w-full">
        {block.content?.hasTitle === 'yes' && <h2 className="text-4xl font-bold">{block.content?.title}</h2>}
        {block.content?.hasSubtitle === 'yes' && <p className="text-lg">{block.content?.subtitle}</p>}
        <Accordion type="multiple" className=" space-y-5 w-full">
          {/* @ts-expect-error */}
          {block.content?.faq.map((faq: FAQ, index: number) => (
            <AccordionItem
              key={index}
              value={`value-${index}`}
              className="border-4 border-light-purple rounded-3xl px-4 md:px-10"
            >
              <AccordionTrigger className='text-start font-bold'>{faq.question}</AccordionTrigger>
              <AccordionContent>
                <div
                  className="         
                  space-y-3
                  [&_h3]:font-bold [&_h3]:text-2xl
                  [&_h4]:font-bold [&_h4]:text-xl
                  [&_ul]:list-disc [&_ul]:pl-6 md:[&_ul]:pl-12 [&_ul]:space-y-1
                  [&_ol]:list-decimal [&_ol]:pl-6 md:[&_ol]:pl-12 [&_ol]:space-y-1"
                  //@ts-expect-error
                  dangerouslySetInnerHTML={{ __html: faq.answer_html }}
                ></div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
