export default function Preview(props) {
  const { active } = props;
  return (
    <div
      className={`${
        active ? "flex" : "hidden"
      } absolute flex py-20 justify-center w-screen h-full bg-black bg-opacity-30 z-50`}
    >
      <section className="flex flex-col w-[1000px] z-50 bg-white p-[60px] rounded-xl">
        <div className="flex justify-between">
          <h1 className="heading-l-bold">Preview Lowongan</h1>
        </div>
        <button>
          <image src="assets/icons/chevron-left.svg" alt="chevron-left" />
        </button>
      </section>
    </div>
  );
}
