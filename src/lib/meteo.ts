import { fetchWeatherApi } from 'openmeteo'
import { WeatherDataType } from '../types/weatherData'

interface Params {
  latitude: number
  longitude: number
  current: string[]
  hourly: string[]
}

const range = (start: number, stop: number, step: number) =>
  Array.from({ length: (stop - start) / step }, (_, i) => start + i * step)

export default async function getWeatherData(
  latitude: number,
  longitude: number
): Promise<WeatherDataType> {
  const url = 'https://api.open-meteo.com/v1/forecast'

  const params: Params = {
    latitude: 52.52,
    longitude: 13.41,
    current: [
      'temperature_2m',
      'apparent_temperature',
      'is_day',
      'precipitation',
      'rain',
      'showers',
      'snowfall',
      'cloud_cover',
      'wind_speed_10m',
    ],
    hourly: [
      'temperature_2m',
      'relative_humidity_2m',
      'apparent_temperature',
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
  const responses = await fetchWeatherApi(url, params)
  const response = responses[0]

  const utcOffsetSeconds = response.utcOffsetSeconds()
  const current = response.current()!
  const hourly = response.hourly()!

  const weatherData: WeatherDataType = {
    current: {
      time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
      temperature2m: current.variables(0)!.value(),
      apparentTemperature: current.variables(1)!.value(),
      isDay: current.variables(2)!.value(),
      precipitationProbability: current.variables(3)!.value(),
      rain: current.variables(4)!.value(),
      showers: current.variables(5)!.value(),
      snowfall: current.variables(6)!.value(),
      cloudCover: current.variables(7)!.value(),
      windSpeed10m: current.variables(8)!.value(),
    },
    hourly: {
      time: range(
        Number(hourly.time()),
        Number(hourly.timeEnd()),
        hourly.interval()
      ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
      temperature2m: hourly.variables(0)!.valuesArray()!,
      relativeHumidity2m: hourly.variables(1)!.valuesArray()!,
      apparentTemperature: hourly.variables(2)!.valuesArray()!,
      precipitationProbability: hourly.variables(3)!.valuesArray()!,
      rain: hourly.variables(4)!.valuesArray()!,
      showers: hourly.variables(5)!.valuesArray()!,
      snowfall: hourly.variables(6)!.valuesArray()!,
      snowDepth: hourly.variables(7)!.valuesArray()!,
      cloudCover: hourly.variables(8)!.valuesArray()!,
      visibility: hourly.variables(9)!.valuesArray()!,
      windSpeed10m: hourly.variables(10)!.valuesArray()!,
    },
  }

  return weatherData
}
