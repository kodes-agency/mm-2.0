'use client'

import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import { usePathname } from 'next/navigation'
import { Blog } from '@/payload-types'
import useIsomorphicLayoutEffect from '@/lib/isomorphicEffect'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import {
  FacebookShare,
  TwitterShare,
  WhatsappShare,
  EmailShare,
  LinkedinShare,
} from 'react-share-kit'

export const Content = ({ blog }: { blog: Blog }) => {
  const H3Texts =
    blog.content.content_html
      ?.match(/<h3>(.*?)<\/h3>/g)
      ?.map((h3) => h3.replace(/<[^>]*>?/gm, '')) || []
  const pathname = usePathname()

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollToPlugin)
  })

  function scrollToHeading(heading: string) {
    const h3Els = document.querySelectorAll('h3')
    h3Els.forEach((el) => {
      if (el.textContent === heading) {
        gsap.to(window, { duration: 1, scrollTo: el })
      }
    })
  }

  return (
    <article className="flex flex-col items-center pb-40 px-5 bg-white space-y-10 md:space-y-0">
      <nav className="md:sticky md:top-32 md:pt-3 md:left-0 w-full md:h-0">
        <div className="flex flex-col md:ml-[2vw] lg:ml-[8vw] pt-2 md:max-w-[20vw] lg:max-w-[15vw]">
          <h3 className="font-bold">Main topics:</h3>
          <ul className="flex flex-col space-y-2">
            {H3Texts?.map((h3, id) => (
              <li key={id} className="group">
                <div className="flex flex-col">
                  <button
                    onClick={() => scrollToHeading(h3)}
                    className="text-black text-start text-sm w-fit"
                  >
                    {id + 1}. {h3}
                  </button>
                  <span className="w-0 h-0.5 bg-dark-purple group-hover:w-full transition-all duration-500"></span>
                </div>
              </li>
            ))}
            <Popover>
              <PopoverTrigger>
                <div className='flex flex-row items-center space-x-1.5 border border-black rounded-full p-1 px-4 mt-2 w-fit hover:bg-light-cyan'>
                <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
                      height="20px"
                      width="20px"
                      version="1.1"
                      id="Capa_1"
                      viewBox="0 0 481.6 481.6"
                    >
                      <g>
                        <path d="M381.6,309.4c-27.7,0-52.4,13.2-68.2,33.6l-132.3-73.9c3.1-8.9,4.8-18.5,4.8-28.4c0-10-1.7-19.5-4.9-28.5l132.2-73.8   c15.7,20.5,40.5,33.8,68.3,33.8c47.4,0,86.1-38.6,86.1-86.1S429,0,381.5,0s-86.1,38.6-86.1,86.1c0,10,1.7,19.6,4.9,28.5   l-132.1,73.8c-15.7-20.6-40.5-33.8-68.3-33.8c-47.4,0-86.1,38.6-86.1,86.1s38.7,86.1,86.2,86.1c27.8,0,52.6-13.3,68.4-33.9   l132.2,73.9c-3.2,9-5,18.7-5,28.7c0,47.4,38.6,86.1,86.1,86.1s86.1-38.6,86.1-86.1S429.1,309.4,381.6,309.4z M381.6,27.1   c32.6,0,59.1,26.5,59.1,59.1s-26.5,59.1-59.1,59.1s-59.1-26.5-59.1-59.1S349.1,27.1,381.6,27.1z M100,299.8   c-32.6,0-59.1-26.5-59.1-59.1s26.5-59.1,59.1-59.1s59.1,26.5,59.1,59.1S132.5,299.8,100,299.8z M381.6,454.5   c-32.6,0-59.1-26.5-59.1-59.1c0-32.6,26.5-59.1,59.1-59.1s59.1,26.5,59.1,59.1C440.7,428,414.2,454.5,381.6,454.5z" />
                      </g>
                    </svg>
                  <span className="text-black text-start w-fit">
                    Share</span>
                </div>
              </PopoverTrigger>
              <PopoverContent className="!bg-white border border-black rounded-2xl mt-2">
                <div className="flex flex-row justify-between">
                  <EmailShare
                    url={'https://missionmorph.com' + pathname}
                    subject={blog.title}
                    blankTarget={true}
                    round={true}
                    size={40}
                  />
                  <FacebookShare
                    url={'https://missionmorph.com' + pathname}
                    title={blog.title}
                    blankTarget={true}
                    round={true}
                    size={40}
                  />
                  <TwitterShare
                    url={'https://missionmorph.com' + pathname}
                    title={blog.title}
                    blankTarget={true}
                    round={true}
                    size={40}
                  />
                  <LinkedinShare
                    url={'https://missionmorph.com' + pathname}
                    title={blog.title}
                    blankTarget={true}
                    round={true}
                    size={40}
                  />
                  <WhatsappShare
                    url={'https://missionmorph.com' + pathname}
                    title={blog.title}
                    blankTarget={true}
                    round={true}
                    size={40}
                  />
                </div>
                <div>
                  <button
                    className="text-black bg-white border border-black w-full rounded-full p-1 mt-2 hover:bg-light-cyan transition-all duration-300"
                    onClick={(el) => {
                      navigator.clipboard.writeText('https://missionmorph.com' + pathname)
                      // @ts-expect-error
                      el.target.textContent = 'Copied!'
                    }}
                  >
                    Copy link
                  </button>
                </div>
              </PopoverContent>
            </Popover>
          </ul>
        </div>
      </nav>
      <div
        id="box"
        className="flex flex-col text-black md:max-w-[60vw] md:w-[768px] md:-mr-[20vw]
          [&_blockquote]:font-bold [&_blockquote]:pl-4 [&_blockquote]:text-slate-500 [&_blockquote]:max-w-3xl [&_blockquote]:border-l-2 [&_blockquote]:border-black 
          space-y-4
          [&_h3]:text-4xl [&_h3]:pt-3
          [&_img]:w-full [&_img]:h-[50vh] [&_img]:object-cover
          [&_h4]:text-2xl
          [&_ul]:list-disc [&_ul]:pl-6 md:[&_ul]:pl-12 [&_ul]:space-y-1
          [&_ol]:list-decimal [&_ol]:pl-6 md:[&_ol]:pl-12 [&_ol]:space-y-1
          "
        dangerouslySetInnerHTML={{ __html: blog.content.content_html || '' }}
      ></div>
    </article>
  )
}
