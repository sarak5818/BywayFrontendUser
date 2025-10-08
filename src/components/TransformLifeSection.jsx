const TransformLifeSection = () => {
    return (
        <section className="bg-gray-50 py-20 px-6 md:px-20 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
                <h2 className="text-3xl font-semibold mb-4 text-gray-900">
                    Transform your life through education
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                    Learners around the world are launching new careers, advancing in
                    their fields, and enriching their lives.
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-900 transition cursor-pointer">
                    Checkout Courses →
                </button>
            </div>

            <div className="md:w-1/2 flex justify-center">
                <img
                    src="/image.png"
                    alt="Student Learning"
                    className="rounded-2xl w-96 h-auto object-cover"
                />
            </div>
        </section>
    );
};

export default TransformLifeSection;
