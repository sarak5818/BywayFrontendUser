import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../services/authService";
import { FaFacebook, FaGoogle, FaMicrosoft } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const res = await authService.login(email, password);

            if (res.success) {
                navigate("/", { replace: true });
                window.location.reload();
            } else {
                setError(res.message || "Invalid email or password");
            }
        } catch (err) {
            console.error(err);
            setError("Login failed. Please check your credentials.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex h-screen">
            <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="w-1/2 flex flex-col justify-center items-center bg-white px-12"
            >
                <div className="max-w-md w-full">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-2">
                        Sign in to your account
                    </h2>
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-gray-600 mb-1">Email</label>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-600 mb-1">Password</label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800 transition"
                        >
                            {loading ? "Signing in..." : "Sign In →"}
                        </button>
                    </form>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-1/2 bg-gray-50 flex justify-center items-center"
            >
                <img
                    src="/log1.png"
                    alt="Learning illustration"
                    className="w-4/5 rounded-xl shadow-lg"
                />
            </motion.div>
        </div>
    );
};

export default Login;
