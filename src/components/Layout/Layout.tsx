// src/components/Layout.tsx
import type { ReactNode } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar/Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />          {/* Always on top */}
      <main className="flex-1">{children}</main> {/* Page content */}
      <Footer />          {/* Always at bottom */}
    </div>
  );
};

export default Layout;
