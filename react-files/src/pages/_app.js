import { useEffect } from "react";
import Sidebar from "../components/common/sidebar";
import SmoothPageScroll from "../components/common/smoothPageScroll";
import ThemeToggler from "../components/common/themeMood";
import ScrollToTop from "../components/scrollToTop";
import "../styled/main.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("../../public/js/bootstrap.bundle.min.js");
    <Sidebar />;
  });
  return (
    <>
      <Component {...pageProps} />
      <ThemeToggler />
      <SmoothPageScroll />
      <ScrollToTop />
    </>
  );
}

export default MyApp;
