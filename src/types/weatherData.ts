export interface HourlyData {
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

export interface WeatherData {
  hourly: HourlyData
}
