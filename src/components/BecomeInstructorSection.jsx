const BecomeInstructorSection = () => {
    return (
        <section className="bg-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 flex justify-center">
                <img
                    src={`${import.meta.env.BASE_URL}become.png`} alt="Instructor"
                    className="rounded-2xl w-80 h-auto object-cover"
                />
            </div>

            <div className="md:w-1/2">
                <h2 className="text-3xl font-semibold mb-4 text-gray-900">
                    Become an Instructor
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                    Instructors from around the world teach millions of students on Byway.
                    We provide the tools and skills to teach what you love.
                </p>

                <button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-900 transition cursor-pointer">
                    Start Your Instructor Journey →
                </button>
            </div>
        </section>
    );
};

export default BecomeInstructorSection;
