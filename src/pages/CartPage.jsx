import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/useCart";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
    const { cart, removeFromCart, clearCart } = useCart();
    const navigate = useNavigate();

    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

    const handleCheckout = () => {
        navigate("/checkout");
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />

            <div className="max-w-6xl mx-auto w-full px-6 py-10 flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                        Shopping Cart
                    </h2>

                    {cart.length === 0 ? (
                        <div className="text-center text-gray-500 py-10">
                            <p>Your cart is empty 🛒</p>
                            <button
                                onClick={() => navigate("/courses")}
                                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                            >
                                Browse Courses
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {cart.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-gray-200"
                                >
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-28 h-20 object-cover rounded-lg"
                                        />
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm text-gray-500">{item.instructor}</p>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-red-500 text-sm mt-1 hover:underline"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>

                                    <p className="text-gray-800 font-semibold">${item.price}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {cart.length > 0 && (
                    <div className="w-full lg:w-80 h-fit bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">
                            Order Summary
                        </h3>

                        <div className="flex justify-between mb-2 text-sm text-gray-600">
                            <p>Subtotal</p>
                            <p>${totalPrice.toFixed(2)}</p>
                        </div>
                        <div className="flex justify-between mb-4 text-sm text-gray-600">
                            <p>Discount</p>
                            <p>$0.00</p>
                        </div>

                        <hr className="mb-4" />

                        <div className="flex justify-between text-lg font-semibold text-gray-800 mb-4">
                            <p>Total</p>
                            <p>${totalPrice.toFixed(2)}</p>
                        </div>

                        <button
                            onClick={handleCheckout}
                            className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800 mb-2"
                        >
                            Checkout
                        </button>

                        <button
                            onClick={clearCart}
                            className="w-full border border-gray-300 py-2 rounded-md hover:bg-gray-50"
                        >
                            Clear Cart
                        </button>
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
};

export default CartPage;
