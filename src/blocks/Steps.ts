import type { Block } from 'payload'
import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical'
import { styleField } from '@/elements/Style'
import { landingButton } from '@/elements/LandingButton'

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
              type: 'collapsible',
              label: 'Button',
              admin: {
                condition: (_, siblingData) => siblingData.hasButton === 'yes',
              },
              fields: [
                {
                  name: 'buttonType',
                  label: 'Button Type',
                  type: 'radio',
                  defaultValue: 'cta',
                  options: [
                    {
                      label: 'CTA button',
                      value: 'cta',
                    },
                    {
                      label: 'Link button',
                      value: 'link',
                    },
                  ],
                },
                {
                  name: 'buttonText',
                  label: 'Button Text',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'ctaTitle',
                  label: 'CTA Title',
                  type: 'text',
                  required: true,
                  admin: {
                    condition: (_, siblingData) => {
                      return siblingData?.buttonType === 'cta'
                    }
                  }
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'ctaHasMessage',
                      label: 'CTA has message field',
                      type: 'checkbox',
                      required: true,
                      admin: {
                        condition: (_, siblingData) => {
                          return siblingData?.buttonType === 'cta'
                        }
                      }
                    },
                    {
                      name: 'ctaHasBudget',
                      label: 'CTA has budget field',
                      type: 'checkbox',
                      required: true,
                      admin: {
                        condition: (_, siblingData) => {
                          return siblingData?.buttonType === 'cta'
                        }
                      }
                    }
                  ],
                },
                {
                  name: 'buttonLink',
                  label: 'Link',
                  type: 'text',
                  required: true,
                  admin: {
                    condition: (_, siblingData) => {
                      return siblingData?.buttonType === 'link'
                    }
                  }
                }
              ]
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
