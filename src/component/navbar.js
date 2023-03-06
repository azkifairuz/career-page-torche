import { Outlet,Link } from "react-router-dom";
import Logo from "../img/torcheLogo.png"

function Navbar() {
    return(
        <>
            <nav className="sticky box-border justify-evenly left-0 right-0 px-4 bg-blue-900 top-0  flex">
                <div className="w-1/2">
                    <img className="w-32" src={Logo}alt="Torche"></img>
                </div>
                <ul className="flex my-auto gap-4 text-white ">
                    <li className=" items-center  py-navbar-item rounded-md hover:bg-blue-700">
                        <Link  className=" py-navbar-item px-navbar-item items-center" to ="/">Home</Link>
                    </li>
                    <li className=" items-center py-navbar-item rounded-md hover:bg-blue-700">
                        <Link className=" py-navbar-item px-navbar-item items-center" to ="/joblist">Job List</Link>
                    </li>
                    <li className=" items-center py-navbar-item  rounded-md hover:bg-blue-700">
                        <Link className=" py-navbar-item px-navbar-item items-center" to ="/about">About</Link>
                    </li>
                    <li className="item-center py-2">
                        <button className="bg-green-400 text-black hover:bg py-2 px-navbar-item items-center rounded-lg w-20">
                            <Link to ="/login">Login</Link>
                        </button>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </>
    )
}

export default Navbar;