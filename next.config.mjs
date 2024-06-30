import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  reactStrictMode: true,
  eslint: {
    ignoreBuildErrors: true,
  },
  typescript:{
    ignoreBuildErrors: true,
  },
  ignoreBuildErrors: true,
}

export default withPayload(nextConfig)
