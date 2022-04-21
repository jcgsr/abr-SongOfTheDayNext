import { useEffect } from "react";
import AOS from "aos";

// import "animate.css";

import "aos/dist/aos.css";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  useEffect(() => {}, []);

  return <Component {...pageProps} />;
}

export default MyApp;
