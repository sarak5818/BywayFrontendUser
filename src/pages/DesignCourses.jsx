import { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const coursesData = [
    {
        id: 1,
        title: "Beginner’s Guide to Design",
        category: "UI/UX Design",
        instructor: "Ronald Richards",
        rating: 5,
        lectures: 155,
        hours: 22,
        level: "Beginner",
        price: 45,
        image: "/course1.png",
    },
    {
        id: 1,
        title: "Frontend Mastery with React",
        category: "Frontend",
        instructor: "Cameron Williamson",
        rating: 4,
        lectures: 120,
        hours: 30,
        level: "Intermediate",
        price: 60,
        image: "/course1.png",
    },
    {
        id: 1,
        title: "Testing for Modern Web Apps",
        category: "Testing",
        instructor: "Leslie Alexander",
        rating: 4,
        lectures: 80,
        hours: 18,
        level: "Beginner",
        price: 35,
        image: "/course1.png",
    },
    {
        id: 1,
        title: "Backend Development with Node.js",
        category: "Backend",
        instructor: "Jacob Jones",
        rating: 5,
        lectures: 200,
        hours: 45,
        level: "Advanced",
        price: 80,
        image: "/course1.png",
    },
    {
        id: 1,
        title: "Advanced UI/UX Case Studies",
        category: "UI/UX Design",
        instructor: "Theresa Webb",
        rating: 5,
        lectures: 90,
        hours: 25,
        level: "Advanced",
        price: 70,
        image: "/course1.png",
    },
    {
        id: 1,
        title: "JavaScript from Zero to Hero",
        category: "Frontend",
        instructor: "Arlene McCoy",
        rating: 4,
        lectures: 130,
        hours: 28,
        level: "Intermediate",
        price: 55,
        image: "/course1.png",
    },
    {
        id: 1,
        title: "Figma for Designers",
        category: "UI/UX Design",
        instructor: "Bessie Cooper",
        rating: 5,
        lectures: 70,
        hours: 14,
        level: "Beginner",
        price: 40,
        image: "/course1.png",
    },
    {
        id: 1,
        title: "Node.js API Development",
        category: "Backend",
        instructor: "Guy Hawkins",
        rating: 4,
        lectures: 160,
        hours: 32,
        level: "Intermediate",
        price: 65,
        image: "/course1.png",
    },
    {
        id: 1,
        title: "React Advanced Patterns",
        category: "Frontend",
        instructor: "Courtney Henry",
        rating: 5,
        lectures: 180,
        hours: 38,
        level: "Advanced",
        price: 75,
        image: "/course1.png",
    },
    {
        id: 1,
        title: "Fullstack Web Development",
        category: "Frontend",
        instructor: "Marvin McKinney",
        rating: 5,
        lectures: 250,
        hours: 50,
        level: "Advanced",
        price: 85,
        image: "/course1.png",
    },
    {
        id: 1,
        title: "Design Thinking Workshop",
        category: "UI/UX Design",
        instructor: "Jenny Wilson",
        rating: 4,
        lectures: 60,
        hours: 12,
        level: "Beginner",
        price: 30,
        image: "/course1.png",
    },
    {
        id: 1,
        title: "Automated Testing with Cypress",
        category: "Testing",
        instructor: "Savannah Nguyen",
        rating: 5,
        lectures: 95,
        hours: 22,
        level: "Intermediate",
        price: 50,
        image: "/course1.png",
    },
];

const DesignCourses = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));
    const [sortOption, setSortOption] = useState("The latest");
    const [openSort, setOpenSort] = useState(false);

    const [rating, setRating] = useState(5);
    const [lectures, setLectures] = useState("");
    const [priceRange, setPriceRange] = useState([0, 980]);
    const [categories, setCategories] = useState(["UI/UX Design", "Frontend"]);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const handleCategoryChange = (cat) => {
        setCategories((prev) =>
            prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
        );
    };

    const handleSelectSort = (option) => {
        setSortOption(option);
        setOpenSort(false);
    };

    const filteredCourses = useMemo(() => {
        let filtered = coursesData.filter((course) => {
            const lectureCount = course.lectures;
            let lectureMatch = true;
            if (lectures === "1-15") lectureMatch = lectureCount <= 15;
            else if (lectures === "16-30")
                lectureMatch = lectureCount > 15 && lectureCount <= 30;
            else if (lectures === "31-45")
                lectureMatch = lectureCount > 30 && lectureCount <= 45;
            else if (lectures === "More than 45") lectureMatch = lectureCount > 45;

            return (
                course.rating >= rating &&
                lectureMatch &&
                categories.includes(course.category) &&
                course.price >= priceRange[0] &&
                course.price <= priceRange[1]
            );
        });

        if (sortOption === "Highest price") filtered.sort((a, b) => b.price - a.price);
        else if (sortOption === "Lowest price") filtered.sort((a, b) => a.price - b.price);
        else if (sortOption === "The latest") filtered.sort((a, b) => b.id - a.id);
        else if (sortOption === "The oldest") filtered.sort((a, b) => a.id - b.id);

        return filtered;
    }, [rating, lectures, categories, priceRange, sortOption]);

    const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedCourses = filteredCourses.slice(
        startIndex,
        startIndex + itemsPerPage
    );

    const changePage = (page) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };

    return (
        <div className="bg-white text-gray-800 min-h-screen flex flex-col">
            <Navbar />

            <div className="max-w-7xl mx-auto flex gap-6 mt-8 px-6 flex-1">
                <aside className="w-64 border border-gray-200 rounded-xl p-4 bg-white h-fit">
                    <h2 className="text-lg font-semibold mb-4">Filter</h2>

                    <div className="mb-5">
                        <h3 className="font-medium mb-2">Rating</h3>
                        <div className="flex items-center text-yellow-500 text-lg cursor-pointer">
                            {[5, 4, 3, 2, 1].map((star) => (
                                <span
                                    key={star}
                                    onClick={() => setRating(star)}
                                    className={`mr-1 ${rating === star ? "text-yellow-500" : "text-gray-300"
                                        }`}
                                >
                                    ★
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mb-5">
                        <h3 className="font-medium mb-2">Number of Lectures</h3>
                        <div className="space-y-2 text-sm text-gray-700">
                            {["1-15", "16-30", "31-45", "More than 45"].map((range) => (
                                <label key={range} className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="lectures"
                                        checked={lectures === range}
                                        onChange={() => setLectures(range)}
                                    />
                                    {range}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="mb-5">
                        <h3 className="font-medium mb-2">Price</h3>
                        <div className="flex flex-col gap-1">
                            <input
                                type="range"
                                min="0"
                                max="980"
                                value={priceRange[1]}
                                onChange={(e) =>
                                    setPriceRange([0, Number(e.target.value)])
                                }
                                className="w-full"
                            />
                            <div className="flex justify-between text-sm text-gray-600">
                                <span>${priceRange[0]}</span>
                                <span>${priceRange[1]}</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-medium mb-2">Category</h3>
                        <div className="space-y-2 text-sm text-gray-700">
                            {["Frontend", "Backend", "Testing", "UI/UX Design"].map((cat) => (
                                <label key={cat} className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={categories.includes(cat)}
                                        onChange={() => handleCategoryChange(cat)}
                                    />
                                    {cat}
                                </label>
                            ))}
                        </div>
                    </div>
                </aside>

                <main className="flex-1">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold">Design Courses</h1>

                        {user && (
                            <div className="relative inline-block text-left">
                                <button
                                    onClick={() => setOpenSort(!openSort)}
                                    className="border border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 flex items-center justify-between w-36"
                                >
                                    {sortOption}
                                    <svg
                                        className="w-4 h-4 ml-2 text-gray-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d={openSort ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                                        />
                                    </svg>
                                </button>

                                {openSort && (
                                    <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-10">
                                        {["Highest price", "Lowest price", "The latest", "The oldest"].map((option) => (
                                            <button
                                                key={option}
                                                onClick={() => handleSelectSort(option)}
                                                className={`block w-full text-left px-4 py-2 text-sm ${sortOption === option
                                                    ? "text-blue-600 bg-blue-50"
                                                    : "text-gray-800 hover:bg-gray-100"
                                                    }`}
                                            >
                                                {option}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {paginatedCourses.length > 0 ? (
                            paginatedCourses.map((course) => (
                                <div
                                    key={course.title}
                                    onClick={() => navigate("/courses/1")}
                                    className="border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition bg-white cursor-pointer"
                                >
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        className="rounded-lg mb-3"
                                    />
                                    <span className="inline-block bg-blue-50 text-blue-600 text-xs font-medium px-2 py-1 rounded-md mb-2">
                                        {course.category}
                                    </span>
                                    <h3 className="font-semibold text-gray-800 mb-1">
                                        {course.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 mb-2">
                                        By {course.instructor}
                                    </p>
                                    <div className="flex items-center text-yellow-500 text-sm mb-2">
                                        {"★".repeat(course.rating)}{"☆".repeat(5 - course.rating)}
                                    </div>
                                    <p className="text-sm text-gray-500 mb-3">
                                        {course.hours} Total Hours. {course.lectures} Lectures.{" "}
                                        {course.level}
                                    </p>
                                    <p className="font-semibold text-gray-900">${course.price}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">No courses match your filters.</p>
                        )}
                    </div>

                    {totalPages > 1 && (
                        <div className="flex justify-center items-center gap-2 mt-8">
                            <button
                                onClick={() => changePage(currentPage - 1)}
                                disabled={currentPage === 1}
                                className={`px-3 py-1 border rounded-md ${currentPage === 1
                                    ? "text-gray-400 cursor-not-allowed"
                                    : "hover:bg-gray-100"
                                    }`}
                            >
                                Prev
                            </button>
                            {[...Array(totalPages)].map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => changePage(i + 1)}
                                    className={`px-3 py-1 border rounded-md ${currentPage === i + 1
                                        ? "bg-blue-500 text-white border-blue-500"
                                        : "hover:bg-gray-100"
                                        }`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                            <button
                                onClick={() => changePage(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className={`px-3 py-1 border rounded-md ${currentPage === totalPages
                                    ? "text-gray-400 cursor-not-allowed"
                                    : "hover:bg-gray-100"
                                    }`}
                            >
                                Next
                            </button>
                        </div>
                    )}
                </main>
            </div>

            <Footer />
        </div>
    );
};

export default DesignCourses;
