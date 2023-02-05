// 21.04.2022 - 1º site em Next!
import React, { useEffect } from "react";

import Previous from "../components/Previous";
import Layout from "../components/Layout";
// import NinaSimone from "../components/Artists/NinaSimone";
// import Bioshock from "../components/Artists/BioshockComponent";
// import GratefulDeadComponent from "../components/Artists/GratefulDeadComponent";
// import FannyComponent from "../components/Artists/FannyComponent";
// import Belchior from "../components/Artists/BelchiorComponent";
import Cramps from "../components/Artists/CrampsComponent";
import TimeSpan from "../components/TimeSpan";

import { motion } from "framer-motion";
import Head from "next/head";

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
        //includedLanguages: "en, de, pt, ta, zh-CN", // include this for selected languages
        includedLanguages: "ar,de,en,es,jv,ko,pt,ru,zh-CN,tr",
        //layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      },
      "google_translate_element"
    );
  };

  return (
    <>
      <Layout>
        <Head>
          <title>Song of the Day</title>
          <meta name="description" content="Song of the day to inspire you." />
          <meta name="keywords" content="Song, Inspire, Jovane, Music" />
          {/*  OpenGraph */}
          <meta property="og:title" content="Song of the Day" />
          <meta
            property="og:description"
            content="Song of the day to inspire you."
          />
          <meta property="og:url" content="https://songoftheday.vercel.app/" />
          <meta
            property="og:image"
            content="https://images.pexels.com/photos/8038906/pexels-photo-8038906.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
          />
          {/*  Twitter */}
          <meta name="twitter:title" content="Song of the Day" />
          <meta
            name="twitter:description"
            content="Song of the day to inspire you."
          />
          <meta
            name="twitter:image"
            content="https://images.pexels.com/photos/8038906/pexels-photo-8038906.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
          />
        </Head>
        <motion.main
          variants={variants} // Pass the variant object into Framer Motion
          initial="hidden" // Set the initial state to variants.hidden
          animate="enter" // Animated state to variants.enter
          exit="exit" // Exit state (used later) to variants.exit
          transition={{ type: "linear" }} // Set the transition to linear
        >
          <div className="hero">
            <span id="google_translate_element">
              {googleTranslateElementInit}
            </span>
            <h1 className="shine">Song of the Day</h1>
          </div>
          <p id="credits">
            Foto de Elijah no{" "}
            <a href="https://www.pexels.com/pt-br/foto/envelhecido-curtido-maturado-antiguidade-8038906/">
              Pexels
            </a>
          </p>
          <TimeSpan />
          <Cramps />
          {/*<Belchior />*/}

          {/*<FannyComponent />*/}
          {/*<GratefulDead />*/}
          {/*<Bioshock /> */}
          {/* <NinaSimone /> */}
        </motion.main>
        <h2>Previous Songs</h2>
        <div id="previous">
          <Previous
            data-aos="fade-right"
            artist="Nina Simone"
            song="I Wish I Knew How It Would Feel To Be Free"
            page="/Nina"
          />
          <Previous
            data-aos="fade-right"
            artist="Bioshock - Infinite"
            song="Will the Circle Be Unbroken"
            page="/Bioshock"
          />{" "}
          <Previous
            data-aos="fade-right"
            artist="GratefulDead"
            song="Ripple"
            page="/GratefulDead"
          />{" "}
          <Previous
            data-aos="fade-right"
            artist="Fanny"
            song="Charity Ball"
            page="/Fanny"
          />
          <Previous
            data-aos="fade-right"
            artist="Belchior"
            song="Comentário a Respeito de John"
            page="/Belchior"
          />
          <hr style={{ width: "70%", margin: "2rem auto" }} />
        </div>
      </Layout>
    </>
  );
}
