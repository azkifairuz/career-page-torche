import { useNavigate } from "react-router-dom";
import Avatar from "../../assets/index.png";
function UserDashboard(params) {
    const navigate = useNavigate()
    return(
        <div className="min-h-screen text-center m-5 min-w-min ">
            <div className="flex justify-center text-white  flex-col items-center rounded-lg shadow-md shadow-[#0b122a] md:w-1/2 m-auto space-y-10 p-5 bg-[#0b122a]">
                <div className="flex space-x-10 items-center justify-around w-full">
                    <div className="items-center flex flex-col space-x-4">
                        <div>
                            <img className="w-20 h-20  rounded-full" src={Avatar} alt="profile"></img>
                        </div>
                        <div className="text-center">
                            <h1 className="text-2xl">John Kebab</h1>
                            <h1>johnkebab@yuhuu.com</h1>
                        </div>
                    </div>
                    <div className="w-1/2 m-auto text-black cursor-pointer" onClick={useNavigate("tes")}>
                        <div className="p-5 text-center  bg-white shadow rounded-lg ">
                            <p>0</p>
                            <h1>Riwayat Lamaran</h1>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center">
                    <button
                        className="bg-white text-[#0b122a] text-center md:text-xl font-bold  py-2.5 px-5  rounded-md w-full "
                        onClick={navigate("/completeprofile")}
                    >
                        Kelola Profile
                    </button>
                </div>
            </div>
            <h1 className="m-10 text-2xl"> Belum Tau mau di isi apa</h1>
        </div>
    )
}

export default UserDashboard;