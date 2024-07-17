'use client'

import { Dialog, DialogClose, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { useToast } from '@/components/ui/use-toast'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Logo, Name } from '@/elements/nextElements/SVGs'
import Link from 'next/link'
import { useState } from 'react'
import { subscribe } from '@/functions/actions'
import { DialogTitle } from '@radix-ui/react-dialog'

const SubscribePopup = ({
  openText,
  style,
  hasMessage,
  hasBudget,
  title,
}: {
  openText: string
  style?: string
  hasMessage?: boolean
  hasBudget?: boolean
  title?: string
}) => {
  const [userData, setUserData] = useState({
    email: '',
    phone: '',
    name: '',
    company: '',
    budget: '',
    message: '',
  })
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false)
  const { toast } = useToast()

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className={`${style} uppercase rounded-full p-2 w-fit text-sm font-semibold px-5 transition-all duration-300`}>
          {openText}
        </button>
      </DialogTrigger>
      <DialogContent className="xl:w-[1152px] max-w-6xl max-h-[1000px] !rounded-sm transition-all duration-500 !bg-black [&_svg]:text-white">
        <section className="w-full h-full flex flex-col items-center">
          <div className="flex flex-row space-x-4 md:flex-col items-center md:space-x-0 md:space-y-4 mb-5 md:mb-10">
            <Logo fill="white" style="w-8 h-8" />
            <Name fill="white" style="" />
          </div>
          {isFormSubmitted && (
            <div id="newLead" className="w-full h-full flex flex-col min-h-[50vh] justify-center items-center">
              <div className="text-light-purple font-bold mb-3 md:mb-5 text-center text-4xl ">
                Thank you for your request!
              </div>
              <div className="text-white mb-3 md:mb-5 text-center text-xl ">
                We will get back to you shortly.
              </div>
            </div>
          )}
          {!isFormSubmitted && (
            <div className="w-full h-full flex flex-col items-center">
              <DialogTitle className='text-gray mb-3 md:mb-5 text-center text-xl'>{title}</DialogTitle>
              <div className="flex w-full">
                <div className="border-y border-gray/40 w-1/2 p-1">
                  <Input
                    type="email"
                    placeholder="Email"
                    className="w-full text-white !bg-black text-base h-24 rounded-none border-none"
                    onInput={(e) => setUserData({ ...userData, email: e.currentTarget.value })}
                  />
                </div>
                <div className="h-full w-px bg-gray/40 -z-10"></div>
                <div className="border-y border-gray/40 w-1/2 p-1">
                  <Input
                    type="text"
                    placeholder="Phone number"
                    className="w-full text-white !bg-black text-base rounded-none h-24 border-none"
                    onInput={(e) => setUserData({ ...userData, phone: e.currentTarget.value })}
                  />
                </div>
              </div>
              <div className="flex w-full">
                <div className="border-b border-gray/40 w-1/2 p-1">
                  <Input
                    type="text"
                    placeholder="Name"
                    className="w-full text-white !bg-black text-base h-24 rounded-none border-none"
                    onInput={(e) => setUserData({ ...userData, name: e.currentTarget.value })}
                  />
                </div>
                <div className="h-full w-px bg-gray/40 -z-10"></div>
                <div className="border-b border-gray/40 w-1/2 p-1">
                  <Input
                    type="text"
                    placeholder="Company name"
                    className="w-full text-white !bg-black text-base rounded-none h-24 border-none"
                    onInput={(e) => setUserData({ ...userData, company: e.currentTarget.value })}
                  />
                </div>
              </div>
              {hasMessage && (
                <div className="flex w-full">
                  <div className="border-b border-gray/40 w-full p-1">
                    <Textarea
                      placeholder="Tell us a bit about your project"
                      className="w-full text-white !bg-black text-base rounded-none h-24 border-none"
                      onInput={(e) => setUserData({ ...userData, message: e.currentTarget.value })}
                    />
                  </div>
                </div>
              )}
              {hasBudget && (
                <div className="flex w-full">
                  <div className="border-b border-gray/40 w-1/3 p-1">
                    <button
                      className={`${
                        userData.budget === 'below $3,000'
                          ? 'bg-dark-purple/80 ring-2 ring-light-purple font-bold'
                          : ''
                      } text-xs md:text-sm h-24 pl-1 md:pl-3 text-white text-start w-full hover:bg-dark-purple/40 hover:ring-1 hover:ring-gray transition-all duration-300`}
                      onClick={() => setUserData({ ...userData, budget: 'below $3,000' })}
                    >
                      I have a budget below $3,000
                    </button>
                  </div>
                  <div className="h-full w-px bg-gray/40 -z-10"></div>
                  <div className="border-b border-gray/40 w-1/3 p-1">
                    <button
                      className={`${
                        userData.budget === '$3,001 - $10,000'
                          ? 'bg-dark-purple/80 ring-2 ring-light-purple font-bold'
                          : ''
                      } text-xs md:text-sm  h-24 pl-1 md:pl-3 text-white text-start w-full hover:bg-dark-purple/40 hover:ring-1 hover:ring-gray transition-all duration-300`}
                      onClick={() => setUserData({ ...userData, budget: '$3,001 - $10,000' })}
                    >
                      I have a budget between $3,001 - $10,000
                    </button>
                  </div>
                  <div className="h-full w-px bg-gray/40 -z-10"></div>
                  <div className="border-b border-gray/40 w-1/3 p-1">
                    <button
                      className={`${
                        userData.budget === 'above $10,000'
                          ? 'bg-dark-purple/80 ring-2 ring-light-purple font-bold'
                          : ''
                      } text-xs md:text-sm  h-24 pl-1 md:pl-3 text-white text-start w-full hover:bg-dark-purple/40 hover:ring-1 hover:ring-gray transition-all duration-300`}
                      onClick={() => setUserData({ ...userData, budget: 'above $10,000' })}
                    >
                      I have a budget above $10,001
                    </button>
                  </div>
                </div>
              )}
              <p className="text-gray/80 text-center text-xs max-w-96 mt-5">
                By clicking on the "Send a request" button, you consent to the{' '}
                <Link
                  href="/privacy/privacy-policy"
                  className="text-gray/80 underline font-medium hover:text-white transition-all duration-300 text-center text-xs max-w-80"
                >
                  processing of personal data
                </Link> and agree to our{' '}
                <Link
                  href="/privacy/privacy-policy"
                  className="text-gray/80 underline font-medium hover:text-white transition-all duration-300 text-center text-xs max-w-80"
                  >
                    cookie policy.
                  </Link>
              </p>
            </div>
          )}
          <div className="flex space-x-10 mt-5">
            <DialogClose asChild>
              <button className="text-gray hover:ring-2 transition-all duration-300 hover:ring-white border w-fit h-fit border-gray/50 text-sm rounded-full font-medium py-1.5 px-3">
                Close
              </button>
            </DialogClose>
            <button
              onClick={async () => {
                const subscribeResult = await subscribe(userData)
                if (!subscribeResult.success && subscribeResult.message instanceof Array) {
                  toast({
                    title: `Error`,
                    description: `${subscribeResult.message[0].message}`,
                  })
                } else if (!subscribeResult.success && typeof subscribeResult.message === 'string') {
                  toast({
                    title: 'Error!',
                    description: `${subscribeResult.message}`,
                  })
                }

                if (subscribeResult.success) setIsFormSubmitted(true)
              }}
              className={`hover:ring-2 disabled:cursor-not-allowed disabled:bg-green disabled:text-white hover:ring-light-purple hover:bg-dark-purple hover:text-light-purple transition-all duration-300 py-1.5 px-3 bg-light-purple w-fit h-fit text-sm text-dark-purple font-medium rounded-full`}
              disabled={isFormSubmitted}
            >
              {isFormSubmitted ? 'Request sent successfully!' : 'Send a request'}
            </button>
          </div>
        </section>
      </DialogContent>
    </Dialog>
  )
}

export default SubscribePopup
