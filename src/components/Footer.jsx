import { FaFacebook, FaGithub, FaGoogle, FaXTwitter, FaMicrosoft } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 px-6 md:px-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
                <div>
                    <div className="flex items-center mb-4">
                        <img
                            src="/logo.png"
                            alt="Logo"
                            className="w-8 h-8 mr-2"
                        />
                        <h2 className="text-2xl font-semibold">Byway</h2>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-300">
                        Empowering learners through accessible and engaging online
                        education. <br />
                        Byway is a leading online learning platform dedicated to providing
                        high-quality, flexible, and affordable educational experiences.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">Get Help</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li><a href="#" className="hover:text-white">Contact Us</a></li>
                        <li><a href="#" className="hover:text-white">Latest Articles</a></li>
                        <li><a href="#" className="hover:text-white">FAQ</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">Programs</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li><a href="#" className="hover:text-white">Art & Design</a></li>
                        <li><a href="#" className="hover:text-white">Business</a></li>
                        <li><a href="#" className="hover:text-white">IT & Software</a></li>
                        <li><a href="#" className="hover:text-white">Languages</a></li>
                        <li><a href="#" className="hover:text-white">Programming</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                        <li>Address: 123 Main Street, Anytown, CA 12345</li>
                        <li>Tel: +(123) 456-7890</li>
                        <li>Mail: bywayedu@webkul.in</li>
                    </ul>

                    <div className="flex space-x-4 mt-4 text-gray-300">
                        <a href="#" className="hover:text-white"><FaFacebook size={22} /></a>
                        <a href="#" className="hover:text-white"><FaGithub size={22} /></a>
                        <a href="#" className="hover:text-white"><FaGoogle size={22} /></a>
                        <a href="#" className="hover:text-white"><FaXTwitter size={22} /></a>
                        <a href="#" className="hover:text-white"><FaMicrosoft size={22} /></a>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
                © 2025 Byway. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
