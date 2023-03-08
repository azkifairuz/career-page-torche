import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login() {
    const navigate = useNavigate()
    const [users, setUsers] = useState('')
    const handler = e => {setUsers(e.target.value)}
    function isAdmin() {
        if (users === "admin") {
            return navigate("/admin")
        } 
        
        return navigate("/user")
    }
    
    return(
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <h1 href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                Login 
            </h1>
            <div class="w-full  rounded-lg shadow-lg md:mt-0 sm:max-w-md xl:p-0 bg-primary-500 border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                        Sign in
                    </h1>
                    <form class="space-y-4 md:space-y-6" action="" method="post">
                        <div>
                            <label  for="username" class="block mb-2 text-sm font-medium text-gray-900 ">Your username</label>
                            <input type="text" value={users} onChange={ handler } name="username" id="username" class="bg-primary-800 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Input Username" required/>
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium  ">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" class="bg-primary-800 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required/>
                        </div>
                        <button onClick={isAdmin} name="loginbutton" class="w-full  bg-blue-500 text-white hover:bg-primary-100 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login