import React from "react";

import Layout from "../components/Layout";
import GalCostaComponent from "../components/Artists/GalCostaComponent";
import { NextSeo } from "next-seo";

export default function GalCosta() {
  return (
    <Layout>
      <NextSeo
        title="Gal Costa"
        canonical="https://songoftheday.vercel.app/GalCosta"
        description="Gal Costa - Você não entende nada"
        openGraph={{
          url: "https://songoftheday.vercel.app/GalCosta",
          title: "Gal Costa",
          description: "Gal Costa - Você não entende nada",
          images: [
            {
              url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnCKok16YioEWSe3E1X7RsUtRil5rHzA3_Ow&usqp=CAU",
              width: 800,
              height: 420,
              alt: "Gal Costa",
            },
          ],
        }}
      />

      <div>
        <main className="content">
          {/*<div className="timespan">
            <p>from Sat, Dec 9, 2023 to</p>
            <p id="date">Sat, Dec 9, 2023</p>
          </div>*/}
          <GalCostaComponent />{" "}
          <div className="testimonial">
            <p>
              Completely captivated by Gal Costa&apos;s voice in this song, I
              can&apos;t stop listening to this song... it even made me start
              playing the guitar again just to learn this song. Fantastic
              singer! A small tribute to Gal, who has already left us... 🎵And I
              want you to come with me...🎵
            </p>
          </div>
        </main>
      </div>
    </Layout>
  );
}
