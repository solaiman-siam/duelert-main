import { Outlet, ScrollRestoration, useLocation } from "react-router";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

function MainLayout() {


  const location = useLocation().pathname

  return (
    <div className="font-poppins ">
      <ScrollRestoration />
      <nav className="">
        <Navbar />
      </nav>
      <div className="pt-[93.61px]">
        <Outlet />
      </div>
      {location !== '/login' && location !== '/register' && <Footer />}
    </div>
  );
}

export default MainLayout;
