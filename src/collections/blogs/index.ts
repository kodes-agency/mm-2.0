import type { CollectionConfig } from 'payload/types'
import {
  HTMLConverterFeature,
  HeadingFeature,
  lexicalEditor,
  lexicalHTML,
} from '@payloadcms/richtext-lexical'
import { slugField } from '@/elements/Slug'

export const Blogs: CollectionConfig = {
  slug: 'blogs',
  admin: {
    useAsTitle: 'title',
  },
  labels: {
    singular: 'Blog',
    plural: 'Blogs',
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
      ],
    },
    {
      type: 'tabs',
      tabs: [
        {
          name: 'content',
          label: 'Content',
          fields: [
            {
              name: 'category',
              label: 'Category',
              type: 'select',
              required: true,
              hasMany: true,
              options: [
                {
                  label: 'Important events',
                  value: 'important-events',
                },
                {
                  label: 'Case studies',
                  value: 'case-studies',
                },
                {
                  label: 'Web Design & Development',
                  value: 'web-dev',
                },
                {
                  label: 'Organic & Local SEO',
                  value: 'organic-and-local-seo',
                },
                {
                  label: 'Brand design',
                  value: 'brand-design',
                },
              ],
            },
            {
              type: 'textarea',
              name: 'description',
              label: 'Description',
              required: true,
            },
            {
              name: 'image',
              label: 'Image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'content',
              label: 'Content',
              type: 'richText',
              required: true,
              editor: lexicalEditor({
                features: ({ defaultFeatures }) => [
                  ...defaultFeatures,
                  HeadingFeature({
                    enabledHeadingSizes: ['h3', 'h4'],
                  }),
                  HTMLConverterFeature({}),
                ],
              }),
            },
            lexicalHTML('content', { name: 'content_html' })
          ],
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
