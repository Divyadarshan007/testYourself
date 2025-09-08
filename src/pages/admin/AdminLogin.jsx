import { useState } from "react"
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const AdminLogin = () => {
    const [input, setInput] = useState({ email: '', password: '' })
    const navigate = useNavigate();
    const location = useLocation()

    return (
        <div className="container mx-auto ">
            <form className="max-w-sm mx-auto py-10" onSubmit={(e) => {
                e.preventDefault();
                if (input.email.trim() === 'admin@gmail.com' || input.password.trim() === 'password') {
                    Navigate
                }
            }}>
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                    <input onChange={(e) => setInput({ ...input, [e.target.id]: e.target.value })} type="email" id="email" value={input.email} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@flowbite.com" />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
                    <input type="password" id="password" onChange={(e) => setInput({ ...input, [e.target.id]: e.target.value })} value={input.password} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                </div>

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </div>
    )
}

export default AdminLogin