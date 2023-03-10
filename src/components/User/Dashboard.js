import { useNavigate } from "react-router-dom";
import Avatar from "../../assets/index.png";

function UserDashboard(params) {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen text-center m-5 min-w-min ">
            <div className="flex justify-center text-white  flex-col items-center rounded-lg shadow-md shadow-[#0b122a] md:w-1/2 m-auto space-y-10 p-5 bg-[#0b122a]">
                <div className="flex space-x-10 items-center justify-around w-full">
                <div className="items-center flex flex-col space-x-4">
                    <div>
                    <img
                        className="w-20 h-20  rounded-full"
                        src={Avatar}
                        alt="profile"
                    ></img>
                    </div>
                    <div className="text-center">
                    <h1 className="text-2xl">John Kebab</h1>
                    <h1>johnkebab@yuhuu.com</h1>
                    </div>
                </div>
                <div
                    className="w-1/2 m-auto text-black cursor-pointer"
                    onClick={useNavigate("tes")}
                >
                    <div className="p-5 text-center  bg-white shadow rounded-lg ">
                    <p>0</p>
                    <h1>Riwayat Lamaran</h1>
                    </div>
                </div>
                </div>
                <div className="w-full flex justify-center">
                <button
                    className="bg-white text-[#0b122a] text-center md:text-xl font-bold  py-2.5 px-5  rounded-md w-full "
                    onClick={() => navigate("/completeprofile")}
                >
                    Kelola Profile
                </button>
                </div>
            </div>
            <div className=" m-auto w-full md:min-w-full flex-col items-center gap-10 flex justify-center my-14 ">
                <div className="TentangSaya  h-fit  rounded-md  shadow-lg flex flex-col md:w-1/2 items-center  ">
                    <div className="w-full bg-primary rounded-t-md items-center flex justify-between text-white p-5">
                        <h2>Tentang Saya</h2>
                    </div>
                    <div className="w-full rounded-b-md p-5 ">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni sunt
                        hic repellendus neque tempore aspernatur vitae similique nihil
                        natus, officiis ipsa itaque nostrum molestiae explicabo ratione
                        ipsum iure quidem ea perspiciatis consectetur deserunt commodi
                        suscipit earum? Laboriosam impedit voluptatum eum exercitationem
                        inventore, nulla quisquam laudantium delectus quae corporis, rem
                        ratione.
                    </div>
                </div>
                <div className="DataDiri  h-fit  rounded-md  shadow-lg flex flex-col md:w-1/2 items-center  ">
                    <div className="w-full bg-primary rounded-t-md items-center flex justify-between text-white p-5">
                        <h2>Data Diri</h2>
                    </div>
                    <div className="w-full flex flex-col space-y-5 justify-start rounded-b-md p-5 ">
                        <div className="text-left">
                            <h1 className="font-bold ">Nama Lengkap</h1>
                            <p>John Kebab</p>
                        </div>
                        <div className="text-left">
                            <h1 className="font-bold ">Nama Panggilan</h1>
                            <p>John</p>
                        </div>
                        <div className="text-left">
                            <h1 className="font-bold ">Jenis Kelamin</h1>
                            <p>Laki-Laki</p>
                        </div>
                        <div className="text-left">
                            <h1 className="font-bold ">Nomor Telepon</h1>
                            <p>Laki-Laki</p>
                        </div>
                        <div className="text-left">
                            <h1 className="font-bold ">Lokasi Saat Ini</h1>
                            <p>Laki-Laki</p>
                        </div>
                    </div>
                </div>
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
                    
                </div>

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
                    

                </div>
            </div>
            
        </div>
    );
}

export default UserDashboard;
