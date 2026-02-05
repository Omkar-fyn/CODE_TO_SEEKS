import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import bg from "../assets/mountain.jpg";

const Layout = ({ user }) => {
  return (
    <div className="relative min-h-screen">
      
      {/* Background */}
      <img
        src={bg}
        className="fixed inset-0 w-full h-full object-cover -z-10"
        alt=""
      />

      {/* Navbar */}
      <Navbar user={user} />

      {/* Page content */}
      <main className="relative z-10 pt-40 px-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
