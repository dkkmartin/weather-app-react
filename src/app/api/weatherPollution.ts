'use server'

type Location = {
  lat?: number
  lon?: number
}

export type WeatherResponse = {
  coord: number[]
  list: {
    dt: number
    main: {
      aqi: number
    }
    components: {
      co: number
      no: number
      no2: number
      o3: number
      so2: number
      pm2_5: number
      pm10: number
      nh3: number
    }
  }[]
}

export async function weather({ location }: { location: Location }) {
  let response

  if (location.lat && location.lon) {
    response = await fetch(
      `https://api.openweathermap.org/data/2.5/air_pollution?lat=${location.lat}&lon=${location.lon}&units=metric&appid=${process.env.API_KEY}`
    )
  } else {
    throw new Error('Either city or lat and lon must be provided')
  }

  const result = (await response.json()) as WeatherResponse
  return result
}
