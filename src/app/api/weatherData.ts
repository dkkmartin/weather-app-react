'use server'

type Location = {
  lat?: number
  lon?: number
  city?: string
}

export type WeatherResponse = {
  coord: {
    lon: number
    lat: number
  }
  weather: {
    id: number
    main: string
    description: string
    icon: string
  }[]
  base: string
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
    sea_level: number
    grnd_level: number
  }
  visibility: number
  wind: {
    speed: number
    deg: number
    gust: number
  }
  clouds: {
    all: number
  }
  rain: {
    '1h'?: number
    '3h'?: number
  }
  snow: {
    '1h'?: number
    '3h'?: number
  }
  dt: number
  sys: {
    type: number
    id: number
    country: string
    sunrise: number
    sunset: number
  }
  timezone: number
  id: number
  name: string
  cod: number
}

export async function weather({ location }: { location: Location }) {
  let response

  if (location.city) {
    response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location.city}&units=metric&appid=${process.env.API_KEY}`
    )
  } else if (location.lat && location.lon) {
    response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&units=metric&appid=${process.env.API_KEY}`
    )
  } else {
    throw new Error('Either city or lat and lon must be provided')
  }

  const result = (await response.json()) as WeatherResponse
  return result
}
