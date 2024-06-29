import type { Block } from 'payload/types'
import { styleField } from '@/elements/Style'

export const CTA: Block = {
  slug: 'cta',
  labels: {
    singular: 'CTA',
    plural: 'CTA',
  },
  imageURL: '/media/CTA-section.png',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          name: 'content',
          fields: [
            {
              name: 'title',
              label: 'Title',
              type: 'text',
              required: true,
            },
            {
              name: 'text',
              label: 'Text',
              type: 'textarea',
              required: true,
            },
            {
              type: 'row',
              fields: [
                {
                  type: 'text',
                  name: 'buttonText',
                  label: 'Button Text',
                  required: true,
                },
                {
                  type: 'text',
                  name: 'buttonLink',
                  label: 'Button URL',
                  required: true,
                },
              ]
            },
            {
              type: 'upload',
              name: 'image',
              label: 'Image',
              required: true,
              relationTo: 'media',
            },
          ],
        },
        {
          label: 'Style',
          name: 'style',
          fields: [styleField],
        },
      ],
    },
  ],
}
