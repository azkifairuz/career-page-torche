import { useNavigate } from "react-router-dom";
import Avatar from "../../assets/index.png";
import EduPreview from "./Complete Profile/Education/Preview";
import BiodataPreview from "./Complete Profile/Biodata/Preview";
import ExperiencePreview from "./Complete Profile/work expereience/Preview";
import Sidebar from "./sidebar";
import BasicInformation from "./Basic Information";
function Dashboard() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen text-center m-5 min-w-min ">
            <div>
                <Sidebar/>
                <div>
                    <BasicInformation/>
                    <kontak
                </div>
            </div>
            
            {/* <div className="flex justify-center text-white  flex-col items-center rounded-lg shadow-md shadow-[#0b122a] md:w-1/2 m-auto space-y-10 p-5 bg-[#0b122a]">
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
                    <h1 className="text-2xl">John Doe</h1>
                    <h1>johndoe@yuhuu.com</h1>
                    </div>
                </div>
                <div
                    className="w-1/2 m-auto text-black cursor-pointer"
                    onClick={()=> navigate("/track")}
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
                    onClick={() => navigate("/user/completeprofile")}
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
                <BiodataPreview/>
                <EduPreview navigate={()=> navigate("/user/addEducation") } />
               <ExperiencePreview navigate ={()=> navigate("/user/addExperience")}/>
            </div>
             */}
        </div>
    );
}

export default Dashboard;
