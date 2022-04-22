import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";

import "../styles/globals.css";

import { motion } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <motion.div
      key={router.route}
      initial="initial"
      animate="animate"
      variants={{
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
        },
      }}
    >
      <Component {...pageProps} />;
    </motion.div>
  );
}

export default MyApp;
