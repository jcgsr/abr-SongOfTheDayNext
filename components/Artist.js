import React from "react";

export default function Artist(props) {
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
      <a href={props.site} target="__blank">
        <h1 className="singer">{props.name}</h1>
      </a>
      <h4 className="ml6">
        <span className="text-wrapper">
          <span className="letters">{props.song}</span>
        </span>
      </h4>
      <div className="video ">
        <iframe
          width="560"
          height="315"
          text-align="center"
          src={props.youtube}
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
          src={props.amazon}
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
          src={props.spotify}
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
        <p data-aos="fade-up">{props.lyrics}</p>
      </section>
    </>
  );
}
