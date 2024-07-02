import type { Block } from 'payload'
import { styleField } from '@/elements/Style'
import { landingButton } from '@/elements/LandingButton'

export const Pricing: Block = {
  slug: 'pricing',
  labels: {
    singular: 'Pricing',
    plural: 'Pricings',
  },
  imageURL: '/media/Pricing-section.png',
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
                                    value: "yes",
                                },
                                {
                                    label: 'No',
                                    value: "no",
                                },
                            ]
                        },
                        {
                            name: 'hasSubtitle',
                            label: 'Do you need a subtitle for the section?',
                            type: 'radio',
                            defaultValue: 'yes',
                            options: [
                                {
                                    label: 'Yes',
                                    value: "yes",
                                },
                                {
                                    label: 'No',
                                    value: "no",
                                },
                            ]
                        }
                    ]
                },
                {
                  name: 'title',
                  label: 'Title',
                  type: 'text',
                  required: true,
                  admin: {
                    condition: (_, siblingData) => siblingData.hasTitle === 'yes',
                  }
                },
                {
                  name: 'subtitle',
                  label: 'Subtitle',
                  type: 'text',
                  required: true,
                  admin: {
                    condition: (_, siblingData) => siblingData.hasSubtitle === 'yes',
                  }
                },
                {
                  name: 'packages',
                  label: 'Price Packages',
                  type: 'array',
                  fields: [
                    {
                        type: 'row',
                        fields: [
                            {
                                name: "isDiscounted",
                                label: "Is the package with discounted price?",
                                type: "radio",
                                defaultValue: "no",
                                options: [
                                    {
                                        label: "Yes",
                                        value: "yes",
                                    },
                                    {
                                        label: "No",
                                        value: "no",
                                    }
                                ]
                            },
                            {
                                name: "isMostPopular",
                                label: "Is this the most popular package?",
                                type: "radio",
                                defaultValue: "no",
                                options: [
                                    {
                                        label: "Yes",
                                        value: "yes",
                                    },
                                    {
                                        label: "No",
                                        value: "no",
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'title',
                        label: 'Title',
                        type: 'text',
                        required: true,
                    },
                    {
                        name: 'description',
                        label: 'Description',
                        type: 'textarea',
                        required: true,
                    },
                    {
                        type: 'row',
                        fields: [
                            {
                                name: 'regularPrice',
                                label: 'Regular Price',
                                type: 'text',
                                required: true,
                            },
                            {
                                name: 'discountedPrice',
                                label: 'Discounted Price',
                                type: 'text',
                                admin: {
                                    condition: (_, siblingData) => siblingData.isDiscounted === 'yes',
                                },
                            }
                        ]
                    },
                    {
                        type: 'text',
                        name: 'priceDetails',
                        label: 'Price Details',
                    },
                    {
                      type: 'collapsible',
                      label: 'Button',
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
                        name: 'features',
                        label: 'Features',
                        type: 'array',
                        minRows: 1,
                        fields: [
                            {
                                name: 'feature',
                                label: 'Feature',
                                type: 'text',
                                required: true,
                            }
                        ]
                    },
                    {
                        name: 'services',
                        label: 'Services',
                        type: 'array',
                        minRows: 1,
                        fields: [
                            {
                                name: 'service',
                                label: 'Service',
                                type: 'text',
                                required: true,
                            }
                        ]
                    }
                  ]
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