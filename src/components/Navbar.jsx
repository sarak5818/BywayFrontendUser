import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiSearch, FiShoppingCart, FiLogOut } from "react-icons/fi";

const Navbar = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const user = JSON.parse(localStorage.getItem("user"));

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            console.log("Searching for:", searchTerm);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between gap-6">
                <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => navigate("/")}
                >
                    <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Byway logo" className="w-8 h-9" />
                    <span className="text-xl font-semibold text-gray-700">Byway</span>
                </div>

                <div className="hidden md:flex items-center gap-3 flex-1 justify-center">
                    <form
                        onSubmit={handleSearch}
                        className="flex items-center bg-white border border-gray-300 rounded-[4px] px-3 py-1.5 w-[360px] shadow-sm focus-within:border-blue-500 transition"
                    >
                        <FiSearch className="text-gray-400 mr-2" size={18} />
                        <input
                            type="text"
                            placeholder="Search for courses, topics, or instructors..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
                        />
                    </form>

                    {user && (
                        <button
                            onClick={() => navigate("/courses")}
                            className="text-gray-700 text-sm font-medium hover:text-blue-600 cursor-pointer"
                        >
                            Courses
                        </button>
                    )}
                </div>

                <div className="flex items-center space-x-4">
                    {user ? (
                        <>
                            <button
                                onClick={() => navigate("/cart")}
                                className="relative text-gray-700 hover:text-blue-600"
                            >
                                <FiShoppingCart size={22} />
                            </button>

                            <div className="w-8 h-8 bg-gray-700 text-white rounded-full flex items-center justify-center uppercase font-medium cursor-default">
                                {user.fullName?.charAt(0) || "U"}
                            </div>

                            <button
                                onClick={handleLogout}
                                className="text-gray-700 hover:text-red-600"
                                title="Logout"
                            >
                                <FiLogOut size={20} />
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                onClick={() => navigate("/login")}
                                className="px-5 py-2 border border-gray-300 rounded-md text-gray-800 font-medium hover:bg-gray-700 hover:text-white transition-colors"
                            >
                                Login
                            </button>
                            <button
                                onClick={() => navigate("/register")}
                                className="px-5 py-2 border border-gray-300 rounded-md text-gray-800 font-medium hover:bg-gray-700 hover:text-white transition-colors"
                            >
                                Sign Up
                            </button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
