import { Navigate } from "react-router-dom";
import { authService } from "../services/authService";

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = authService.isAuthenticated();

    return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
