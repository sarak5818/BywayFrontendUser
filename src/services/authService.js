import api from "./api";

export const authService = {
    async login(email, password) {
        try {
            const response = await api.post("/Auth/login", { email, password });
            const data = response.data;

            if (data.token) {
                const user = {
                    fullName: data.fullName,
                    role: data.role,
                    expiresAt: data.expiresAt,
                    email: email,
                };

                localStorage.setItem("authToken", data.token);
                localStorage.setItem("user", JSON.stringify(user));

                return { success: true, token: data.token, user };
            } else {
                return { success: false, message: data.message || "Login failed" };
            }
        } catch (error) {
            const message =
                error.response?.data?.message || "Network or server error";
            return { success: false, message };
        }
    },

    async register(userData) {
        try {
            const response = await api.post("/Auth/register", userData);
            const data = response.data;

            if (data.success) {
                return { success: true, message: data.message };
            } else {
                return { success: false, message: data.message || "Register failed" };
            }
        } catch (error) {
            const message =
                error.response?.data?.message || "Network or server error";
            return { success: false, message };
        }
    },

    logout() {
        localStorage.removeItem("authToken");
        localStorage.removeItem("user");
        window.location.href = "/login";
    },

    getCurrentUser() {
        const user = localStorage.getItem("user");
        return user ? JSON.parse(user) : null;
    },

    isAuthenticated() {
        return !!localStorage.getItem("authToken");
    },
};
