import { FiMonitor, FiDatabase, FiCode, FiPenTool, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const CategoriesSection = () => {
    const categories = [
        { id: 1, name: "Fullstack", courses: 11, icon: <FiMonitor size={24} /> },
        { id: 2, name: "Backend", courses: 12, icon: <FiDatabase size={24} /> },
        { id: 3, name: "Frontend", courses: 12, icon: <FiCode size={24} /> },
        { id: 4, name: "UX/UI Design", courses: 14, icon: <FiPenTool size={24} /> },
    ];

    return (
        <section className="bg-white py-16">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-900">
                        Top Categories
                    </h2>
                    <div className="flex gap-2">
                        <button className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-md text-gray-600 hover:bg-gray-100 transition">
                            <FiChevronLeft size={18} />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-md text-gray-600 hover:bg-gray-100 transition">
                            <FiChevronRight size={18} />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {categories.map((cat) => (
                        <div
                            key={cat.id}
                            className=" max-w-7xl flex flex-col items-center text-center bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition duration-300 cursor-pointer"
                        >
                            <div className="bg-blue-50 text-blue-600 rounded-full p-4 mb-3">
                                {cat.icon}
                            </div>
                            <h3 className="text-gray-900 font-semibold text-base mb-1">
                                {cat.name}
                            </h3>
                            <p className="text-gray-500 text-sm">{cat.courses} Courses</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoriesSection;
