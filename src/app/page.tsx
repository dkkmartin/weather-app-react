'use client'

import { useState, useEffect } from 'react'
import Weather from '@/components/frontpage-components/Weather'
import Navbar from '@/components/frontpage-components/Navbar'
import Image from 'next/image'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'
import Drawer from '@/components/frontpage-components/Drawer'
import { weather, WeatherResponse } from './api/weatherData'

export default function App() {
  const handle = useFullScreenHandle()
  const [weatherData, setWeatherData] = useState<WeatherResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const location = { city: 'amsterdam' }
    weather({ location })
      .then((result) => {
        setWeatherData(result)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

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
          <Weather
            weather={{
              city: 'Amsterdam',
              temperature: 5,
              description: 'Mostly cloudy',
              high: 6,
              low: 2,
            }}
          />
          <Image
            className="absolute top-[28%]"
            src="/assets/house.png"
            alt="house image"
            width={390}
            height={390}
          ></Image>
          <Drawer />
          <Navbar />
        </main>
      </FullScreen>
    </div>
  )
}
