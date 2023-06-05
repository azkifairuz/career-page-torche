import { X } from "react-bootstrap-icons";

export default function name() {
  return (
    <>
      <div className="w-[508px] rounded-[40px] p-16 flex flex-col">
        <div className="flex justify-between py-5 items-center border-b border-neutral-300">
          <h1 className="text-l-bold">Filter</h1>
          <X size={30} color="#323232" onClick={onclick} />
        </div>
        <div className="flex gap-[115px] w-full">
          <div>
            <h1 className="text-l-bold">Pendidikan Minimal</h1>
            <ul className="uppercase">
              <label className="flex gap-[8px] text-s-regular" htmlFor="d3">
                <input type="checkbox" id="d3" />
                D3
              </label>
              <label className="flex gap-[8px] text-s-regular" htmlFor="s1/d4">
                <input type="checkbox" id="s1/d4" />
                s1/d4
              </label>
              <label className="flex gap-[8px] text-s-regular" htmlFor="s2">
                <input type="checkbox" id="s2" />
                s2
              </label>
              <label className="flex gap-[8px] text-s-regular" htmlFor="s3">
                <input type="checkbox" id="s3" />
                s3
              </label>
              <label className="flex  gap-[8px] text-s-regular" htmlFor="smk/sma">
                <input type="checkbox" id="smk/sma" />
                smk/sma
              </label>
              <label className="flex gap-[8px] text-s-regular" htmlFor="smp/mts">
                <input type="checkbox" id="smp/mts" />
                smp/mts
              </label>
              <label className="flex capitalize gap-[8px] text-s-regular" htmlFor="semua">
                <input type="checkbox" id="semua" />
                Semua jenjang Pendidikan
              </label>
            </ul>
          </div>
          <div> <ul>
              <label className="flex gap-[8px] text-s-regular" htmlFor="L">
                <input type="checkbox" id="L" />
                Laki-Laki
              </label>
              <label className="flex gap-[8px] text-s-regular" htmlFor="P">
                <input type="checkbox" id="P" />
                Perempuan
              </label>
              <label className="flex gap-[8px] text-s-regular" htmlFor="All">
                <input type="checkbox" id="All" />
                Semua Jenis Kelamin
              </label>
            </ul></div>
        </div>
      </div>
    </>
  );
}
