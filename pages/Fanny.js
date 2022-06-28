import React from "react";

import Layout from "../components/Layout";
import FannyComponent from "../components/Artists/FannyComponent";
import { NextSeo } from "next-seo";

export default function Fanny() {
  return (
    <Layout>
      <NextSeo
        title="Fanny"
        canonical="https://songoftheday.vercel.app/Fanny"
        description="Fanny - Charity Ball"
        openGraph={{
          url: "https://songoftheday.vercel.app/Fanny",
          title: "Fanny",
          description: "Fanny - Charity Ball",
          images: [
            {
              url:
                "https://upload.wikimedia.org/wikipedia/en/c/c5/FannyHillv2.jpg",
              width: 800,
              height: 420,
              alt: "Fanny",
            },
          ],
        }}
      />

      <div>
        <main className="content">
          {/* <div className="timespan">
            <p>from Tue, Jun 28, 2022 to</p>
            <p id="date">Tue, Jun 28, 2022</p>
          </div>*/}
          <FannyComponent />{" "}
          <div className="testimonial">
            <p>
              Listening to this song is feeling all the power of
              Rock&apos;n&apos;Roll in some wonderful voices. The rhythm is
              totally awsome! I can&apos;t stop dancing while listening to this
              song :) The riff is catchy as hell! A geniune perl this song!
            </p>
          </div>
        </main>
      </div>
    </Layout>
  );
}
