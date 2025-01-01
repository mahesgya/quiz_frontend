import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";
import FormLogin from "../components/formLogin";
import FormInput from "../components/formInput";

const LoginAdmin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = { username, password };
    try {
      await authService.loginUser(credentials);
      navigate("/admin/dashboard");
    } catch (err) {
      setError(err.message || "Terjadi Kesalahan Saat Login");
    }
  };

  return (
    <FormLogin title="Login Admin" footer={`© ${new Date().getFullYear()} Admin Quiz`}>
      {error && <p className="text-red-600 bg-red-100 border border-red-500 rounded-md text-center p-3 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <FormInput id="username" label="Username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Masukkan username Anda" />
        <FormInput id="password" label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Masukkan password Anda" />
        <button
          type="submit"
          className="font-quick w-full mt-3 p-3 bg-gradient-to-r from-black to-gray-800 text-white rounded-xl font-semibold shadow-md hover:from-gray-900 hover:to-black focus:outline-none focus:ring-2 focus:ring-black hover:shadow-lg transition duration-300"
        >
          Login
        </button>
      </form>
    </FormLogin>
  );
};

export default LoginAdmin;
