import React from "react";

import Header from "./Header";
import Explain from "./Explain";
import Comments from "./Comments";
import Social from "./Social";
import Footer from "./Footer";

import { motion } from "framer-motion";

export default function Layout({ children }) {
  return (
    <>
      <Header />

      <motion.main
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
        transition={{
          type: "spring",
          mass: 0.35,
          stiffness: 75,
          duration: 0.3,
        }}
      >
        <main>{children}</main>
      </motion.main>

      <Explain />
      <Comments />
      <Social />
      <Footer />
    </>
  );
}
