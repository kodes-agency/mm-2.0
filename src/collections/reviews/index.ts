import type { CollectionConfig } from 'payload'

export const Reveiws: CollectionConfig = {
  slug: 'reviews',
  admin: {
    useAsTitle: 'text',
  },
  labels: {
    singular: 'Review',
    plural: 'Reviews',
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'text',
        },
        {
          name: 'name',
          label: 'Name',
          type: 'text',
        },
      ],
    },
    {
      type: 'textarea',
      name: 'text',
      label: 'Review Text',
      required: true,
    },
  ],
}
