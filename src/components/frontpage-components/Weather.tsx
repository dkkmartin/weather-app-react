export default function Weather() {
  return (
    <section className="text-white text-center max-w-[130px] mt-16">
      <h1 className="default-regular-title1 my-4">Montreal</h1>
      <h2 className="default-regular-largetitle text-extra-large my-6">19°</h2>
      <h3 className="default-regular-title3 m-0 opacity-70">Mostly Clear</h3>
      <div className="flex justify-evenly">
        <h4 className="default-regular-title3 m-0">H:24°°</h4>
        <h4 className="default-regular-title3 m-0">L:18</h4>
      </div>
    </section>
  );
}
