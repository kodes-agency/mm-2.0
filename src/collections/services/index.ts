import type { CollectionConfig } from 'payload'
import type { FieldHook } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'label',
  },
  labels: {
    singular: 'Service',
    plural: 'Services',
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'label',
          label: 'Category label',
          type: 'text',
          required: true,
        },
        {
          name: 'slug',
          label: 'Slug',
          type: 'text',
          index: true,
          hooks: {
            beforeValidate: [
              async ({ data, value, operation }): Promise<FieldHook> => {
                if (operation === 'create') {
                  // @ts-expect-error
                  return (value = await data.label
                    .replace(/ /g, '-')
                    .replace(/[^\w-]+/g, '')
                    .toLowerCase())
                } else {
                  return value
                }
              },
            ],
          },
        },
      ],
    },
    {
      type: 'tabs',
      tabs: [
        {
          name: 'servicePage',
          label: 'Service page',
          fields: [
            {
              name: 'title',
              label: 'Title',
              type: 'text',
              required: true,
            },
            {
              type: 'upload',
              relationTo: 'media',
              name: 'image',
              label: 'Thumbnail',
              required: true,
            },
            {
              type: 'textarea',
              name: 'description',
              label: 'Description',
              required: true,
            },
            {
              type: 'array',
              name: 'services',
              label: 'Services',
              required: true,
              minRows: 1,
              fields: [
                {
                  type: 'text',
                  name: 'title',
                  label: 'Service title',
                  required: true,
                },
                {
                  name: 'subtitle',
                  label: 'Service subtitle',
                  type: 'text',
                  required: true,
                },
                {
                  type: 'textarea',
                  name: 'description',
                  label: 'Service description',
                  required: true,
                },
                {
                  type: 'array',
                  name: 'features',
                  label: 'Features',
                  fields: [
                    {
                      type: 'text',
                      name: 'feature',
                      label: 'Feature',
                      required: true,
                    },
                  ],
                },
              ],
            },
            {
              type: 'array',
              name: 'statistics',
              label: 'Statistics',
              minRows: 1,
              fields: [
                {
                  type: 'number',
                  name: 'number',
                  label: 'Number',
                  required: true,
                },
                {
                  type: 'textarea',
                  name: 'text',
                  label: 'Description',
                  required: true,
                },
              ],
            },
            {
              type: 'relationship',
              name: 'landing',
              label: 'Landing pages',
              relationTo: 'landing',
              admin: {
                description: 'Select the landing pages that are related to this service.',
              },
              hasMany: true,
            },
            {
              type: 'relationship',
              name: 'blogs',
              relationTo: 'blogs',
              label: 'Related blogs',
              admin: {
                description: 'Select the blogs that are related to this service.',
              },
              hasMany: true,
            },
            {
              type: 'collapsible',
              label: 'CTA fields',
              fields: [
                {
                  type: 'text',
                  name: 'ctaTitle',
                  label: 'CTA title',
                  required: true,
                },
                {
                  type: 'textarea',
                  name: 'ctaDescription',
                  label: 'CTA description',
                  required: true,
                },
                {
                  type: 'text',
                  name: 'ctaButtonText',
                  label: 'CTA button text',
                  required: true,
                },
              ]
            }
          ],
        },
        {
          name: 'homePage',
          label: 'Home page',
          fields: [
            {
              type: 'text',
              name: 'title',
              label: 'Title',
              required: true,
            },
            {
              type: 'textarea',
              name: 'text',
              label: 'Description',
              required: true,
            },
            {
              type: 'text',
              name: 'buttonText',
              label: 'Button text',
              required: true,
            },
            {
              type: 'upload',
              relationTo: 'media',
              name: 'image',
              label: 'Foreground',
            },
            {
              type: 'upload',
              relationTo: 'media',
              name: 'image-bg',
              label: 'Background',
            }
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
        {
          name: "style",
          label: "Style",
          fields: [
            {
              type: 'row',
              fields: [
                {
                  type: 'text',
                  name: 'highlightColor',
                  label: 'Highlight color',
                  required: true,
                },
                {
                  type: 'text',
                  name: 'bgColorFrom',
                  label: 'Background color from',
                  required: true,
                },
                {
                  type: 'text',
                  name: 'bgColorTo',
                  label: 'Background color to',
                  required: true,
                },
              ]
            }
          ]
        }
      ],
    },
  ],
}
