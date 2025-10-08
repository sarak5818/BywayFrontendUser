import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PurchaseComplete = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
            <Navbar />

            <div className="bg-white shadow-md rounded-lg p-8 text-center">
                <div className="flex justify-center mb-4">
                    <div className="bg-green-500 rounded-full p-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Purchase Complete</h2>
                <p className="text-gray-500 mb-6">You will receive a confirmation email soon!</p>
                <button
                    onClick={() => navigate("/")}
                    className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
                >
                    Back to Home
                </button>
            </div>
            <Footer />
        </div>
    );
};

export default PurchaseComplete;
