import { useState } from 'react'
import Pill from './Pill'
import { WeatherDataType } from '@/types/weatherData'

export default function Drawer({
  weatherData,
}: {
  weatherData: WeatherDataType
}) {
  const [isHourlyClicked, setIsHourlyClicked] = useState(true)
  const [isWeeklyClicked, setIsWeeklyClicked] = useState(false)

  // Find the index of the current hour in the hourly time array of weather data
  const now = new Date()
  const currentHour = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    now.getHours()
  )
  const currentIndex = weatherData.hourly.time.findIndex(
    (time) => time >= currentHour
  )

  return (
    <section
      style={{ borderTop: '1px solid var(--weather-colorsolid1)' }}
      className="z-10 bg-gradient-linear-darkpurple w-full rounded-3xl shadow-xl overflow-hidden min-h-[300px]"
    >
      <section
        style={{ boxShadow: 'inset 0px 10px 10px -10px #fff' }}
        className="flex justify-center"
      >
        <div className="border-2 border-labellightprimary opacity-30 w-14 rounded-full my-2"></div>
      </section>
      <section
        style={{
          borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
        }}
        className="flex justify-between px-6 text-labeldarksecondary default-bold-subheadline pb-2"
      >
        <button
          style={
            isHourlyClicked
              ? { boxShadow: '0px 5px 5px -5px var(--weather-colorsolid4)' }
              : {}
          }
          onClick={() => {
            setIsWeeklyClicked(false)
            setIsHourlyClicked(true)
          }}
        >
          Hourly Forecast
        </button>
        <button
          style={
            isWeeklyClicked
              ? { boxShadow: '0px 5px 5px -5px var(--weather-colorsolid4)' }
              : {}
          }
          onClick={() => {
            setIsHourlyClicked(false)
            setIsWeeklyClicked(true)
          }}
        >
          Weekly Forecast
        </button>
      </section>
      {isHourlyClicked ? (
        <div className="pt-4 px-4 h-full flex justify-between overflow-scroll gap-6 overscroll-contain no-scrollbar">
          {weatherData.hourly.time
            .slice(currentIndex + 1, currentIndex + 25)
            .map((time, index) => (
              <Pill
                key={index}
                weather={{
                  time: time.toTimeString().slice(0, 5),
                  percentages:
                    weatherData.hourly.precipitationProbability[
                      index
                    ].toFixed(),
                  temperature:
                    weatherData.hourly.temperature2m[index].toFixed(),
                }}
              />
            ))}
        </div>
      ) : (
        <div className="pt-4 px-4 h-full flex justify-between overflow-scroll gap-6 overscroll-contain no-scrollbar">
          {weatherData.daily.time.map((time, index) => (
            <Pill
              key={index}
              weather={{
                time: time.toDateString().slice(0, 3),
                percentages:
                  weatherData.daily.precipitationSum[index].toFixed(),
                temperature: `${weatherData.daily.temperature2mMax[
                  index
                ].toFixed()}° ${weatherData.daily.temperature2mMin[
                  index
                ].toFixed()}`,
              }}
            />
          ))}
        </div>
      )}
    </section>
  )
}
