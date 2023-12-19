'use client'

import { useState, useEffect } from 'react'
import Weather from '@/components/Weather'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'
import Drawer from '@/components/Drawer'
import { weather, WeatherResponse } from './api/weatherData'
import { useGeolocation } from '@uidotdev/usehooks'

export default function App() {
  const handle = useFullScreenHandle()
  const [weatherData, setWeatherData] = useState<WeatherResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const state = useGeolocation()

  useEffect(() => {
    if (!state.loading) {
      const location = { lat: state.latitude ?? 0, lon: state.longitude ?? 0 }
      weather({ location })
        .then((result) => {
          setWeatherData(result)
          setLoading(false)
        })
        .catch((err) => {
          setError(err.message)
          setLoading(false)
        })
    }
  }, [state.latitude, state.loading, state.longitude])

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
          {loading ? (
            <div className="flex flex-col items-center absolute top-20">
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="w-14 h-14 text-gray-200 animate-spin dark:text-gray-600 fill-labeldarkprimary"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
              <p className="text-white z-50 text-3xl text-center">
                loading ...
              </p>
              <p className="text-white z-50 text-xl text-center">
                (You may need to enable permissions)
              </p>
            </div>
          ) : (
            <>
              <Weather
                weather={{
                  city: weatherData?.name || '',
                  temperature: weatherData?.main.temp || 0,
                  description: weatherData?.weather[0].description || '',
                  high: weatherData?.main.temp_max || 0,
                  low: weatherData?.main.temp_min || 0,
                }}
              />
              <Drawer />
            </>
          )}
          <Image
            className="absolute top-[28%]"
            src="/assets/house.png"
            alt="house image"
            width={390}
            height={390}
          ></Image>
          <Navbar />
        </main>
      </FullScreen>
    </div>
  )
}
