import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../services/authService";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        setLoading(true);

        try {
            const res = await authService.register({
                firstName,
                lastName,
                email,
                password,
            });

            if (res.success) {
                navigate("/", { replace: true });
                window.location.reload();
            } else {
                setError(res.message || "Registration failed");
            }
        } catch (err) {
            console.error(err);
            setError("Something went wrong during registration.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex h-screen">
            <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-1/2 bg-gray-50 flex justify-center items-center"
            >
                <img
                    src={`${import.meta.env.BASE_URL}sign.png`}
                    className="w-4/5 rounded-xl shadow-lg"
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="w-1/2 flex flex-col justify-center items-center bg-white px-12"
            >
                <div className="max-w-md w-full">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Create your account</h2>
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div className="flex gap-4">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="w-1/2 border rounded-md px-4 py-2 focus:ring-2 focus:ring-gray-900 outline-none"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="w-1/2 border rounded-md px-4 py-2 focus:ring-2 focus:ring-gray-900 outline-none"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                        </div>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-gray-900 outline-none"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-gray-900 outline-none"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-gray-900 outline-none"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800 transition"
                        >
                            {loading ? "Creating Account..." : "Create Account"}
                        </button>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default Register;
