import { useState, useEffect } from "react";
import { FaUser, FaKey, FaPlusCircle, FaHistory, FaBars, FaTimes } from "react-icons/fa";
import HomeAdmin from "../components/adminDashboard/home";
import ChangePass from "../components/adminDashboard/changePass";
import CheckAuthAdmin from "../hooks/checkAuthAdmin";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Home");
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const authenticate = async () => {
      try {
        await CheckAuthAdmin();
        setIsAuthenticated(true); 
      } catch (err) {
        console.error("Error during authentication check:", err);
        setIsAuthenticated(false);
        console.log(err)
      }
    };

    authenticate(); 
  }, [navigate]);
  

  const renderContent = () => {
    switch (activeMenu) {
      case "Riwayat Log Tes":
        return <HomeAdmin />;
      case "Ubah Kata Sandi":
        return <ChangePass />;
      case "Tambah Soal Baru":
        return <HomeAdmin />;
      case "Home":
      default:
        return <HomeAdmin />;
    }
  };

  if(!isAuthenticated){
    return <div>Loading...</div>
  }
  

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 text-white">
      <div className="bg-gray-800 text-white p-4 md:hidden">
        <button onClick={toggleSidebar} className="text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div
        className={`fixed md:relative top-0 left-0 h-screen pb-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white w-64 md:translate-x-0 transition-transform duration-300 z-50 shadow-xl ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="font-quick p-6 text-center font-bold border-b border-gray-600 text-lg md:text-2xl lg:text-2xl">
          <h1>Admin Dashboard</h1>

          {isOpen && (
            <button onClick={toggleSidebar} className="text-2xl fixed top-2 right-2 md:hidden">
              <FaTimes />
            </button>
          )}
        </div>

        <nav className="flex-1 p-4 space-y-4 w-full">
          {[
            { name: "Home", icon: <FaUser className="text-lg md:text-xl lg:text-2xl mr-3" /> },
            { name: "Riwayat Log Tes", icon: <FaHistory className="text-lg md:text-xl lg:text-2xl mr-3" /> },
            { name: "Ubah Kata Sandi", icon: <FaKey className="text-lg md:text-xl lg:text-2xl mr-3" /> },
            { name: "Tambah Soal Baru", icon: <FaPlusCircle className="text-lg md:text-xl lg:text-2xl mr-3" /> },
          ].map((menu) => (
            <button
              key={menu.name}
              className={`w-full flex items-center p-3 rounded-lg text-lg transition-all ${activeMenu === menu.name ? "bg-gray-600 text-white" : "bg-gray-700 hover:bg-gray-600"}`}
              onClick={() => setActiveMenu(menu.name)}
            >
              {menu.icon} {menu.name}
            </button>
          ))}
        </nav>

        <div className="p-4 text-center border-t border-gray-600">
          <p className="text-sm text-gray-400 font-quick">&copy; 2024 Admin Quiz</p>
        </div>
      </div>

      {isOpen && <div className="fixed inset-0 bg-black opacity-50 md:hidden" onClick={toggleSidebar}></div>}

      <div className="flex-1 ">
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminDashboard;
