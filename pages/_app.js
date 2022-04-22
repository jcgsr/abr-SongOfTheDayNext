import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";

import "../styles/globals.css";

import { motion } from "framer-motion";

import { NextSeo } from "next-seo";

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
      <NextSeo
        title="Home"
        titleTemplate="Song of the Day | %s"
        defaultTitle="Song of the Day"
        description="Song of the day to inspire you."
        canonical="https://songoftheday.vercel.app/"
        openGraph={{
          url: "https://songoftheday.vercel.app/",
          title: "Song of the Day",
          description: "Song of the day to inspire you.",
          images: [
            {
              url: "https://images.pexels.com/photos/8038906/pexels-photo-8038906.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
              width: 800,
              height: 420,
              alt: "Cassete Photo",
            },
          ],
        }}
        twitter={{
          handle: "@teufel8",
          site: "@teufel8",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />;
    </motion.div>
  );
}

export default MyApp;
