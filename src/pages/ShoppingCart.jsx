import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/useCart";

const ShoppingCart = () => {
    const { cart, removeFromCart } = useCart();

    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
    const tax = (totalPrice * 0.15).toFixed(2);
    const totalWithTax = (totalPrice + parseFloat(tax)).toFixed(2);

    return (
        <div className="bg-white min-h-screen flex flex-col text-gray-800">
            <Navbar />

            <div className="max-w-6xl mx-auto w-full px-6 mt-8 flex justify-between gap-10">
                <div className="flex-1">
                    <h1 className="text-2xl font-bold mb-3">Shopping Cart</h1>
                    <p className="text-sm text-gray-500 mb-6">
                        {cart.length} Courses in cart
                    </p>

                    {cart.length === 0 ? (
                        <p className="text-gray-600">Your cart is empty.</p>
                    ) : (
                        <div className="space-y-4">
                            {cart.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex justify-between items-center border border-gray-200 rounded-xl p-4 hover:shadow-sm"
                                >
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-28 h-20 rounded-md object-cover"
                                        />
                                        <div>
                                            <h3 className="font-medium text-gray-800">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm text-gray-500 mb-1">
                                                By {item.instructor}
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                ⭐ {item.rating} · {item.totalHours} Total Hours ·{" "}
                                                {item.lectures} Lectures · {item.level}
                                            </p>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-red-500 text-sm mt-1 hover:underline"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                    <p className="font-semibold text-gray-800">
                                        ${item.price}.00
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {cart.length > 0 && (
                    <aside className="w-80 bg-white border border-gray-200 rounded-xl p-5 h-fit">
                        <h2 className="font-semibold mb-3">Order Details</h2>
                        <div className="space-y-2 text-sm text-gray-600">
                            <div className="flex justify-between">
                                <span>Price</span>
                                <span>${totalPrice.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Discount</span>
                                <span>$0.00</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Tax</span>
                                <span>${tax}</span>
                            </div>
                            <hr className="my-2" />
                            <div className="flex justify-between font-semibold text-gray-800">
                                <span>Total</span>
                                <span>${totalWithTax}</span>
                            </div>
                        </div>

                        <button className="w-full mt-4 bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800">
                            Proceed to Checkout
                        </button>
                    </aside>
                )}
            </div>

            <Footer />
        </div>
    );
};

export default ShoppingCart;
