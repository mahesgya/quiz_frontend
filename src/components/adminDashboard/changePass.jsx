import { useState } from "react";
import FormContainer from "../formContainer";
import FormInput from "../formInput";
import adminService from "../../services/adminService";

const ChangePass = () => {
  const [formData, setFormData] = useState({
    password: "",
    newPassword: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await adminService.changeUserPassword(formData)
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <FormContainer title="Form Change Password" footer={`© ${new Date().getFullYear()} Admin Quiz`}>
      {error && <p className="text-red-600 bg-red-100 border border-red-500 rounded-md text-center p-3 mb-4">{error}</p>}

      <form onSubmit={handleSubmit}>
        <FormInput id="password" label="Old Password" type="password" labelColor="white" value={formData.password} onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))} placeholder="Masukkan password lama user" />
        <FormInput
          id="newPassword"
          label="New Password"
          type="password"
          labelColor="white"
          value={formData.newPassword}
          onChange={(e) => setFormData((prev) => ({ ...prev, newPassword: e.target.value }))}
          placeholder="Masukkan password baru user"
        />
        <button
          type="submit"
          className="font-quick w-full mt-3 p-3 bg-gray-700 text-white rounded-xl font-semibold shadow-md hover:from-gray-900 hover:to-black focus:outline-none focus:ring-2 focus:ring-black hover:shadow-lg transition duration-300"
        >
          Submit
        </button>
      </form>
    </FormContainer>
  );
};

export default ChangePass;
