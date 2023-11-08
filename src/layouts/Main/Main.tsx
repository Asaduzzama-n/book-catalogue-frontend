import Footer from "@/components/shared/footer/Footer";
import NavBar from "@/components/shared/header/NavBar";
import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}
