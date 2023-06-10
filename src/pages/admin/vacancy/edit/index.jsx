import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import AdminNavbar from "components/organisms/AdminNavbar";

import { vacancies } from "data/vacancy";

import Chevron from "assets/icons/chevron-down.svg";
import Ingfo from "assets/icons/Ingfo.svg";
import NavigateNext from "assets/icons/navigate_next.svg";
import NavigateBefore from "assets/icons/navigate_before.svg";
import Informasi from "./Informasi";
import Ketentuan from "./Ketentuan";
import Preview from "./Preview";

export default function Edit() {
  const { id } = useParams();

  const [step, setStep] = useState(1);
  const [onConfirm, setOnConfirm] = useState(false);

  const vacancy = vacancies.find((loker) => loker.id === id);

  const handlePrev = () => {
    setStep(Math.max(step - 1, 1));
    setOnConfirm(false);
  };

  const handleNext = () => {
    setStep(Math.min(step + 1, 2));
    if (step === 2) {
      setOnConfirm(true);
    } else {
      setOnConfirm(false);
    }
  };

  return (
    <>
      <Preview active={onConfirm}/>
      <div className="flex w-full flex-col flex-1 pb-[63px] pr-[30px] lg:pr-[100px] pl-[30px] text-black ">
        <AdminNavbar />
        <h1 className="heading-l-bold">Edit Lowongan</h1>
        <section className="mt-[61px] button-m-regular flex gap-1 items-center">
          <h1>Lowongan</h1>
          <img src={Chevron} alt="Chevron" className="-rotate-90 opacity-30" />
          <h1>Edit Lowongan</h1>
        </section>

        <section className="mt-[43px] flex gap-3 items-center">
          <div className="flex gap-2">
            <img src={Ingfo} alt="Ingfo" />
            <h1 className="heading-s-medium">Informasi Lowongan</h1>
          </div>
          <hr className="w-[74px] border-neutral-300 border-[1px]" />
          <div className="flex gap-2">
            <img src={Ingfo} alt="Ingfo" />
            <h1 className="heading-s-medium">Ketentuan Pelamar</h1>
          </div>
          <hr className="w-[74px] border-neutral-300 border-[1px]" />
          <div className="flex gap-2">
            <img src={Ingfo} alt="Ingfo" />
            <h1 className="heading-s-medium">Konfirmasi</h1>
          </div>
        </section>

        {step === 1 ? <Informasi /> : <Ketentuan />}

        <section className="flex justify-between mt-12">
          <button
            onClick={handlePrev}
            className={`flex items-center py-2 pl-5 pr-4 gap-3 text-neutral-500 button-m-regular rounded-xl ${
              step === 1 ? "bg-neutral-200" : "bg-neutral-300"
            }`}
            disabled={step === 1}
          >
            <img src={NavigateBefore} alt="Navigate before" />
            <p className="w-[88px] text-left">Kembali</p>
          </button>
          <button
            onClick={handleNext}
            className="flex items-center py-2 pl-4 pr-5 gap-3 text-neutral-100 button-m-regular rounded-xl bg-secondary-yellow drop-shadow-[0_0_12px_rgba(255,174,95,0.5)]"
          >
            <p className="w-[88px] text-left">Selanjutnya</p>
            <img src={NavigateNext} alt="Navigate next" />
          </button>
        </section>
      </div>
    </>
  );
}
