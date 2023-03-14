import * as Icon from "react-bootstrap-icons";
function ExperiencePreview(props) {
  const data = [
    {
      "job-ttle": "FE",
      "company-name": "uca",
      "type": "intern",
      "start-year": "2023",
      "end-year": "sekarang",
      "skill": "anu",
    },
    {
      "job-ttle": "SE",
      "company-name": "nanan",
      "type": "intern",
      "start-year": "2023",
      "end-keluar": "sekarang",
      "skill": "anu",
    },
  ];
  return (
    <>
      <div className="PengalamanKerja  h-fit  rounded-md  shadow-lg flex flex-col md:w-1/2 items-center  ">
        <div className="w-full bg-primary rounded-t-md items-center flex justify-between text-white p-5">
          <h2>Pengalaman Kerja</h2>
        </div>

        <div className="w-full flex flex-col space-y-4 rounded-b-md p-5 ">
          {data.map((data) => {
            return (
              <div className="border-b-2 pb-2 border-black">
                <div className="text-left flex flex-col ">
                  <h1 className="font-bold ">{data["job-ttle"]}</h1>
                    <p>{data["company-name"]} - {data["type"]}</p>
        
                    <p>{data["start-year"]} - {data["end-year"]} </p>
                </div>

                <div className="text-left">
                  <h1 className="font-bold ">Kemampuan (Skill)</h1>
                  <p>{data["skill"]}</p>
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
export default ExperiencePreview;
