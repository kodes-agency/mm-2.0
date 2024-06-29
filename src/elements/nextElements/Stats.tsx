'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

export const Stats = ({
  id,
  number,
  color,
  text,
}: {
  id: number
  number: number
  color: string
  text: string
}) => {

  let dotArray = []
  for (let i = 0; i < number; i++) {
    dotArray.push(1)
  }

  for (let i = 0; i < 100 - number; i++) {
    dotArray.push(0)
  }

  const sectionRef = useRef<HTMLElement | any>('')
  const numberRef = useRef<HTMLElement | any>('')
  const textRef = useRef<HTMLElement | any>('')

  useGSAP(() => {
    const dots = gsap.utils.toArray(`.dots-${id}`)

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        end: 'center center',
        scrub: 1,
      },
    })

    tl.to(dots, {
      height: '16px',
      stagger: 0.03,
      duration: 1,
      ease: 'power2.inOut',
    })

    tl.from(numberRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        end: 'center center',
        scrub: 1,
      },
      innerText: 1,
      snap: {
        innerText: 1,
      },
    })

    tl.from(textRef.current, {
        scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center',
            end: 'center center',
            scrub: 1,
            },
        opacity: 0,
        },
    )
  })

  return (
    <article
      ref={sectionRef}
      key={id}
      className="stats flex flex-col md:flex-row space-y-5 md:space-y-0 justify-between md:items-center"
    >
      <div className=" min-w-[300px] w-[300px] h-[300px] grid grid-cols-10 gap-0 md:gap-3">
        {
          <>
            {dotArray.map((dot, circleId) => (
              <div
                key={circleId}
                className={`h-4 w-4 border border-black rounded-full overflow-hidden`}
              >
                {dot === 1 && <div className={`dots-${id} bg-black w-4 h-0`}></div>}
              </div>
            ))}
          </>
        }
      </div>
      <div className="flex flex-col md:ml-10 space-y-4">
        <div className="flex">
          <h2 ref={numberRef} className=" font-extrabold text-8xl " style={{ color: color }}>
            {number}
          </h2>
          <h2 className=" font-extrabold text-8xl " style={{ color: color }}>
            %
          </h2>
        </div>
        <p ref={textRef} className="text-black max-w-lg">
          {text}
        </p>
      </div>
    </article>
  )
}
