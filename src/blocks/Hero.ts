import type { Block } from 'payload'
import { styleField } from '@/elements/Style'
import { landingButton } from '@/elements/LandingButton'

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
              type: 'row',
              fields: [
                {
                  name: 'title',
                  label: 'Title',
                  type: 'text',
                  required: true,
                  admin: {
                    width: '75%'
                  }
                },
                {
                  name: 'label',
                  label: 'Label',
                  type: 'text',
                  admin: {
                    width: '25%'
                  }
                },
              ]
            },
            {
              name: 'subtitle',
              label: 'Subtitle',
              type: 'textarea',
              required: true,
            },
            {
              type: 'collapsible',
              label: 'Button',
              admin: {
                
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
