export default function Card(props) {
  const { title, description, icon } = props
  return (
    <div className="flex flex-col gap-[40px] items-center grow basis-1/4">
      <img src={icon} alt="icon" className="w-[80px]" />
      <section className="flex flex-col gap-[16px] items-center">
        <h3 className="heading-s-bold text-center">{title}</h3>
        <p className="text-xl-regular text-justify">{description}</p>
      </section>
    </div>
  )
}
