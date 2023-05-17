import ArrowDown from "assets/icons/arrow-circle-down.svg";

export default function Panel(props) {
  const { title, content, setActiveIndex, isActive, index } = props;

  const handleClick = () => {
    if (!isActive) {
      setActiveIndex(index);
    } else {
      setActiveIndex(null);
    }
  };

  return (
    <div className="flex flex-col bg-neutral-100 gap-[44px] rounded-[16px] py-[20px] px-[24px] shadow-[0_1px_16px_rgba(0,0,0,0.12)] transition-all duration-1000 linear">
      <section className="flex justify-between gap-2">
        <h1 className="text-xl-regular text-neutral-1000">{title}</h1>
        <button className="shrink-0" onClick={handleClick}>
          <img
            src={ArrowDown}
            className={`${
              isActive && "rotate-180"
            } transition-all duration-300 ease-in-out`}
            alt="Arrow"
          />
        </button>
      </section>
      <p
        className={`${
          !isActive && "hidden"
        } text-xl-regular text-neutral-1000 transition-all duration-700 ease-in-out`}
      >
        {content}
      </p>
    </div>
  );
}
