import type { Block } from 'payload'
import { styleField } from '@/elements/Style'

export const Review: Block = {
  slug: 'review',
  labels: {
    singular: 'Review',
    plural: 'Reviews',
  },
  imageURL: '/media/Reviews-section.png',
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
              type: 'relationship',
              name: 'reveiws',
              label: 'Reviews',
              relationTo: 'reviews',
              hasMany: true,
              required: true,
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
