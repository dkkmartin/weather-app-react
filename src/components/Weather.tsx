type Weather = {
  city: string
  temperature: number
  description: string
  feelsLike: number
}

export default function Weather({ weather }: { weather: Weather }) {
  const { city, temperature, description, feelsLike } = weather

  return (
    <section className="text-white text-center mt-8">
      <h1 className="default-regular-title1 my-4">{city}</h1>
      <h2 className="default-regular-largetitle text-extra-large my-6">
        {temperature.toFixed()}°
      </h2>
      <h3 className="default-regular-title3 m-0 opacity-50">{description}</h3>
      <h3 className="default-regular-title3 m-0">
        Feels like {feelsLike.toFixed()}°
      </h3>
    </section>
  )
}
