
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
    return <>
    <Navbar></Navbar>
   <div className=" content-wrapper">
   <Outlet></Outlet>
   </div>
    
    <Footer></Footer>
    </>;
}

export default Layout;