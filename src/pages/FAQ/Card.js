export default function Card(props) {
  const {title, src, step} = props;
  return (
    <div className='w-full md:w-[48%] grow px-[32px] py-[24px] flex flex-col gap-[16px] bg-neutral-100 shadow-[0_1px_24px_rgba(0,0,0,0.12)] rounded-[16px]'>
      <img src={src} alt={title} />
      <section>
        <h2 className="text-neutral-1000 heading-s-bold">{title}</h2>
        <p className="text-primaryBlue-main text-m-bold">Step {step}</p>
      </section>
    </div>
  )
}
