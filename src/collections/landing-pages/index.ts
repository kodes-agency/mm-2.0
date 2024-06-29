import { Blog } from '@/blocks/Blogs'
import { CTA } from '@/blocks/CTA'
import { FAQs } from '@/blocks/FAQs'
import { Hero } from '@/blocks/Hero'
import { Highlights } from '@/blocks/Highlights'
import { ImageText } from '@/blocks/ImageText'
import { Pricing } from '@/blocks/Pricing'
import { Review } from '@/blocks/Reviews'
import { Services } from '@/blocks/Services'
import { Statistics } from '@/blocks/Statistics'
import { Steps } from '@/blocks/Steps'
import { Text } from '@/blocks/Text'
import { slugField } from '@/elements/Slug'
import type { CollectionConfig } from 'payload/types'

export const LandingPages: CollectionConfig = {
  slug: 'landing',
  admin: {
    useAsTitle: 'title',
  },
  labels: {
    singular: 'Landing Page',
    plural: 'Landing Pages',
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'text',
          required: true,
        },
        slugField,
        {
          name: 'category',
          label: 'Category',
          type: 'text',
          required: true,
        }
      ]
    },
    {
      type: 'tabs',
      tabs: [
        {
          name: 'contnet',
          label: 'Content',
          fields: [
            {
              name: 'layout',
              label: 'Layout',
              type: 'blocks',
              blocks: [
                Hero,
                Text,
                ImageText,
                Statistics,
                Pricing,
                FAQs,
                Highlights,
                Services,
                Steps,
                Blog,
                CTA,
                Review,
              ],
            },
          ]
        },
        {
          name: 'seo',
          label: 'SEO',
          fields: [
            {
              type: 'textarea',
              name: 'metaTitle',
              label: 'Meta Title',
              required: true,
              maxLength: 70,
              admin: {
                description: 'Max 70 characters',
              }
            },
            {
              type: 'textarea',
              name: 'metaDescription',
              label: 'Meta Description',
              required: true,
              maxLength: 160,
              admin: {
                description: 'Max 160 characters',
              }
            },
          ],
        },
      ],
    }, 
  ],
}
