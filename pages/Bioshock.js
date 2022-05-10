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
          <BioshockComponent />{" "}
          <div className="testimonial">
            <p>
              Listening to this song is excruciating because this is what I have
              been going through since my mother passed away in 2013. &quot;One
              by one their seats were emptied...&quot; O, boy... My mother
              (February 2013), my father (June 2020), my sister (December 2020),
              and my grandmother (April 2022), only to mention the most recent
              one... if you go back just a little... O, boy... And then I keep
              asking myself: &quot;Will it be complete one day? Will the circle
              be unbroken...&quot;. It&apos;s almost unbearable sometimes.
            </p>
          </div>
        </main>
      </div>
    </Layout>
  );
}
