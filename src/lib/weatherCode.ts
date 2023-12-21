export default function getWeatherDescription(code: number): string {
  switch (code) {
    case 0:
      return 'Clear sky'
    case 1:
      return 'Mainly clear'
    case 2:
      return 'Partly cloudy'
    case 3:
      return 'Overcast'
    case 45:
      return 'Fog'
    case 48:
      return 'Deposting rime fog'
    case 51:
      return 'Light drizzle'
    case 53:
      return 'Moderate drizzle'
    case 55:
      return 'Dense drizzle'
    case 56:
      return 'Freezing light drizzle'
    case 57:
      return 'Freezing dense drizzle'
    case 61:
      return 'Light showers of rain'
    case 63:
      return 'Moderate showers of rain'
    case 65:
      return 'Heavy showers of rain'
    case 66:
      return 'Light freezing rain'
    case 67:
      return 'Moderate or heavy freezing rain'
    case 71:
      return 'Slight snow fall'
    case 73:
      return 'Moderate snow fall'
    case 75:
      return 'Heavy snow fall'
    case 77:
      return 'Sleet'
    case 80:
      return 'Light rain shower'
    case 81:
      return 'Moderate rain shower'
    case 82:
      return 'Heavy rain shower'
    case 85:
      return 'Slight snow shower'
    case 86:
      return 'Moderate or heavy snow shower'
    case 95:
      return 'Slight or moderate thunderstorm'
    case 96:
      return 'Slight thunderstorm with hail'
    case 99:
      return 'Moderate or heavy thunderstorm with hail'
    default:
      return 'Unknown weather code'
  }
}
