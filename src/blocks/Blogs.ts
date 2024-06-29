import type { Block } from 'payload/types'
import { styleField } from '@/elements/Style'

export const Blog: Block = {
  slug: 'blog',
  labels: {
    singular: 'Blog',
    plural: 'Blogs',
  },
  imageURL: '/media/Blog-section.png',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          name: 'content',
          fields: [
            {
                type: 'relationship',
                name: 'blogs',
                label: 'Blogs',
                relationTo: 'blogs',
                hasMany: true,
                required: true,
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
