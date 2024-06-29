import type { Block } from 'payload/types'
import { styleField } from '@/elements/Style'

export const FAQs: Block = {
  slug: 'faqs',
  labels: {
    singular: 'FAQs',
    plural: 'FAQs',
  },
  imageURL: '/media/FAQ-section.png',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          name: 'content',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'hasTitle',
                  label: 'Do you need a title for the section?',
                  type: 'radio',
                  defaultValue: 'yes',
                  options: [
                    {
                      label: 'Yes',
                      value: 'yes',
                    },
                    {
                      label: 'No',
                      value: 'no',
                    },
                  ],
                },
                {
                  name: 'hasSubtitle',
                  label: 'Do you need a subtitle for the section?',
                  type: 'radio',
                  defaultValue: 'yes',
                  options: [
                    {
                      label: 'Yes',
                      value: 'yes',
                    },
                    {
                      label: 'No',
                      value: 'no',
                    },
                  ],
                },
              ],
            },
            {
              name: 'title',
              label: 'Title',
              type: 'text',
              required: true,
              admin: {
                condition: (_, siblingData) => siblingData.hasTitle === 'yes',
              },
            },
            {
              name: 'subtitle',
              label: 'Subtitle',
              type: 'text',
              required: true,
              admin: {
                condition: (_, siblingData) => siblingData.hasSubtitle === 'yes',
              },
            },
            {
              name: 'faq',
              label: 'FAQ',
              type: 'relationship',
              relationTo: 'faqs',
              hasMany: true,
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
