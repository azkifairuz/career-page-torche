import InputField from "components/atoms/InputField";
import Select from "components/atoms/Select";
import { X } from "react-bootstrap-icons";

export default function name(props) {
  const { onClick } = props;
  return (
    <>
      <div className="w-[508px] bg-white pb-5 rounded-[40px]  flex flex-col">
        {/* card header */}
        <div className="flex cursor-pointer justify-between w-full px-16 py-5 items-center border-b border-neutral-300">
          <h1 className="text-l-bold">Filter</h1>
          <X size={30} color="#323232" onClick={onClick} />
        </div>
        {/* end card header */}

        {/* body section */}
        <section className="flex px-16 flex-col gap-3">
          <section className="flex  justify-between  w-full border-b py-3 border-neutral-300">
            {/* sort by pendidikan minimal section */}
            <section className="flex flex-col  whitespace-nowrap gap-3">
              <h1 className="text-l-bold">Pendidikan Minimal</h1>
              <ul className="uppercase flex flex-col gap-2">
                <label className="flex gap-[8px] text-s-regular" htmlFor="d3">
                  <input type="checkbox" id="d3" />
                  D3
                </label>
                <label
                  className="flex gap-[8px] text-s-regular"
                  htmlFor="s1/d4"
                >
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
                <label
                  className="flex  gap-[8px] text-s-regular"
                  htmlFor="smk/sma"
                >
                  <input type="checkbox" id="smk/sma" />
                  smk/sma
                </label>
                <label
                  className="flex gap-[8px] text-s-regular"
                  htmlFor="smp/mts"
                >
                  <input type="checkbox" id="smp/mts" />
                  smp/mts
                </label>
                <label
                  className="flex capitalize gap-[8px] text-s-regular"
                  htmlFor="semua"
                >
                  <input type="checkbox" id="semua" />
                  Semua jenjang Pendidikan
                </label>
              </ul>
            </section>
            {/* end sort by pendidikan minimal section */}

            {/* sort by jenis kelamin section */}
            <section className="flex flex-col whitespace-nowrap  gap-3">
              <h1 className="text-l-bold">Jenis Kelamin</h1>
              <ul className="capitalize flex flex-col gap-2">
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
              </ul>
            </section>
            {/* end sort by jenis kelamin section */}
          </section>
          {/* filter by age section */}
          <section className="flex flex-col gap-3  border-b py-3 border-neutral-300">
            <h1 className="text-l-bold">Usia Pelamar</h1>
            <p className="text-xs-regular">
              Tentukan usia minimal & maksimal yang Anda butuhkan.
            </p>
            <div className="flex gap-16">
              <InputField
                type="text"
                placeholder="Minimal Usia"
                width="w-[160px]"
                labelText=""
              />
              <InputField
                type="text"
                placeholder="Minimal Masimal"
                width="w-[160px]"
                labelText=""
              />
            </div>
          </section>
          {/* end filter by age section */}

          {/* filter by location section */}
          <section className="flex flex-col gap-3 w-full  border-b py-3 border-neutral-300">
            <h1 className="text-l-bold">Lokasi Pelamar</h1>
            <p className="text-xs-regular">
              Tentukan lokasi pelamar yang Anda butuhkan.
            </p>
            <Select
              title="Lokasi Pelamar"
              data={["tangerang", "jakarta", "bandung"]}
              width={"w-[400px]"}
            />
          </section>
          {/* end filter by location section */}
        </section>
        {/*end body section */}
      </div>
    </>
  );
}
