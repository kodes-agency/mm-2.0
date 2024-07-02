import type { Block } from 'payload'
import {
  HTMLConverterFeature,
  HeadingFeature,
  lexicalEditor,
  lexicalHTML,
} from '@payloadcms/richtext-lexical'
import { styleField } from '@/elements/Style'

export const Text: Block = {
  slug: 'text',
  labels: {
    singular: 'Text',
    plural: 'Text',
  },
  imageURL: '/media/Text-section.png',
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
              name: 'text',
              label: 'Text',
              type: 'richText',
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
            lexicalHTML('text', { name: 'text_html' }),
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
