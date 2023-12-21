export interface HourlyData {
  time: Date[]
  temperature2m: Float32Array
  relativeHumidity2m: Float32Array
  apparentTemperature: Float32Array
  precipitationProbability: Float32Array
  rain: Float32Array
  showers: Float32Array
  snowfall: Float32Array
  snowDepth: Float32Array
  cloudCover: Float32Array
  visibility: Float32Array
  windSpeed10m: Float32Array
}

export interface CurrentData {
  time: Date
  temperature2m: number
  apparentTemperature: number
  isDay: number
  precipitationProbability: number
  rain: number
  showers: number
  snowfall: number
  cloudCover: number
  windSpeed10m: number
}

export interface WeatherDataType {
  hourly: HourlyData
  current: CurrentData
}
