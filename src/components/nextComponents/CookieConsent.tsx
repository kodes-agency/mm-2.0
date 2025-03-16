'use client'

import { useState, useEffect } from 'react'
import { setCookie, getCookie } from 'cookies-next'
import { sendGTMEvent } from '@next/third-parties/google'
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ScrollArea } from "@/components/ui/scroll-area"


type CookieConsentProps = {
  ad_storage: 'granted' | 'denied'
  ad_user_data: 'granted' | 'denied'
  ad_personalization: 'granted' | 'denied'
  analytics_storage: 'granted' | 'denied'
}

export const CookieConsent = ({changable}:{changable?:boolean}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [consent, setConsent] = useState(true)
  const [consentData, setConsentData] = useState<CookieConsentProps>({
    ad_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted',
    analytics_storage: 'granted',
 })



  useEffect(() => {
    sendGTMEvent({
      event: 'consent',
      action: 'default',
      data: consentData,
    })

    const consentCookie = getCookie('consent')
    if (!consentCookie) setConsent(false)
  }, [consentData])

  const acceptAllCookies = () => {
    setConsent(true)
    setCookie('consent', true)
  }

  const updateCookies = () => {
    setConsent(true)
    setCookie('consent', true)
    sendGTMEvent({
      event: 'consent',
      action: 'update',
      data: consentData,
    })
  }

  if (!changable && consent) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-4 flex flex-col space-y-4 md:flex-row md:space-y-0 md:justify-between md:space-x-10 md:items-center z-50">
      <p className="text-sm text-gray-700">
        We use cookies to improve your experience on our site. By clicking/pressing on the button "Accept" you consent to our <Link className='font-semibold underline' href='/policy/cookie-policy'>use of cookies</Link> and our <Link className='font-semibold underline' href='/policy/privacy-policy'>privacy policy</Link>.
      </p>
      <div className='flex space-x-5 md:space-x-8'>
        { !changable && (
            <button onClick={acceptAllCookies} className="bg-dark-purple text-light-purple hover:bg-light-purple hover:text-dark-purple hover:ring-2 hover:ring-dark-purple transition-all duration-300 px-4 py-2 rounded-lg">
            Accept
            </button>
        )}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger className='text-black'>Manage</DialogTrigger>
            <DialogContent className='!bg-black [&_svg]:text-white'>
                <DialogHeader>
                    <DialogTitle className='text-white'>Cookie consent</DialogTitle>
                    <DialogDescription className='text-white'>Manage your cookie settings here.</DialogDescription>
                </DialogHeader>
                <ScrollArea className='h-[70vh] sm:h-auto'>
                    <section className='flex flex-col space-y-5 py-5'>
                        <div className='flex space-x-5 md:space-x-10 justify-between'>
                            <div>
                                <Label className="text-white" htmlFor='ad_storage'>
                                    <strong className="text-sm ">Ad Delivery & Tracking</strong>
                                </Label>
                                <p className='text-white font-normal text-xs'>This category includes cookies and other data storage mechanisms used to collect and store information for ad delivery and reporting. These cookies help in ensuring that ads are shown to users and track the performance of these ads (e.g., impressions, clicks).</p>   
                            </div>
                            <Switch
                                id='ad_storage'
                                onCheckedChange={(value) => {
                                    setConsentData({
                                        ...consentData,
                                        ad_storage: value ? 'granted' : 'denied',
                                    })
                                }}
                                checked={consentData.ad_storage === 'granted'}
                            />
                        </div>
                        <div className='flex space-x-5 md:space-x-10 justify-between'>
                            <div>
                                <Label className="text-white" htmlFor='ad_user_data'>
                                    <strong className="text-sm ">User Data for Ad Targeting</strong>
                                </Label>
                                <p className='text-white font-normal text-xs'>This category involves collecting and using data about users to tailor ads to their preferences and behavior. This includes tracking user interactions, demographics, and interests to deliver more relevant advertisements.</p>
                            </div>
                            <Switch
                                id='ad_user_data'
                                onCheckedChange={(value) => {
                                    setConsentData({
                                        ...consentData,
                                        ad_user_data: value ? 'granted' : 'denied',
                                    })
                                }}
                                checked={consentData.ad_user_data === 'granted'}
                            />
                        </div>
                        <div className='flex space-x-5 md:space-x-10 justify-between'>
                            <div>
                                <Label className="text-white" htmlFor='ad_personalization'>
                                    <strong className="text-sm ">Personalized Ad Experiences</strong>
                                </Label>
                                <p className='text-white font-normal text-xs'>Cookies under this category are used to personalize ads based on user behavior, preferences, and previous interactions. These cookies help in showing personalized ads to users, enhancing their ad experience by showing more relevant content.</p>
                            </div>
                            <Switch
                                id='ad_personalization'
                                onCheckedChange={(value) => {
                                    setConsentData({
                                        ...consentData,
                                        ad_personalization: value ? 'granted' : 'denied',
                                    })
                                }}
                                checked={consentData.ad_personalization === 'granted'}  
                            />
                        </div>
                        <div className='flex space-x-5 md:space-x-10 justify-between'>
                            <div>
                                <Label className="text-white" htmlFor='analytics_storage'>
                                    <strong className="text-sm ">Website Analytics</strong>
                                </Label>
                                <p className='text-white font-normal text-xs'>This category includes cookies used to collect and store data for analytics purposes. These cookies help website owners understand how users interact with their site, track user behavior, and gather data for improving website performance and user experience.</p>
                            </div>
                            <Switch
                                id='analytics_storage'
                                onCheckedChange={(value) => {
                                    setConsentData({
                                        ...consentData,
                                        analytics_storage: value ? 'granted' : 'denied',
                                    })
                                }}
                                checked={consentData.analytics_storage === 'granted'}
                            />
                        </div>
                    </section>
                </ScrollArea>
                        <div className='bg-black w-full'>
                            <Button 
                                onClick={()=>{
                                    updateCookies()
                                    setIsOpen(false)
                                }}      
                                className='w-full bg-white text-black'>Apply changes</Button>
                        </div>
            </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
