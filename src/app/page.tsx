'use client'

import React, { useCallback } from 'react'
import Weather from '@/components/frontpage-components/Weather'
import Navbar from '@/components/frontpage-components/Navbar'
import Image from 'next/image'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'
import Pill from '@/components/frontpage-components/Pill'

export default function App() {
  const handle = useFullScreenHandle()

  return (
    <div>
      <button
        className="absolute right-4 top-4 bg-transparent border px-2 py-1 rounded-lg font-family-default-regular-body text-white"
        onClick={handle.enter}
      >
        Fullscreen
      </button>
      <FullScreen handle={handle}>
        <main className="h-[100dvh] bg-homepage-background bg-cover flex flex-col items-center">
          <Weather />
          <Image
            className="absolute top-[28%]"
            src="/assets/house.png"
            alt="house image"
            width={390}
            height={390}
          ></Image>
          <Pill
            weather={{ time: '12 am', percentages: '30', temperature: '19' }}
          ></Pill>
          <Navbar />
        </main>
      </FullScreen>
    </div>
  )
}
