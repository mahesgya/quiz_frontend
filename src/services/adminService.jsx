import axios from "axios";

const adminService = {
    getAllUser: async () => {
        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/api/user`, {}, {
                headers: { "Content-Type": "application/json" },
                withCredentials: true, 
            });
        } catch (error) {
            throw error.response?.data || error.message;
        }
    },
    changeUserPassword: async (formData) => {
        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/api/session/password`, formData, {
                headers: { "Content-Type": "application/json" },
                withCredentials: true,  
            });
        } catch (error) {
            throw error.response?.data || error.message;
        }
    }
};

export default adminService;
