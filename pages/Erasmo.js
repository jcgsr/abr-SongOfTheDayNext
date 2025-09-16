import React from "react";

import Layout from "../components/Layout";
import ErasmoComponent from "../components/Artists/ErasmoComponent";
import { NextSeo } from "next-seo";

export default function Erasmo() {
  return (
    <Layout>
      <NextSeo
        title="Erasmo Carlos"
        canonical="https://songoftheday.vercel.app/Erasmo"
        description="Filho Único"
        openGraph={{
          url: "https://songoftheday.vercel.app/Erasmo",
          title: "Erasmo Carlos",
          description: "Filho Único",
          images: [
            {
              url: "",
              width: 800,
              height: 420,
              alt: "Erasmo",
            },
          ],
        }}
      />

      <div>
        <main className="content">
          {/*<div className="timespan">
            <p>from Tue, Sep 16, 2025 to</p>
            <p id="date">Tue, Sep 16, 2025</p>
          </div>*/}
          <ErasmoComponent />{" "}
          <div className="testimonial">
            <p>
              This song is ruthless... relentless, merciless... remarkable
              melody of pure rock&apos;n&apos;roll! Long live Erasmo!
            </p>
          </div>
        </main>
      </div>
    </Layout>
  );
}
