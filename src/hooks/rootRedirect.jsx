import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RootRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/user/login");
  }, [navigate]);

  return null;
};

export default RootRedirect;
