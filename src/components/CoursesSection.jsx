import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const CoursesSection = () => {
    const courses = [
        {
            id: 1,
            title: "Beginner’s Guide to Design",
            instructor: "Ronald Richards",
            rating: 4.9,
            reviews: 2400,
            price: "$45.00",
            category: "UI/UX Design",
            image: "/course1.png",
        },
        {
            id: 2,
            title: "Beginner’s Guide to Design",
            instructor: "Ronald Richards",
            rating: 4.8,
            reviews: 1800,
            price: "$60.00",
            category: "UI/UX Design",
            image: "/course1.png",
        },
        {
            id: 3,
            title: "Beginner’s Guide to Design",
            instructor: "Ronald Richards",
            rating: 4.7,
            reviews: 1500,
            price: "$55.00",
            category: "UI/UX Design",
            image: "/course1.png",
        },
        {
            id: 4,
            title: "Beginner’s Guide to Design",
            instructor: "Ronald Richards",
            rating: 4.9,
            reviews: 2100,
            price: "$70.00",
            category: "UI/UX Design",
            image: "/course1.png",
        },
    ];

    return (
        <section className="bg-white py-16">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-900">Top Courses</h2>

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
                    {courses.map((course) => (
                        <div
                            key={course.id}
                            className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition duration-300 cursor-pointer"
                        >
                            <div className="relative">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="rounded-t-lg w-full h-40 object-cover"
                                />
                                <span className="absolute top-2 left-2 bg-white text-gray-700 text-xs px-2 py-1 rounded">
                                    {course.category}
                                </span>
                            </div>

                            <div className="p-4">
                                <h3 className="text-gray-900 font-medium text-sm leading-snug mb-1">
                                    {course.title}
                                </h3>
                                <p className="text-gray-500 text-xs mb-1">
                                    By {course.instructor}
                                </p>
                                <div className="flex items-center text-yellow-500 text-xs mb-1">
                                    ⭐⭐⭐⭐⭐ <span className="text-gray-600 ml-1">{course.rating}</span>
                                </div>
                                <p className="text-gray-800 font-semibold text-sm">
                                    {course.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoursesSection;
