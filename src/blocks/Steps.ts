import type { Block } from 'payload/types'
import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical'
import { styleField } from '@/elements/Style'

export const Steps: Block = {
  slug: 'steps',
  labels: {
    singular: 'Steps',
    plural: 'Steps',
  },
  imageURL: '/media/Steps-section.png',
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
                {
                  name: 'hasButton',
                  label: 'Do you need a button for the section?',
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
              admin: {
                condition: (_, siblingData) => siblingData.hasTitle === 'yes',
              },
            },
            {
              name: 'subtitle',
              label: 'Subtitle',
              type: 'richText',
              admin: {
                condition: (_, siblingData) => siblingData.hasSubtitle === 'yes',
              },
              editor: lexicalEditor({
                features: ({ defaultFeatures }) => [...defaultFeatures, HTMLConverterFeature({})],
              }),
            },
            lexicalHTML('subtitle', { name: 'subtitle_html' }),
            {
              type: 'row',
              admin: {
                condition: (_, siblingData) => siblingData.hasButton === 'yes',
              },
              fields: [
                {
                  name: 'buttonText',
                  label: 'Button Text',
                  type: 'text',
                },
                {
                  name: 'buttonUrl',
                  label: 'Button URL',
                  type: 'text',
                },
              ],
            },
            {
              name: 'steps',
              label: 'Steps',
              type: 'array',
              required: true,
              minRows: 2,
              fields: [
                {
                  type: 'text',
                  name: 'title',
                  label: 'Title',
                  required: true,
                },
                {
                  name: 'description',
                  label: 'Description',
                  type: 'textarea',
                  required: true,
                },
              ],
            },
          ],
        },
        {
          label: "Style",
          name: "style",
          fields: [
            styleField
          ]
        }
      ]
    },
  ],
}
