import type { Block } from 'payload/types'
import { styleField } from '@/elements/Style'
import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical'

export const ImageText: Block = {
  slug: 'image-text',
  labels: {
    singular: 'Image Text',
    plural: 'Image Texts',
  },
  imageURL: '/api/media/file/thumbnail.png',
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
                  name: 'hasButton',
                  label: 'Do you need a button for the section?',
                  type: 'radio',
                  defaultValue: 'no',
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
                  name: 'imagePosition',
                  label: 'Position of the image',
                  defaultValue: 'left',
                  type: 'radio',
                  options: [
                    {
                      label: 'Left',
                      value: 'left',
                    },
                    {
                      label: 'Right',
                      value: 'right',
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
              name: 'text',
              label: 'Text content',
              type: 'richText',
              required: true,
              editor: lexicalEditor({
                features: ({ defaultFeatures }) => [...defaultFeatures, HTMLConverterFeature({})],
              }),
            },
            lexicalHTML('text', { name: 'text_html' }),
            {
              name: 'image',
              label: 'Image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
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
                  name: 'buttonLink',
                  label: 'Button Link',
                  type: 'text',
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
