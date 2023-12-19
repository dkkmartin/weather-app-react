import { useState } from 'react'
import Pill from './Pill'

export default function Drawer() {
  const [isHourlyClicked, setIsHourlyClicked] = useState(true)
  const [isWeeklyClicked, setIsWeeklyClicked] = useState(false)

  return (
    <section
      style={{ borderTop: '1px solid var(--weather-colorsolid1)' }}
      className="z-10 bg-gradient-linear-darkpurple w-full rounded-3xl shadow-xl overflow-hidden"
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
        <div className="pt-4 px-4 flex justify-between overflow-scroll gap-6 overscroll-contain">
          <Pill
            weather={{ time: '12 am', percentages: '20', temperature: '20' }}
          />
          <Pill
            weather={{ time: '13 pm', percentages: '20', temperature: '20' }}
          />
          <Pill
            weather={{ time: '14 pm', percentages: '20', temperature: '20' }}
          />
          <Pill
            weather={{ time: '15 pm', percentages: '20', temperature: '20' }}
          />
          <Pill
            weather={{ time: '16 pm', percentages: '20', temperature: '20' }}
          />
          <Pill
            weather={{ time: '16 pm', percentages: '20', temperature: '20' }}
          />
          <Pill
            weather={{ time: '17 pm', percentages: '20', temperature: '20' }}
          />
          <Pill
            weather={{ time: '18 pm', percentages: '20', temperature: '20' }}
          />
        </div>
      ) : (
        <div className="pt-4 px-4 flex justify-between overflow-scroll gap-6 overscroll-contain">
          <Pill
            weather={{ time: 'Mon', percentages: '20', temperature: '20' }}
          />
          <Pill
            weather={{ time: 'Tue', percentages: '20', temperature: '20' }}
          />
          <Pill
            weather={{
              time: 'Wed',
              percentages: '20',
              temperature: '20',
            }}
          />
          <Pill
            weather={{ time: 'Thu', percentages: '20', temperature: '20' }}
          />
          <Pill
            weather={{ time: 'Fri', percentages: '20', temperature: '20' }}
          />
          <Pill
            weather={{ time: 'Sat', percentages: '20', temperature: '20' }}
          />
          <Pill
            weather={{ time: 'Sun', percentages: '20', temperature: '20' }}
          />
        </div>
      )}
    </section>
  )
}