export default function EditInput(props) {
  const { title, desc, children, fit = false } = props;

  return (
    <section className={`flex flex-col gap-3 ${fit ? "w-fit": "w-full"}`}>
      <article className="flex flex-col gap-1">
        <h1 className="heading-s-bold">{title}</h1>
        <p className="text-xl-regular text-neutral-500">{desc}</p>
      </article>
      {children}
    </section>
  )
}
