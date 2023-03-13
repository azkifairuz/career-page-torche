import * as Icon from "react-bootstrap-icons";
function EduPreview(props) {
  const data = [
    {
      "jenjang-pendidikan": "S1",
      "nama-instansi": "uca",
      jurusan: "TI",
      "tahun-masuk": "2021",
      "tahun-keluar": "sekarang",
      pengalaman: "anu",
      deskripsi: "jasdbjak",
    },
    {
      "jenjang-pendidikan": "SMK/SMA/MA",
      "nama-instansi": "smk jaya",
      jurusan: "TI",
      "tahun-masuk": "2021",
      "tahun-keluar": "sekarang",
      pengalaman: "anu",
      deskripsi: "jasdbjak",
    },
    {
      "jenjang-pendidikan": "SMP/MTS",
      "nama-instansi": "sksd",
      jurusan: "",
      "tahun-masuk": "2021",
      "tahun-keluar": "sekarang",
      pengalaman: "anu",
      deskripsi: "jasdbjak",
    },
  ];
  return (
    <>
      <div className="Pendidikan  h-fit  rounded-md  shadow-lg flex flex-col md:w-1/2 items-center  ">
        <div className="w-full bg-primary rounded-t-md items-center flex justify-between text-white p-5">
          <h2>Pendidikan</h2>
        </div>

        <div className="w-full flex flex-col space-y-4 rounded-b-md p-5 ">
          {data.map((data) => {
            return (
              <div className="border-b-2 border-black">
                <div className="text-left flex flex-col  ">
                  <h1 className="font-bold ">{data["jenjang-pendidikan"]}</h1>
                  <p>{data["nama-instansi"]}</p>
                  <p>{data["jurusan"]}</p>
                  <p>
                    {data["tahun-masuk"]}-{data["tahun-keluar"]}
                  </p>
                </div>

                <div className="text-left">
                  <h1 className="font-bold ">
                    Pengalaman organisasi/pengembangan diri
                  </h1>
                  <p>{data["pengalaman"]}</p>
                  <p>{data["deskripsi"]}</p>
                </div>
                
              </div>
            );
          })}
        </div>
        <button
          onClick={props.navigate}
          className="w-full flex justify-center items-center text-center gap-2 p-4 text-blue-500 border-t-2"
        >
          <Icon.PlusCircleFill size={20} />
          Tambah
        </button>
      </div>
    </>
  );
}

export default EduPreview;
