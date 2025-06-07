import React from "react";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Artist(props) {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.9], [0.2, 1]);
  const { site, name, song, youtube, amazon, spotify, applemusic, lyrics } =
    props;

  return (
    <>
      <a href={site} target="__blank">
        <h1 className="singer">{name}</h1>
      </a>

      <h4>{song}</h4>

      <div className="video ">
        <iframe
          width="560"
          height="315"
          text-align="center"
          src={youtube}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <section className="music-platform">
        <iframe
          data-aos="fade-up"
          id="AmazonMusicEmbedB073LYYDZP"
          src={amazon}
          width="100%"
          height="290px"
          style={{
            border: "1px solid rgba(0, 0, 0, 0.12)",
            maxWidth: "500px",
          }}
        ></iframe>
        <iframe
          data-aos="fade-up"
          style={{ borderRadius: "12px" }}
          src={spotify}
          width="100%"
          height="380"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
        <iframe
          allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
          frameBorder="0"
          height="175"
          style={{
            width: "100%",
            maxWidth: "660px",
            overflow: "hidden",
            borderRadius: "10px",
          }}
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
          src={applemusic}
        ></iframe>
      </section>
      <section className="lyrics">
        <h3 data-aos="fade-up" className="shine">
          Lyrics
        </h3>
        <motion.div style={{ scale }}>
          <motion.div
            style={{
              scaleY: scrollYProgress,
            }}
          />
          <p data-aos="fade-up">{lyrics}</p>
        </motion.div>
      </section>
    </>
  );
}
