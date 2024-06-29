import { styleField } from '@/elements/Style'
import type { Block } from 'payload/types'

export const Statistics: Block = {
  slug: 'statistics',
  labels: {
    singular: 'Statistics',
    plural: 'Statistics',
  },
  imageURL: '/media/Statistics-section.png',
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
              type: 'textarea',
              admin: {
                condition: (_, siblingData) => siblingData.hasSubtitle === 'yes',
              },
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
                  name: 'buttonUrl',
                  label: 'Button URL',
                  type: 'text',
                },
              ],
            },
            {
              name: 'statistic',
              label: 'Statistics',
              type: 'array',
              required: true,
              minRows: 1,
              maxRows: 4,
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'prefix',
                      label: 'Prefix',
                      type: 'text',
                      admin: {
                        description:
                          'This is the prefix that will be displayed before the number. For example, "over" or "more than".',
                      },
                    },
                    {
                      name: 'number',
                      label: 'Number',
                      type: 'text',
                      required: true,
                      admin: {
                        description:
                          'This is the number that will be displayed in the statistic. If it is a percentage, include the % symbol.',
                      },
                    },
                    {
                      name: 'suffix',
                      label: 'Suffix',
                      type: 'text',
                      admin: {
                        description:
                          'This is the suffix that will be displayed after the number. For example, "per year" or "times more clients".',
                      },
                    },
                  ],
                },
                {
                  name: 'description',
                  label: 'Description',
                  type: 'textarea',
                  required: true,
                  admin: {
                    description:
                      'This is the description that will be displayed under the statistic. It should explain what the statistic is about.',
                  },
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
