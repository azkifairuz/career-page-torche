import { useNavigate } from "react-router-dom";

function Experience(props) {
  const workType = [
    "Full-Time(Penuh Waktu)",
    "Part-Time(Paruh Waktu)",
    "Internship(Magang)",
    "Freelance(Pekerja Bebas)",
    "Contract(Kontrak)",
  ];
  function getWork() {
    return workType.map((w) => {
      return <option value={w}>{w}</option>;
    });
  }

  const navigate = useNavigate()

  return (
    <>
      <div className="w-11/12 lg:w-[800px] bg-[#f8f9fa] border shadow-lg shadow-[#f8f9fa] p-5 m-10 rounded-lg">
        <form className=" flex space-y-8 flex-col w-full  mb-5">
          <h1 className="text-2xl font-bold">Pengalaman kerja</h1>
          <div>
            <label>Nama Perusahaan</label>
            <input
              className="block mt-2 p-2.5 w-full text-sm rounded-md border-2 focus:ring-primary  border-primary "
              placeholder="Contoh: Torche Education"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-center w-full gap-4">
            <div className=" md:w-1/2">
              <label>Nama Pekerjaan</label>
              <input
                placeholder="contoh:FE"
                className="block mt-2 p-2.5 w-full text-sm rounded-md border-2 focus:ring-primary  border-primary "
              />
            </div>

            <div className=" md:w-1/2">
              <label>Tipe Kontrak Kerja</label>
              <select className="block  mt-2 p-2.5 w-full text-sm rounded-md border-2 focus:ring-primary  border-primary ">
                <option value="choose" disabled selected="selected">
                  --Pilih Tipe Pekerjaan--
                </option>
                {getWork()}
              </select>
            </div>
          </div>
          <div className="flex justify-center w-full space-x-4">
            <div className=" w-1/2">
              <label>Tanggal Mulai</label>
              <input
                type="date"
                className="block mt-2 p-2.5 w-full text-sm rounded-md border-2 focus:ring-primary  border-primary "
                placeholder="Pilih Tahun"
              />
            </div>

            <div className="w-1/2">
              <label>Tanggal Berhenti</label>
              <input
                type="date"
                className="block mt-2 p-2.5 w-full text-sm rounded-md border-2 focus:ring-primary  border-primary "
                placeholder="Pilih Tahun"
              />
            </div>
          </div>
          <div>
            <label>Deskrpisi Pekerjaan</label>
            <textarea
              className="block mt-2 p-2.5 w-full text-sm rounded-md border-2 focus:ring-primary  border-primary "
              rows={4}
              cols={100}
              placeholder="Contoh: - volunter,membuka jasa,mengelola"
            />
          </div>

         <div className="w-full flex space-x-3">
            <button
              onClick={props.back}
              className="border border-blue-500 w-1/2 text-blue-500 rounded-md p-2"
            >
              Back
            </button>
            <button
              onClick={()=> navigate("/user")}
              className=" bg-blue-500 w-1/2 text-white rounded-md p-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      ;
    </>
  );
}

export default Experience;
