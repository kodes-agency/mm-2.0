import type { Field } from "payload";

export const landingButton: Field = {
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
}