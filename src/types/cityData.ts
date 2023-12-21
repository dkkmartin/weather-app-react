export interface cityTypes {
  name: string
  local_names: {
    [languageCode: string]: string
    ascii: string
    feature_name: string
  }
  lat: number
  lon: number
  country: string
  state?: string
}
