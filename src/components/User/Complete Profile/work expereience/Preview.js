import * as Icon from "react-bootstrap-icons"
function ExperiencePreview(props) {
    <>
     <div className="PengalamanKerja  h-fit  rounded-md  shadow-lg flex flex-col md:w-1/2 items-center  ">
                    <div className="w-full bg-primary rounded-t-md items-center flex justify-between text-white p-5">
                        <h2>Pengalaman Kerja</h2>
                    </div>

                    <div className="w-full flex flex-col space-y-4 rounded-b-md p-5 ">
                        <div className="text-left flex flex-col ">
                            <h1 className="font-bold ">Job Title</h1>
                            <div className="flex items-center">
                                <p>Torche Education</p>
                                <p>-</p>
                                <p>Intern</p>
                            </div>
                            <div className="flex items-center">
                                <p>Start </p>
                                <p>-</p>
                                <p>Unitl</p>
                            </div>
                        </div>

                        <div className="text-left">
                            <h1 className="font-bold ">Kemampuan (Skill)</h1>
                            <p>skill anda</p>
                        </div>
                    </div>
                    <button
                    onClick={props.navigate}
                     className="w-full flex justify-center items-center text-center gap-2 p-4 text-blue-500 border-t-2"
                     >
                        <Icon.PlusCircleFill size={20} />
                        Tambah
                    </button>

                </div></>
}
export default ExperiencePreview