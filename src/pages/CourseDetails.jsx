import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/useCart";

const CourseDetails = () => {
    const { addToCart } = useCart();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("description");

    const course = {
        id: 1,
        title: "Introduction to User Experience Design",
        rating: 4.6,
        totalHours: 22,
        lectures: 155,
        level: "All levels",
        instructor: "Ronald Richards",
        category: "UI/UX Design",
        price: 45,
        image: "/course1.png",
        description: `
      This interactive e-learning course will introduce you to User Experience (UX) design,
      the art of creating products and services that are intuitive, enjoyable, and user-friendly.
      Gain a solid foundation in UX principles and learn to apply them in real-world scenarios
      through engaging modules and interactive exercises.
    `,
        certification: `
      At Byway, we understand the significance of formal recognition for your hard work and dedication
      to continuous learning. Upon successful completion of our courses, you will earn a prestigious
      certification that not only validates your expertise but also opens doors to new opportunities
      in your chosen field.
    `,
    };

    const content = [
        { title: "Introduction to UX Design", lectures: 5, time: "1 hour" },
        { title: "Basics of User-Centered Design", lectures: 5, time: "1 hour" },
        { title: "Elements of User Experience", lectures: 5, time: "1 hour" },
        { title: "Visual Design Principles", lectures: 5, time: "1 hour" },
    ];

    const reviews = [
        {
            name: "Mark Doe",
            rating: 5,
            date: "22nd March, 2024",
            review:
                "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules.",
        },
        {
            name: "Jane Smith",
            rating: 5,
            date: "25th March, 2024",
            review:
                "The video lectures were engaging, and the real-world examples really helped solidify my understanding.",
        },
    ];

    const similarCourses = [
        { id: 1, title: "Beginner’s Guide to Design", price: 45, instructor: "Ronald Richards", image: "/course1.png" },
        { id: 2, title: "UI/UX Essentials", price: 45, instructor: "Ronald Richards", image: "/course1.png" },
        { id: 3, title: "Mastering Figma", price: 45, instructor: "Ronald Richards", image: "/course1.png" },
        { id: 4, title: "Advanced Prototyping", price: 45, instructor: "Ronald Richards", image: "/course1.png" },
    ];

    const handleAddToCart = () => {
        addToCart(course);
        navigate("/cart");
    };

    return (
        <div className="bg-white text-gray-800 min-h-screen flex flex-col">
            <Navbar />

            <div className="max-w-6xl mx-auto w-full px-6 mt-6">
                <p className="text-sm text-gray-500 mb-2">
                    Home / Courses / <span className="text-blue-600">{course.title}</span>
                </p>

                <h1 className="text-2xl font-bold mb-2">{course.title}</h1>
                <p className="text-gray-600 text-sm mb-3">
                    {course.rating} ★ | {course.totalHours} Total Hours · {course.lectures} Lectures · {course.level}
                </p>

                <div className="flex items-center gap-3 mb-5">
                    <p className="text-sm text-gray-700">Created by {course.instructor}</p>
                    <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-md">{course.category}</span>
                </div>
            </div>

            <div className="max-w-6xl mx-auto w-full px-6 flex gap-8">
                <div className="flex-1">
                    <div className="flex border-b border-gray-200 mb-4">
                        {["description", "instructor", "content", "reviews"].map((tab) => (
                            <button
                                key={tab}
                                className={`px-4 py-2 text-sm font-medium capitalize ${activeTab === tab
                                    ? "border-b-2 border-blue-600 text-blue-600"
                                    : "text-gray-600 hover:text-blue-600"
                                    }`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {activeTab === "description" && (
                        <div>
                            <h3 className="font-semibold text-lg mb-2">Course Description</h3>
                            <p className="text-gray-600 mb-4 whitespace-pre-line">{course.description}</p>

                            <h3 className="font-semibold text-lg mb-2">Certification</h3>
                            <p className="text-gray-600">{course.certification}</p>
                        </div>
                    )}

                    {activeTab === "instructor" && (
                        <div>
                            <h3 className="font-semibold text-lg mb-2">{course.instructor}</h3>
                            <p className="text-sm text-gray-500 mb-3">UI/UX Designer</p>

                            <div className="flex items-center gap-3 mb-4">
                                <img src="/instructor.png" alt="Instructor" className="w-20 h-20 rounded-full object-cover" />
                                <div>
                                    <p className="text-gray-700 text-sm">40,445 Reviews</p>
                                    <p className="text-gray-700 text-sm">500 Students</p>
                                    <p className="text-gray-700 text-sm">15 Courses</p>
                                </div>
                            </div>

                            <p className="text-gray-600 text-sm">
                                With over a decade of industry experience, Ronald brings a wealth of practical knowledge to the classroom.
                            </p>
                        </div>
                    )}

                    {activeTab === "content" && (
                        <div className="space-y-2">
                            {content.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex justify-between items-center border border-gray-200 rounded-lg px-4 py-2 hover:bg-gray-50"
                                >
                                    <p className="text-gray-700 text-sm font-medium">{item.title}</p>
                                    <p className="text-gray-500 text-sm">
                                        {item.lectures} Lectures · {item.time}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === "reviews" && (
                        <div className="space-y-4">
                            {reviews.map((r, i) => (
                                <div key={i} className="border border-gray-200 rounded-xl p-4">
                                    <div className="flex items-center gap-3 mb-2">
                                        <img src="/review.png" alt="User" className="w-10 h-10 rounded-full object-cover" />
                                        <div>
                                            <p className="font-medium text-gray-800">{r.name}</p>
                                            <p className="text-xs text-gray-500">
                                                {r.rating} ★ · Reviewed on {r.date}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 text-sm">{r.review}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    <h3 className="font-semibold text-lg mt-10 mb-4">More Courses Like This</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {similarCourses.map((c) => (
                            <div
                                key={c.id}
                                className="border border-gray-200 rounded-lg p-3 hover:shadow-md transition cursor-pointer"
                            >
                                <img src={c.image} alt={c.title} className="rounded-lg mb-2" />
                                <span className="inline-block bg-blue-50 text-blue-600 text-xs font-medium px-2 py-1 rounded-md mb-1">
                                    {course.category}
                                </span>
                                <h4 className="text-sm font-medium text-gray-800">{c.title}</h4>
                                <p className="text-xs text-gray-500 mb-1">By {c.instructor}</p>
                                <p className="font-semibold text-gray-800">${c.price}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <aside className="w-80 h-fit bg-white border border-gray-200 rounded-xl p-4">
                    <img src={course.image} alt={course.title} className="rounded-lg mb-3" />
                    <p className="text-xl font-semibold mb-3">${course.price}.00</p>

                    <button
                        onClick={handleAddToCart}
                        className="w-full bg-gray-900 text-white py-2 rounded-md mb-2 hover:bg-gray-800"
                    >
                        Add To Cart
                    </button>

                    <button
                        className="w-full border border-gray-300 py-2 rounded-md hover:bg-gray-50"
                        onClick={() => navigate("/checkout")}
                    >
                        Buy Now
                    </button>

                    <div className="mt-4">
                        <p className="text-sm text-gray-600 mb-2">Share</p>
                        <div className="flex gap-3 text-gray-500">
                            <i className="ri-facebook-circle-fill text-xl"></i>
                            <i className="ri-twitter-fill text-xl"></i>
                            <i className="ri-instagram-fill text-xl"></i>
                        </div>
                    </div>
                </aside>
            </div>

            <Footer />
        </div>
    );
};

export default CourseDetails;
