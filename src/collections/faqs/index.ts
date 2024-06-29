import type { CollectionConfig } from 'payload/types'
import { HTMLConverterFeature, HeadingFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical'

export const Faqs: CollectionConfig = {
  slug: 'faqs',
  admin: {
    useAsTitle: 'question',
  },
  labels: {
    singular: 'FAQ',
    plural: 'FAQs',
  },
  fields: [
    {
      type:'select',
      name: 'category',
      label: 'Category',
      required: true,
      options: [
        {
          label: 'General',
          value: 'general',
        },
        {
          label: 'Web Design & Development',
          value: 'web-dev',
        },
        {
          label: 'Organic & Local SEO',
          value: 'seo',
        },
        {
          label: 'Brand design',
          value: 'brand-design'
        }
      ],
    },
    {
        name: 'question',
        label: 'Question',
        type: 'text',
        required: true,
    },
    {
        name: 'answer',
        label: 'Answer',
        type: 'richText',
        required: true,
        editor: lexicalEditor({
          features: ({ defaultFeatures }) => [
            ...defaultFeatures, 
            HeadingFeature({
              enabledHeadingSizes: ['h3', 'h4'],
            }),
            HTMLConverterFeature({})],
        }),
      },
      lexicalHTML('answer', { name: 'answer_html' }),
  ],
}