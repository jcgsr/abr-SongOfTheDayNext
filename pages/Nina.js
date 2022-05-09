import React from "react";
import Layout from "../components/Layout";
import NinaSimone from "../components/Artists/NinaSimone";
import { NextSeo } from "next-seo";

export default function Nina() {
  return (
    <Layout>
      <NextSeo
        title="Nina Simone"
        canonical="https://songoftheday.vercel.app/Nina"
        description="Nina Simone - I Wish I Knew How It Would Feel To Be Free"
        openGraph={{
          url: "https://songoftheday.vercel.app/Nina",
          title: "Nina Simone",
          description:
            "Nina Simone - I Wish I Knew How It Would Feel To Be Free",
          images: [
            {
              url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtFH4__r7_Q1lV9NNIaxGlObLNbrPLM_5Z7w&usqp=CAU",
              width: 800,
              height: 420,
              alt: "Nina Simone",
            },
          ],
        }}
      />

      <div>
        <main className="content">
          <div className="timespan">
            <p>from Fri, Apr 15, 2022 to</p>
            <p id="date">Fri, Apr 29, 2022</p>
          </div>
          <NinaSimone />
          <div className="testimonial">
            <p>
              Listening to this song is like feeling the pain, the anger, the
              longing to be free. Whenever I hear Nina's voice singing this song
              is like a flood of bitterness that she may have had to experience
              for whatever goddamned reasons. In fact, the reason I created this
              site was to, say, pay an homage to her.
            </p>
          </div>
        </main>
      </div>
    </Layout>
  );
}
