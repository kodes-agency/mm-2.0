import React from 'react'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { Toaster } from "@/components/ui/toaster"
import dynamic from 'next/dynamic'
import configPromise from '@payload-config'
import './global.css'
import { Montserrat } from 'next/font/google'
import Header from '../../components/nextComponents/Header'
import Footer from '@/components/nextComponents/Footer'
const SmoothScroll = dynamic(()=> import('@/components/nextComponents/SmoothScroll'),{ssr:false})



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
      <body>
        <SmoothScroll />
        <Header services={services.docs} />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  )
}

export default Layout
