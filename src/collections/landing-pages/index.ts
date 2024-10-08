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
import type { CollectionConfig, FieldHook } from 'payload'

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
        {
          name: "uri",
          label: "Slug",
          type: "text",
          index: true,
          // admin: {
          //   readOnly: true,
          // },
          hooks: {
            beforeValidate: [({data, value, operation}): FieldHook => {
              if(operation === 'create') {
                  // @ts-expect-error
                  return value = data.title
                    .replace(/ /g, '-')
                    .replace(/[^\w-]+/g, '')
                    .toLowerCase()
              } else {
                  return value
              }
            }],
          },
        },
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
              required: true,
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
              maxLength: 90,
              admin: {
                description: 'Max 90 characters',
              }
            },
            {
              type: 'textarea',
              name: 'metaDescription',
              label: 'Meta Description',
              required: true,
              maxLength: 200,
              admin: {
                description: 'Max 200 characters',
              }
            },
          ],
        },
      ],
    }, 
  ],
}
