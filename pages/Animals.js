import React from "react";

import Layout from "../components/Layout";
import Animals from "../components/Artists/AnimalsComponent";
import { NextSeo } from "next-seo";

export default function AnimalsComponent() {
  return (
    <Layout>
      <NextSeo
        title="The Animals"
        canonical="https://songoftheday.vercel.app/Animals"
        description="Animals - It's my life"
        openGraph={{
          url: "https://songoftheday.vercel.app/Animals",
          title: "The Animals",
          description: "Animals - It's my life",
          images: [
            {
              url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnCKok16YioEWSe3E1X7RsUtRil5rHzA3_Ow&usqp=CAU",
              width: 800,
              height: 420,
              alt: "The Animals",
            },
          ],
        }}
      />

      <div>
        <main className="content">
          {/*<div className="timespan">
            <p>from Sat, Oct 12, 2024 to</p>
            <p id="date">Sat, Oct 12, 2024</p>
          </div>*/}
          <Animals />{" "}
          <div className="testimonial">
            <p>
              I recently discovered this song by The Animals and was completely
              blown away. What a song: Eric Burdon&apos;s voice, Chas
              Chandler&apos;s bass... the melody. Amazing! Ladies and gentlemen:
              The Animals!
            </p>
          </div>
        </main>
      </div>
    </Layout>
  );
}
