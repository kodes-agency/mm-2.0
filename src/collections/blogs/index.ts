import type { CollectionConfig } from 'payload'
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
                  label: 'Important event',
                  value: 'important-event',
                },
                {
                  label: 'Case studie',
                  value: 'case-studie',
                },
                {
                  label: 'Web Design',
                  value: 'web-design',
                },
                {
                  label: 'Web Dev',
                  value: 'web-dev',
                },
                {
                  label: 'Organic SEO',
                  value: 'organic-seo',
                },
                {
                  label: 'Local SEO',
                  value: 'local-seo',
                },
                {
                  label: 'Brand design',
                  value: 'brand-design',
                },
              ],
            },
            {
              name: 'featured',
              label: 'Featured',
              type: 'radio',
              required: true,
              defaultValue: 'false',
              admin: {
                description: 'Featured blogs will be displayed on the homepage',
              },
              options: [
                {
                  label: 'Yes',
                  value: 'true',
                },
                {
                  label: 'No',
                  value: 'false',
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
