import React from "react";

import Layout from "../components/Layout";
import GratefulDeadComponent from "../components/Artists/GratefulDeadComponent";
import { NextSeo } from "next-seo";

export default function GratefulDead() {
  return (
    <Layout>
      <NextSeo
        title="Grateful Dead"
        canonical="https://songoftheday.vercel.app/GratefulDead"
        description="Grateful Dead - Ripple"
        openGraph={{
          url: "https://songoftheday.vercel.app/GratefulDead",
          title: "GratefulDead",
          description: "Grateful Dead - Ripple",
          images: [
            {
              url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoh4qn2QuXjAfwLO1eyYFBDOH6iy2oTOoXhA&usqp=CAU",
              width: 800,
              height: 420,
              alt: "GratefulDead Infinite",
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
          <GratefulDeadComponent />{" "}
          <div className="testimonial">
            <p>
              Listening to this song is all about crying and crying and
              crying... remembering my sister, my father... The last verse
              &quot;If I knew the way I would take you home&quot; is so painful
              beyond words... and today (May 13) is my father&apos;s birthday...
              O man... How much I miss him!{" "}
            </p>
          </div>
        </main>
      </div>
    </Layout>
  );
}
