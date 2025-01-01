import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CheckAuthUser = () => {
  const [isLoading, setIsLoading] = useState(true); 
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get(`${import.meta.env.VITE_API_URL}/api/auth/user`,{}, {
          withCredentials: true,
        });

      } catch (err) {
        alert("Anda belum login, silahkan login terlebih dahulu");
        console.log(err);

      } finally {
        setIsLoading(false);  
      }
    };

    checkAuth();
  }, [navigate]);

  return { isLoading };
};

export default CheckAuthUser;
