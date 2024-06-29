'use client'

import React, { useEffect } from 'react'
import Lenis from 'lenis'

const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return <div className="absolute"></div>
}

export default SmoothScroll
