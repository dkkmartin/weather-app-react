type Weather = {
  city: string
  temperature: number
  description: string
  high: number
  low: number
}

export default function Weather({ weather }: { weather: Weather }) {
  const { city, temperature, description, high, low } = weather

  return (
    <section className="text-white text-center max-w-[130px] mt-8 text-center">
      <h1 className="default-regular-title1 my-4">{city}</h1>
      <h2 className="default-regular-largetitle text-extra-large my-6">
        {temperature.toFixed()}°
      </h2>
      <h3 className="default-regular-title3 m-0 opacity-70">{description}</h3>
      <div className="flex justify-evenly">
        <h4 className="default-regular-title3 m-0">H: {high}°</h4>
        <h4 className="default-regular-title3 m-0">L: {low}°</h4>
      </div>
    </section>
  )
}
