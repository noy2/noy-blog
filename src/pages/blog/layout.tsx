import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "../../app/globals.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="mb-10 md:mb-16"></div>
        <main className="w-screen flex-1">{children}</main>
        <div className="mb-10 md:mb-16"></div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
