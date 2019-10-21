import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer"
import "../assets/styles/components/Layout.scss";

const Layout = ({ children }) => (
  <div className="layout">
    <div className="layout__header">
      <Header />
    </div>
    <div className="layout__hero">
      <Hero>{children}</Hero>
    </div>
    <div className="layout__footer">
      <Footer />
    </div>
  </div>
);
export default Layout;
