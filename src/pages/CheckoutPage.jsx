import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/useCart";
import { useNavigate } from "react-router-dom";
import { FaCcVisa, FaCcMastercard, FaPaypal } from "react-icons/fa";

const CheckoutPage = () => {
    const { cart, clearCart } = useCart();
    const navigate = useNavigate();

    const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
    const discount = 0.0;
    const tax = subtotal * 0.15;
    const total = subtotal + tax - discount;

    const handlePlaceOrder = () => {
        clearCart();
        navigate("/purchase-complete");
    };

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Navbar />

            <div className="max-w-7xl mx-auto w-full px-6 py-10 flex flex-col lg:flex-row gap-10">
                <div className="flex-1 bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-8">
                        Checkout Page
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                            <label className="text-sm font-semibold text-gray-700">
                                Country
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Country"
                                className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>
                        <div>
                            <label className="text-sm font-semibold text-gray-700">
                                State/Union Territory
                            </label>
                            <input
                                type="text"
                                placeholder="Enter State"
                                className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>
                    </div>

                    <div className="mb-6">
                        <p className="font-semibold text-gray-800 mb-4">Payment Method</p>

                        <div className="border border-gray-300 rounded-xl p-5 mb-4">
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="payment"
                                    defaultChecked
                                    className="accent-blue-600"
                                />
                                <span className="font-medium text-gray-700">
                                    Credit/Debit Card
                                </span>
                                <span className="ml-auto flex space-x-2 text-2xl text-gray-500">
                                    <FaCcVisa />
                                    <FaCcMastercard />
                                </span>
                            </label>

                            <div className="mt-5 space-y-4">
                                <input
                                    type="text"
                                    placeholder="Name of Card"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                                />
                                <input
                                    type="text"
                                    placeholder="Card Number"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                                />
                                <div className="grid grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="Expiry Date"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                                    />
                                    <input
                                        type="text"
                                        placeholder="CVC/CVV"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="border border-gray-300 rounded-xl p-4 flex items-center space-x-2">
                            <input
                                type="radio"
                                name="payment"
                                className="accent-blue-600"
                            />
                            <span className="font-medium text-gray-700">PayPal</span>
                            <span className="ml-auto text-2xl text-blue-600">
                                <FaPaypal />
                            </span>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-96 bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900">
                        Order Details ({cart.length})
                    </h3>

                    <div className="space-y-3 mb-4">
                        {cart.length > 0 ? (
                            cart.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="border border-gray-200 rounded-lg p-3 text-sm text-gray-700 hover:bg-gray-50"
                                >
                                    {item.title || "Course Title"}
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500 text-sm">No items in your cart.</p>
                        )}
                    </div>

                    <button className="w-full border border-gray-300 rounded-lg py-2 text-sm text-gray-700 hover:bg-gray-50 mb-6">
                        APPLY COUPON CODE
                    </button>

                    <div className="space-y-2 text-sm text-gray-700">
                        <div className="flex justify-between">
                            <span>Price</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Discount</span>
                            <span>${discount.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Tax</span>
                            <span>${tax.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between font-semibold text-gray-900 text-base border-t border-gray-200 pt-3">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                    </div>

                    <button
                        onClick={handlePlaceOrder}
                        className="w-full mt-6 bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
                    >
                        Proceed to Checkout
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default CheckoutPage;
