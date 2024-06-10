import React from "react";
import Router from "../../routes/Router";
import { Navbar, Footer, Sidebar } from "../../components";
import "./layout.css";

type Props = {};

const Layout = (props: Props) => {
  return (
    <>
      <div className="layout">
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <div className="content-container">
          <Navbar />
          <Router />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
