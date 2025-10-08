const HeroSection = () => {
    return (
        <section className="max-w-6xl container mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
                <h1 className="text-gray-900 md:text-5xl font-bold mb-4 leading-tight">
                    Unlock Your Potential with Byway
                </h1>
                <p className="text-gray-700 mb-6 text-base leading-relaxed">
                    Welcome to Byway, where learning knows no bounds. We believe that
                    education is the key to personal and professional growth, and we're
                    here to guide you on your journey to success.
                </p>
                <button className="bg-blue-600 text-white text-sm px-6 py-3 rounded-md hover:bg-blue-700 transition shadow-md">
                    Start your journey
                </button>
            </div>

            <div className="flex-1 flex justify-center">
                <img
                    src={`${import.meta.env.BASE_URL}hero.png`}
                    alt="Students learning"
                    className="max-w-md w-full"
                />
            </div>
        </section>
    );
};

export default HeroSection;
