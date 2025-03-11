import React from 'react'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { Toaster } from '@/components/ui/toaster'
import dynamic from 'next/dynamic'
import { GoogleTagManager } from '@next/third-parties/google'
import configPromise from '@payload-config'
import './global.css'
import { Montserrat } from 'next/font/google'
import Header from '../../components/nextComponents/Header'
import Footer from '@/components/nextComponents/Footer'
import { CookieConsent } from '@/components/nextComponents/CookieConsent'
import Script from 'next/script'
const SmoothScroll = dynamic(() => import('@/components/nextComponents/SmoothScroll'), {
  ssr: false,
})

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

/* Our app sits here to not cause any conflicts with payload's root layout  */
const Layout: React.FC<{ children: React.ReactNode }> = async ({ children }) => {
  const payload = await getPayloadHMR({ config: configPromise })

  const services = await payload.find({
    collection: 'services',
  })
  return (
    <html className={montserrat.className}>
      <GoogleTagManager gtmId="GTM-KV5BRZVR"/>
      <Script defer src="https://umami.kodes.agency/script.js" data-website-id="c38be8f9-1b5d-4288-b36f-137e9d82d77f"/>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KV5BRZVR"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
      <CookieConsent />
        <SmoothScroll />
        <Header services={services.docs} />
          {children}
        <Footer />
      </body>
    </html>
  )
}

export default Layout
