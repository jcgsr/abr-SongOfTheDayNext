import React from "react";

import Layout from "../components/Layout";
import BioshockComponent from "../components/Artists/BioshockComponent";
import { NextSeo } from "next-seo";

export default function Bioshock() {
  return (
    <Layout>
      <NextSeo
        title="Bioshock Infinite"
        canonical="https://songoftheday.vercel.app/Bioshock"
        description="BioShock Infinite - Will the Circle be Unbroken"
        openGraph={{
          url: "https://songoftheday.vercel.app/Bioshock",
          title: "Bioshock Infinite",
          description: "Bioshock Infinite - Will the Circle be Unbroken",
          images: [
            {
              url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoh4qn2QuXjAfwLO1eyYFBDOH6iy2oTOoXhA&usqp=CAU",
              width: 800,
              height: 420,
              alt: "Bioshock Infinite",
            },
          ],
        }}
      />

      <div>
        <main className="content">
          {/* <div className="timespan">
            <p>from Fri, Apr 15, 2022 to</p>
            <p id="date">Fri, Apr 29, 2022</p>
          </div> */}
          <BioshockComponent />
        </main>
      </div>
    </Layout>
  );
}
