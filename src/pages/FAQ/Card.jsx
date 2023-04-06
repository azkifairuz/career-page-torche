import { useState }  from "react";

export default function Card(props) {
  const { title, src, step, desc } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col gap-[4px] bg-neutral-100 shadow-[0_1px_24px_rgba(0,0,0,0.12)] rounded-[16px] grow w-full md:w-[48%] h-fit" >
      <section className="px-[32px] py-[24px] flex flex-col gap-[16px] cursor-pointer" onClick={handleOpen}>
        <img src={src} alt={title} className="w-[64px]" />
        <div>
          <h2 className="text-neutral-1000 heading-s-bold">{title}</h2>
          <p className="text-primaryBlue-main text-m-bold">Step {step}</p>
        </div>
      </section>
      <section className={`${!isOpen && "hidden"} px-[24px] py-[20px]`}>
        <p>{desc}</p>
      </section>
    </div>
  );
}
