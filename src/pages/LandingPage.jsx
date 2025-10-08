import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import CategoriesSection from "../components/CategoriesSection";
import CoursesSection from "../components/CoursesSection";
import InstructorsSection from "../components/InstructorsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import BecomeInstructorSection from "../components/BecomeInstructorSection";
import TransformLifeSection from "../components/TransformLifeSection";
import Footer from "../components/Footer";

const LandingPage = () => {
    return (
        <div className="bg-white text-gray-800">
            <Navbar />

            <HeroSection />
            <StatsSection />
            <CategoriesSection />
            <CoursesSection />
            <InstructorsSection />
            <TestimonialsSection />
            <BecomeInstructorSection />
            <TransformLifeSection />
            <Footer />
        </div>
    );
};

export default LandingPage;
