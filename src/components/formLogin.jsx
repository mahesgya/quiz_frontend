import PropTypes from "prop-types";

const FormLogin = ({ title, children, footer }) => (
  <div className="flex items-center justify-center min-h-screen bg-[url('/assets/awan.jpg')] bg-cover bg-center ">
    <div className="w-full max-w-md p-8 bg-gradient-to-t from-white via-white to-sky-100 shadow-2xl rounded-[30px] backdrop-blur-xl transform hover:scale-105 transition duration-300 ease-in-out">
      <h2 className="font-quick text-4xl font-bold text-center text-black mb-6 drop-shadow-lg">{title}</h2>
      {children}
      {footer && <p className="text-center text-gray-500 mt-6 font-quick">{footer}</p>}
    </div>
  </div>
);

FormLogin.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  footer: PropTypes.string,
};

export default FormLogin;
