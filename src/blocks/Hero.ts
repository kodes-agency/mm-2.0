import type { Block } from 'payload/types'
import { styleField } from '@/elements/Style'

export const Hero: Block = {
  slug: 'hero',
  labels: {
    singular: 'Hero',
    plural: 'Hero',
  },
  imageURL: '/media/Hero-section.png',
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
              name: 'subtitle',
              label: 'Subtitle',
              type: 'text',
              required: true,
            },
            {
              name: 'label',
              label: 'Label',
              type: 'text',
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'buttonText',
                  type: 'text',
                  label: 'Button Text',
                  required: true,
                },
                {
                  name: 'buttonLink',
                  type: 'text',
                  label: 'Button Link',
                  required: true,
                },
              ],
            },
            {
              name: 'image',
              label: 'Image',
              type: 'upload',
              relationTo: 'media',
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
