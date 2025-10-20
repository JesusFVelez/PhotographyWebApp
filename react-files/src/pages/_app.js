import { useEffect } from "react";
import SmoothPageScroll from "../components/common/smoothPageScroll";
import ThemeToggler from "../components/common/themeMood";
import ScrollToTop from "../components/scrollToTop";
import Layout from "../layout/Layout";
import "../styled/main.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("../../public/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ThemeToggler />
      <SmoothPageScroll />
      <ScrollToTop />
    </>
  );
}

export default MyApp;
