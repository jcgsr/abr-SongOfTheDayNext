import React from "react";

import { motion, useViewportScroll, useTransform } from "framer-motion";

export default function Artist(props) {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 0.9], [0.2, 1]);
  const { site, name, song, youtube, amazon, spotify, lyrics } = props;
  const DATE_OPTIONS = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return (
    <>
      <div className="timespan">
        <p>from Fri, Apr 15, 2022 to</p>
        <p id="date">{new Date().toLocaleDateString("en-US", DATE_OPTIONS)}</p>
      </div>
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
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
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
          frameborder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
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