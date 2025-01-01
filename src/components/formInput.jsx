import { useState } from "react";
import PropTypes from "prop-types";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const FormInput = ({ id, label, type, value, onChange, placeholder, labelColor }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mb-6">
      <label
        htmlFor={id}
        className={`font-quick block font-medium mb-2 ${labelColor ? labelColor : 'text-gray-700'}`}
      >
        {label}
      </label>
      <div className="relative">
        <input
          type={id === "password" && showPassword ? "text" : type}
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          required
          className="w-full p-4 border border-sky-100 rounded-lg focus:ring-2 focus:ring-sky-100 focus:outline-none bg-white text-gray-800 placeholder-gray-400"
          placeholder={placeholder}
        />
        
        {(id === "password" || id === "newPassword") && (
          <button type="button" onClick={handleTogglePassword} className="absolute right-3 top-5 text-gray-600">
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>
    </div>
  );
};

FormInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  labelColor: PropTypes.string, 
};

export default FormInput;
