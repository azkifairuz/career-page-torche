import { useLocation, useNavigate } from "react-router-dom";

function Education(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const education = [
    "SMP/MTS",
    "SMK/SMA/MA",
    "D1",
    "D2",
    "D3",
    "D4",
    "S1",
    "S2",
    "S3",
  ];

  function cekLocation() {
    if (location.pathname === "/completeprofile") {
      return (
        <>
          <button
            onClick={props.back}
            className="border border-blue-500 w-1/2 text-blue-500 rounded-md p-2"
          >
            Back
          </button>
          <button
            onClick={props.next}
            className=" bg-blue-500 w-1/2 text-white rounded-md p-2"
          >
            Next
          </button>
        </>
      );
    }
    return (
      <button
        onClick={() => navigate("/addEducation")}
        className=" bg-blue-500 w-full text-white rounded-md p-2"
      >
        ADD
      </button>
    );
  }

  function getEducation() {
    return education.map((edu) => {
      return <option value={edu}>{edu}</option>;
    });
  }
  return (
    <div className="min-h-screen w-full md:w-10/12 mt-5 flex flex-col items-center justify-center m-auto">
      <div className=" lg:w-[800px] bg-[#f8f9fa] border shadow-lg shadow-[#f8f9fa] p-5 m-10 rounded-lg">
        <form className=" flex space-y-8 flex-col w-full  mb-5">
          <h1 className="text-2xl font-bold">Pendidikan</h1>
          <div>
            <label>Jenjang Pendidikan</label>
            <select className="block  mt-2 p-2.5 w-full text-sm rounded-md border-2 focus:ring-primary  border-primary ">
              <option value="choose" disabled selected="selected">
                -- Pilih Jenjang Pendidikan--
              </option>
              {getEducation()}
            </select>
          </div>
          <div className="flex flex-col md:flex-row justify-center w-full gap-4">
            <div className=" md:w-1/2">
              <label className="md:text-md">Sekolah/Universitas</label>
              <input
                placeholder="Sekolah/Universitas"
                className="block mt-2 p-2.5 w-full text-sm rounded-md border-2 focus:ring-primary  border-primary "
              />
            </div>

            <div className=" md:w-1/2">
              <label className=" md:text-md">Jurusan/Program Studi</label>
              <input
                type="text"
                placeholder="Jurusan/Program Studi"
                className="block mt-2 p-2.5 w-full text-sm rounded-md border-2 focus:ring-primary  border-primary "
              />
            </div>
          </div>
          <div className="flex justify-center w-full space-x-4">
            <div className=" w-1/2">
              <label>Tahun Masuk</label>
              <input
                type="date"
                className="block mt-2 p-2.5 w-full text-sm rounded-md border-2 focus:ring-primary  border-primary "
                placeholder="Pilih Tahun"
              />
            </div>

            <div className="w-1/2">
              <label>Tahun Lulus</label>
              <input
                type="date"
                className="block mt-2 p-2.5 w-full text-sm rounded-md border-2 focus:ring-primary  border-primary "
                placeholder="Pilih Tahun"
              />
            </div>
          </div>
          <div>
            <label>Pengalama Organisasi/Pengembangan Diri</label>
            <textarea
              className="block mt-2 p-2.5 w-full text-sm rounded-md border-2 focus:ring-primary  border-primary "
              rows={4}
              cols={100}
              placeholder="Contoh: - volunter,membuka jasa,mengelola"
            />
          </div>

          <div className="w-full flex space-x-3">{cekLocation()}</div>
        </form>
      </div>
      ;
    </div>
  );
}

export default Education;
