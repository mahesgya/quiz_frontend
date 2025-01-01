import axios from "axios";

const authService = {
  loginUser: async (credentials) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        credentials,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
        
      );
      return response.data;
      
    } catch (error) {
      throw error.response?.data || error.response || error.message || "Terjadi kesalahan saat login";
    }
  },
  logoutUser: async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/logout`,
        {}, 
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw error.response?.data || error.response || error.message || "Terjadi kesalahan saat logout";
    }
  },
  refreshUser: async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/refresh`,
        {}, 
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw error.response?.data || error.response || error.message || "Terjadi kesalahan saat refresh";
    }
  }
};

export default authService;
