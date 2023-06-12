import { X } from "react-bootstrap-icons";
import Toga from "assets/icons/toga.svg";

export default function Preview(props) {
  const { active } = props;
  return (
    <div
      className={`${
        active ? "flex" : "hidden"
      } absolute py-20 left-0 justify-center items-center w-screen min-h-screen h-full bg-black bg-opacity-30 z-50`}
    >
      <section className="flex flex-col h-fit w-[1000px] z-50 bg-white p-[60px] rounded-xl">
        <header className="flex justify-between items-center mb-20">
          <h1 className="heading-l-bold">Preview Lowongan</h1>
          <button>
            <X size={48} />
          </button>
        </header>
        <main className="px-24">
          <section className="flex flex-col gap-10 drop-shadow-[0_0_4px_rgba(0,0,0,0.25)] bg-white rounded-xl px-[60px] pt-10 pb-20 w-full">
            <h1 className="heading-m-bold text-center">Frontend Engineer</h1>
            <div className="flex justify-between">
              <div className="flex flex-col gap-6">
                <div className="flex gap-4">
                  <img src={Toga} alt="Toga" className="w-8 h-8" />
                  <section>
                    <h1 className="heading-s-medium text-neutral-500">
                      Pendidikan
                    </h1>
                    <p className="mt-2 text-xl-regular">
                      Tidak ada minimal pendidikan
                    </p>
                  </section>
                </div>
                <div className="flex gap-4">
                  <img src={Toga} alt="Toga" className="w-8 h-8" />
                  <section>
                    <h1 className="heading-s-medium text-neutral-500">
                      Pendidikan
                    </h1>
                    <p className="mt-2 text-xl-regular">
                      Tidak ada minimal pendidikan
                    </p>
                  </section>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex gap-4">
                  <img src={Toga} alt="Toga" className="w-8 h-8" />
                  <section>
                    <h1 className="heading-s-medium text-neutral-500">
                      Pendidikan
                    </h1>
                    <p className="mt-2 text-xl-regular">
                      Tidak ada minimal pendidikan
                    </p>
                  </section>
                </div>
                <div className="flex gap-4">
                  <img src={Toga} alt="Toga" className="w-8 h-8" />
                  <section>
                    <h1 className="heading-s-medium text-neutral-500">
                      Pendidikan
                    </h1>
                    <p className="mt-2 text-xl-regular">
                      Tidak ada minimal pendidikan
                    </p>
                  </section>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer>
          
        </footer>
      </section>
    </div>
  );
}
