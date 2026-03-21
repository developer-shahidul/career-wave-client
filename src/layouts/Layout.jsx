import { Outlet } from "react-router";
import Footer from "../pages/shared/Footer";
import Navbar from "../pages/shared/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto  mt-20">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
