export default function Card(props) {
  const { count, title, icon } = props;
  return (
    <div className="flex shrink-0 lg:shrink w-[294px] h-full lg:w-auto justify-between p-[12px] shadow-[0_0_8px_rgba(0,0,0,0.25)] rounded-[12px] lg:flex-grow">
      <section className="flex flex-col gap-[4px]">
        <h1 className="heading-l-bold">{count}</h1>
        <h3 className="text-xl-regular w-[129px]">{title}</h3>
      </section>
      <img src={icon} alt="icon" />
    </div>
  );
}
