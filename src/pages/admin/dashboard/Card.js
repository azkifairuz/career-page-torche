export default function Card(props) {
  const { count, title, icon } = props
  return (
    <div className="flex justify-between p-[12px] w-[294px] shadow-[0_0_8px_rgba(0,0,0,0.25)] rounded-[12px] flex-grow">
      <section className="flex flex-col gap-[4px]">
        <h1 className="heading-l-bold">{count}</h1>
        <h3 className="text-xl-regular w-[129px]">{title}</h3>
      </section>
      <img src={icon} alt="icon" />
    </div>
  )
}
