import React from "react";
import Sidebar from "./Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import Sign from "./Sign";

function Layout() {
  const location = useLocation();
  const hideSidebarRoutes = ["/contact", "/sign", "/account"];
  const shouldHideSidebar = hideSidebarRoutes.includes(location.pathname);
  return (
    <>
      <Header />
      <Navbar />
      <div className="flex items-center">
        <div className="w-[25%] flex">{!shouldHideSidebar && <Sidebar />}</div>
        <div className="w-[75%]">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;
