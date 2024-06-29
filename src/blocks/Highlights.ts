import type { Block } from 'payload/types'
import { styleField } from '@/elements/Style'

export const Highlights: Block = {
  slug: 'highlights',
  labels: {
    singular: 'Highlight',
    plural: 'Highlights',
  },
  imageURL: '/media/Highlights-section.png',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          name: 'content',
          fields: [
            {
              type: 'text',
              name: 'title',
              label: 'Title',
            },
            {
              type: 'array',
              name: 'highlights',
              label: 'Highlights',
              fields: [
                {
                  type: 'upload',
                  name: 'icon',
                  label: 'Icon',
                  relationTo: 'media',
                  required: true,
                },
                {
                  type: 'text',
                  name: 'title',
                  label: 'Title',
                  required: true,
                },
                {
                  type: 'text',
                  name: 'text',
                  label: 'text',
                },
              ],
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
