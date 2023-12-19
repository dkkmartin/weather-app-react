import Image from 'next/image'

type Weather = {
  time: string
  percentages: string
  temperature: string
}

export default function Pill({ weather }: { weather: Weather }) {
  const { time, percentages, temperature } = weather

  return (
    <div className="z-10 flex flex-col items-center justify-center border border-weather-colorsolid1 rounded-full bg-weather-colorsolid2 h-[150px] min-w-[60px] max-w-[60px] text-white shadow-lg shadow-black py-4 px-2 gap-4">
      <h1 className="default-bold-subheadline whitespace-nowrap">{time}</h1>
      <div className="flex flex-col items-center">
        <Image
          src="/assets/weather/sun-cloud-angled-rain.svg"
          width={32}
          height={32}
          alt="Night, cloudy, fast wind"
        ></Image>
        <h2 className="default-bold-subheadline text-sky-300">
          {percentages}%
        </h2>
      </div>
      <h3 className="default-bold-subheadline">{temperature}°</h3>
    </div>
  )
}
