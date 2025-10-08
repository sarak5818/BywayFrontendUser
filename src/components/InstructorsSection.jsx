import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

const InstructorsSection = () => {
    const instructors = [
        {
            id: 1,
            name: "Kristin Watson",
            title: "UI/UX Design",
            rating: 4.8,
            students: "2,320",
            image: `${import.meta.env.BASE_URL}instructor1.png`
        },

        {
            id: 2,
            name: "Kristin Watson",
            title: "UI/UX Design",
            rating: 4.8,
            students: "2,320",
            image: `${import.meta.env.BASE_URL}instructor1.png`
        },
        {
            id: 3,
            name: "Kristin Watson",
            title: "UI/UX Design",
            rating: 4.8,
            students: "2,320",
            image: `${import.meta.env.BASE_URL}instructor1.png`
        },
        {
            id: 4,
            name: "Kristin Watson",
            title: "UI/UX Design",
            rating: 4.8,
            students: "2,320",
            image: `${import.meta.env.BASE_URL}instructor1.png`
        },
    ];

    return (
        <section className="bg-white py-16">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-xl font-semibold text-gray-900">
                        Top Instructors
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

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {instructors.map((inst) => (
                        <div
                            key={inst.id}
                            className="flex flex-col items-center border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition duration-300 py-6 cursor-pointer"
                        >
                            <img
                                src={inst.image}
                                alt={inst.name}
                                className="w-24 h-24 rounded-full mb-4 object-cover"
                            />
                            <h3 className="text-gray-900 font-semibold text-base">
                                {inst.name}
                            </h3>
                            <p className="text-gray-500 text-sm mb-3">{inst.title}</p>

                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <div className="flex items-center text-yellow-400">
                                    <FaStar size={14} />
                                    <span className="ml-1 text-gray-800">{inst.rating}</span>
                                </div>
                                <span className="text-gray-400">•</span>
                                <span>{inst.students} Students</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InstructorsSection;
