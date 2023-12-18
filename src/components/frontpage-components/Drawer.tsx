import Pill from './Pill'

export default function Drawer() {
  return (
    <section className="z-10 bg-gradient-linear-darkpurple w-full border-t-white border-opacity-50 rounded-3xl">
      <section className="flex justify-between px-6 text-labeldarksecondary default-bold-subheadline">
        <button>Hourly Forecast</button>
        <button>Weekly Forecast</button>
      </section>
      <Pill
        weather={{ time: 'morning', percentages: '20', temperature: '20' }}
      />
    </section>
  )
}
