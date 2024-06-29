'use client'

import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import { Blog } from '@/payload-types'
import useIsomorphicLayoutEffect from '@/lib/isomorphicEffect'

export const Content = ({ blog }: { blog: Blog }) => {
  const H3Texts = blog.content_html?.match(/<h3>(.*?)<\/h3>/g)?.map((h3) => h3.replace(/<[^>]*>?/gm, '')) || []

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
    <article className="flex flex-col items-center pb-20 px-5 bg-white space-y-10 md:space-y-0">
      <nav className="md:sticky md:top-32 md:pt-3 md:left-0 w-full md:h-0">
        <div className='flex flex-col md:ml-[2vw] lg:ml-[8vw] pt-2 md:max-w-[20vw] lg:max-w-[15vw]'>
          <h3 className="font-bold">Main topics:</h3>
          <ul className="flex flex-col space-y-2">
            {H3Texts?.map((h3, id) => (
              <li key={id}>
                <button
                  onClick={() => scrollToHeading(h3)}
                  className="text-black text-start text-sm"
                >
                  {id + 1}. {h3}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div id='box'
        className="flex flex-col text-black md:max-w-[60vw] md:w-[768px] md:-mr-[20vw]
          [&_blockquote]:font-bold [&_blockquote]:pl-5 md:[&_blockquote]:pl-10 [&_blockquote]:text-red [&_blockquote]:text-lg [&_blockquote]:max-w-3xl
          space-y-4
          [&_h3]:text-4xl [&_h3]:pt-3
          [&_img]:w-full [&_img]:h-[50vh] [&_img]:object-cover
          [&_h4]:text-2xl
          [&_ul]:list-disc [&_ul]:pl-6 md:[&_ul]:pl-12 [&_ul]:space-y-1
          [&_ol]:list-decimal [&_ol]:pl-6 md:[&_ol]:pl-12 [&_ol]:space-y-1
          "
        dangerouslySetInnerHTML={{ __html: blog.content_html || '' }}
      ></div>
    </article>
  )
}
