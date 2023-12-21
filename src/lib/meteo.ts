import { fetchWeatherApi } from 'openmeteo'
import { WeatherData } from '../types/weatherData'

interface Params {
  latitude: number
  longitude: number
  hourly: string[]
}

const range = (start: number, stop: number, step: number): number[] =>
  Array.from({ length: (stop - start) / step }, (_, i) => start + i * step)

export default async function meteo(
  latitude: number,
  longitude: number
): Promise<WeatherData> {
  const params: Params = {
    latitude: 52.52,
    longitude: 13.41,
    hourly: [
      'temperature_2m',
      'relative_humidity_2m',
      'precipitation_probability',
      'rain',
      'showers',
      'snowfall',
      'snow_depth',
      'cloud_cover',
      'visibility',
      'wind_speed_10m',
    ],
  }

  const url: string = 'https://api.open-meteo.com/v1/forecast'

  const response: { utcOffsetSeconds: () => number; hourly: () => any }[] =
    await fetchWeatherApi(url, params)

  const utcOffsetSeconds: number = response[0].utcOffsetSeconds()

  const hourly: any = response[0].hourly()!

  interface WeatherData {
    hourly: {
      time: Date[]
      temperature2m: number[]
      relativeHumidity2m: number[]
      precipitationProbability: number[]
      rain: number[]
      showers: number[]
      snowfall: number[]
      snowDepth: number[]
      cloudCover: number[]
      visibility: number[]
      windSpeed10m: number[]
    }
  }

  const weatherData: WeatherData = {
    hourly: {
      time: range(
        Number(hourly.time()),
        Number(hourly.timeEnd()),
        hourly.interval()
      ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
      temperature2m: hourly.variables(0)!.valuesArray()!,
      relativeHumidity2m: hourly.variables(1)!.valuesArray()!,
      precipitationProbability: hourly.variables(2)!.valuesArray()!,
      rain: hourly.variables(3)!.valuesArray()!,
      showers: hourly.variables(4)!.valuesArray()!,
      snowfall: hourly.variables(5)!.valuesArray()!,
      snowDepth: hourly.variables(6)!.valuesArray()!,
      cloudCover: hourly.variables(7)!.valuesArray()!,
      visibility: hourly.variables(8)!.valuesArray()!,
      windSpeed10m: hourly.variables(9)!.valuesArray()!,
    },
  }

  for (let i = 0; i < weatherData.hourly.time.length; i++) {
    console.log(
      weatherData.hourly.time[i].toISOString(),
      weatherData.hourly.temperature2m[i],
      weatherData.hourly.relativeHumidity2m[i],
      weatherData.hourly.precipitationProbability[i],
      weatherData.hourly.rain[i],
      weatherData.hourly.showers[i],
      weatherData.hourly.snowfall[i],
      weatherData.hourly.snowDepth[i],
      weatherData.hourly.cloudCover[i],
      weatherData.hourly.visibility[i],
      weatherData.hourly.windSpeed10m[i]
    )
  }

  return weatherData
}
