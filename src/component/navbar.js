import { Outlet,Link } from "react-router-dom";

function Navbar() {
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link to ="/">Home</Link>
                    </li>
                    <li>
                        <Link to ="/joblist">Job List</Link>
                    </li>
                    <li>
                        <Link to ="/about">About Torch Education</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </>
    )
}

export default Navbar;