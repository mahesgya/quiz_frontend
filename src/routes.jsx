import AdminLoginPage from "./pages/adminLoginPage";
import UserLoginPage from "./pages/userLoginPage";
import AdminDashboardPage from "./pages/adminDashboardPage";
import RootRedirect from "./hooks/rootRedirect";


const Routess = [
    {
        path:"/",
        element: <RootRedirect />,
    },
    {
        path:"/admin/login",
        element: <AdminLoginPage/>,
    },
    {
        path:"/user/login",
        element: <UserLoginPage/>,
    },
    {
        path:"/admin/dashboard",
        element: <AdminDashboardPage/>,
    }
];

export default Routess;