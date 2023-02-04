import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />

      <main className="max-w-3xl">{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
