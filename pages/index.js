import React, { useEffect } from "react";

import Previous from "../components/Previous";
import Layout from "../components/Layout";
import NinaSimone from "../components/NinaSimone";

import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};
export default function Home() {
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        // includedLanguages: "en, zh-CN, pt, de", // include this for selected languages
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      },
      "google_translate_element"
    );
  };

  return (
    <>
      <Layout>
        <motion.main
          variants={variants} // Pass the variant object into Framer Motion
          initial="hidden" // Set the initial state to variants.hidden
          animate="enter" // Animated state to variants.enter
          exit="exit" // Exit state (used later) to variants.exit
          transition={{ type: "linear" }} // Set the transition to linear
          className=""
        >
          <div className="hero">
            {/* <span id="google_translate_element">
              {googleTranslateElementInit}
            </span> */}
            <h1 className="shine">Song of the Day</h1>
          </div>
          <p id="credits">
            Foto de Elijah O'Donnell no
            <a href="https://www.pexels.com/pt-br/foto/envelhecido-curtido-maturado-antiguidade-8038906/">
              Pexels
            </a>
          </p>
          <NinaSimone />
        </motion.main>
        <h2>Previous Songs</h2>
        <div id="previous">
          <Previous
            data-aos="fade-right"
            artist="No previous artist yet"
            song="no previous song yet"
            page="/Nina"
          />
          <hr style={{ width: "70%", margin: "2rem auto" }} />
        </div>
      </Layout>
    </>
  );
}
