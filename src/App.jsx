import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DesignCourses from "./pages/DesignCourses";
import CourseDetails from "./pages/CourseDetails";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import PurchaseComplete from "./pages/PurchaseComplete";

function App() {
  return (

    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/courses" element={<DesignCourses />} />
      <Route path="/courses/:id" element={<CourseDetails />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/purchase-complete" element={<PurchaseComplete />} />

    </Routes>

  );
}

export default App;
