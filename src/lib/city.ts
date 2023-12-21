import { cityTypes } from '../types/cityData'

type Location = {
  latitude?: number
  longitude?: number
}

export async function getCity({ location }: { location: Location }) {
  let response

  if (location.latitude && location.longitude) {
    response = await fetch(
      `http://api.openweathermap.org/geo/1.0/reverse?lat=${location.latitude}&lon=${location.longitude}&limit=1&appid=b88aa654d10255e6276afa6f71ab2a61`
    )
  } else {
    throw new Error('Either city or lat and lon must be provided')
  }

  const result: cityTypes = await response.json()

  return result
}
