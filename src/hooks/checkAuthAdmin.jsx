import axios from "axios";

const useCheckAuthAdmin = () => {

  const checkAuth = async () => {
    try {
      await axios.get(`${import.meta.env.VITE_API_URL}/api/auth/admin`, {
        withCredentials: true,  
      });
    } catch (err) {
      console.error("Error during authentication check:", err);
    }
  };

  checkAuth();
};

export default useCheckAuthAdmin;
