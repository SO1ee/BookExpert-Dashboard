import { getUser, logout } from "../utils/auth";
import { useNavigate } from "react-router-dom";
export default function Navbar() { 
    const user = getUser()
    const navigate = useNavigate()
    const logOut = () => { 
        logout();
        navigate("/");
    }

    return (
        <>
            <nav className="bg-white border-b shadow-sm px-4 sm:px-6 py-3 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                {/* Left Section */}
                    <h1 className="text-lg sm:text-xl font-semibold text-blue-700 mb-2 sm:mb-0">
                        Employee Dashboard
                    </h1>

                {/* Right Section */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <span className="text-gray-700">Hi,{user.name}</span>
                        <button
                            className="btn-secondary text-sm"
                            onClick={logOut}
                        >
                            Logout
                        </button>
                    </div>
            </nav>

        </>
    );
}