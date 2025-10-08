import { FaQuoteLeft } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";


const testimonials = [
    {
        name: "Jane Doe",
        role: "Designer",
        text: `"Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia."`,
        image: "/customer1.png",
    },
    {
        name: "Jane Doe",
        role: "Designer",
        text: `"Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia."`,
        image: "/customer1.png",
    },
    {
        name: "Jane Doe",
        role: "Designer",
        text: `"Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia."`,
        image: "/customer1.png",
    },
];

const TestimonialsSection = () => {
    return (
        <section className="bg-gray-50 py-16 px-6 md:px-20">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-semibold text-gray-900">
                    What Our Customer Say <br /> About Us                </h2>

                <div className="flex gap-2">
                    <button className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-md text-gray-600 hover:bg-gray-100 transition">
                        <FiChevronLeft size={18} />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-md text-gray-600 hover:bg-gray-100 transition">
                        <FiChevronRight size={18} />
                    </button>
                </div>
            </div>



            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((t, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-2xl p-6 relative border border-gray-100 cursor-pointer"
                    >
                        <FaQuoteLeft className="text-blue-500 text-3xl mb-4" />
                        <p className="text-gray-700 italic mb-6">{t.text}</p>
                        <div className="flex items-center gap-4">
                            <img
                                src={t.image}
                                alt={t.name}
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                                <h4 className="font-semibold text-gray-900">{t.name}</h4>
                                <p className="text-sm text-gray-500">{t.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </section>
    );
};

export default TestimonialsSection;
