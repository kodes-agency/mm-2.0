import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { s3Storage } from '@payloadcms/storage-s3'
import { Users } from './collections/Users'
import { LandingPages } from './collections/landing-pages'
import { Media } from './collections/Media'
import { Faqs } from './collections/faqs'
import { Blogs } from './collections/blogs'
import { Reveiws } from './collections/reviews'
import { Services } from './collections/services'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
  admin: {
    user: Users.slug,
  },
  collections: [Services, LandingPages, Blogs, Reveiws, Faqs, Media, Users],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  // sharp,
  // upload: {  
  //   formatOptions: {
  //     format: 'webp',
  //   }
  // },
  // db: mongooseAdapter({
  //   url: process.env.DATABASE_URI || '',
  // }),
  plugins: [
    s3Storage({
      collections: {
        ['media']: {
          prefix: 'media',
        },
      },
      bucket: process.env.S3_BUCKET || '',
      config: {
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
        },
        region: process.env.S3_REGION,
        // ... Other S3 configuration
      },
    }),
  ],
})
