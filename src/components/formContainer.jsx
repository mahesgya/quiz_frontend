import PropTypes from "prop-types";

const FormContainer = ({ title, children, footer }) => (
  <div className="flex items-center  justify-center min-h-screen bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800">
    <div className="w-full max-w-3xl p-8 bg-gray-800 shadow-lg rounded-lg text-white">
      <h2 className="font-quick text-3xl font-semibold text-center text-gray-100 mb-6">{title}</h2>
      {children}
      {footer && <p className="text-center text-gray-400 mt-6 text-sm">{footer}</p>}
    </div>
  </div>
);

FormContainer.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  footer: PropTypes.string,
};

export default FormContainer;
