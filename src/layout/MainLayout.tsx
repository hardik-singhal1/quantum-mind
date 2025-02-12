import React from "react";
import Footer from "../components/common/Footer";
import Header from "./Header";

type LayoutProps = { children: React.ReactNode };

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-gray-900 text-white">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;