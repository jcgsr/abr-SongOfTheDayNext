import React from "react";
import Layout from "../components/Layout";
import NinaSimone from "../components/NinaSimone";
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
          <NinaSimone />
        </main>
      </div>
    </Layout>
  );
}
