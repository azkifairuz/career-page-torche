import * as Icon from "react-bootstrap-icons"
function EduPreview(props) {
    return(
        <>
               <div className="Pendidikan  h-fit  rounded-md  shadow-lg flex flex-col md:w-1/2 items-center  ">
                    <div className="w-full bg-primary rounded-t-md items-center flex justify-between text-white p-5">
                        <h2>Pendidikan</h2>
                    </div>

                    <div className="w-full flex flex-col space-y-4 rounded-b-md p-5 ">
                        <div className="text-left flex flex-col ">
                            <h1 className="font-bold ">Jenjang Pendidikan</h1>
                            <p>nama instansi</p>
                            <p>jurusan</p>
                        </div>

                        <div className="text-left">
                            <h1 className="font-bold ">Pengalaman organisasi/pengembangan diri</h1>
                            <p>nama organisasi/pengembangan diri</p>
                            <p>deskrpisi</p>
                        </div>
                    </div>
                    <button
                    onClick={props.navigate}
                     className="w-full flex justify-center items-center text-center gap-2 p-4 text-blue-500 border-t-2"
                     >
                        <Icon.PlusCircleFill size={20}/>
                        Tambah
                    </button>
                </div>

        </>
    )

}

export default EduPreview