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
            <div className="min-h-screen m-auto min-w-min flex justify-center my-14 md:w-3/4">
                <div className="TentangSaya  h-fit  rounded-md  shadow-lg flex flex-col w-1/2 items-center  ">
                <div className="w-full bg-primary rounded-t-md items-center flex justify-between text-white p-5">
                    <h2>Tentang Saya</h2>
                    <div className="flex space-x-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                        />
                    </svg>
                    <p>UBAH</p>
                    </div>
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
            </div>
        </div>
    );
}

export default UserDashboard;
