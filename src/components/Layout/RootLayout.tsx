import { Outlet } from "react-router-dom";
import Navbar from "../UI/Navbar/Navbar";
import Footer from "../UI/Footer/Footer";

const RootLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="mx-auto w-10/12 bg-yellow-500">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
