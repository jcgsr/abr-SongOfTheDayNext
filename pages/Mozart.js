import React from "react";

import Layout from "../components/Layout";
import { MozartComponent } from "../components/Artists/MozartComponent";
import { NextSeo } from "next-seo";

export default function Mozart() {
  return (
    <Layout>
      <NextSeo
        title="Mozart"
        canonical="https://songoftheday.vercel.app/Mozart"
        description="Mozart - Der Hölle Rache (Königin der Nacht)"
        openGraph={{
          url: "https://songoftheday.vercel.app/Mozart",
          title: "Mozart",
          description: "Mozart - Der Hölle Rache (Königin der Nacht)",
          images: [
            {
              url: "",
              width: 800,
              height: 420,
              alt: "Mozart",
            },
          ],
        }}
      />

      <div>
        <main className="content">
          {/*<div className="timespan">
            <p>from Sat, Jun 7, 2025 to</p>
            <p id="date">Sat, Jun 7, 2025</p>
          </div>*/}
          <MozartComponent />{" "}
          <div className="testimonial">
            <p>
              This song, performed by Diana Damrau, was simply unbelievable... a
              mother&apos;s curse has never been so beautiful... a Queen of the
              Night has never been so beautiful, so furious, so imposing...{" "}
            </p>
          </div>
        </main>
      </div>
    </Layout>
  );
}
