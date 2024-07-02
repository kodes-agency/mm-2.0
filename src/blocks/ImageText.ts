import type { Block } from 'payload'
import { styleField } from '@/elements/Style'
import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical'
import { landingButton } from '@/elements/LandingButton'

export const ImageText: Block = {
  slug: 'image-text',
  labels: {
    singular: 'Image Text',
    plural: 'Image Texts',
  },
  imageURL: '/media/Image-text-section.png',
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
            }
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
