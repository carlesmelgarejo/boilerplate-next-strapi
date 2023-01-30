import MainHeader from "./MainHeader/MainHeader";
import Footer from "./Footer/Footer";

const Layout = (props: any) => {
  return (
    <div className="max-w-screen-2xl mx-auto my-0 bg-white px-10">
      <MainHeader />

      <main className="mx-auto my-10 max-w-screen-2xl bg-orange-100 py-8">
        {props.children}
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
