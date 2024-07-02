import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    useAsTitle: 'title',
  },
  labels: {
    singular: 'Media',
    plural: 'Media',
  },
  access: {
    read: () => true,
  },
  upload: {
    staticDir: 'media',
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*', 'application/pdf'],
    // formatOptions: {
    //     format: 'webp',
    //     options: {
    //         quality: 60,
    //     },
    // },

  },
  fields: [
    {
        name: 'alt',
        label: 'Alt',
        type: 'text',
        required: true,
    }
  ],
}