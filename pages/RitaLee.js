import React from "react";

import Layout from "../components/Layout";
import RitaLeeComponent from "../components/Artists/RitaLeeComponent";
import { NextSeo } from "next-seo";

export default function RitaLee() {
  return (
    <Layout>
      <NextSeo
        title="Rita Lee"
        canonical="https://songoftheday.vercel.app/RitaLee"
        description="Rita Lee - Cartão Postal"
        openGraph={{
          url: "https://songoftheday.vercel.app/RitaLee",
          title: "Rita Lee",
          description: "Rita Lee - Cartão Postal",
          images: [
            {
              url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F4%2F40%2FRita_Lee_in_Aracatuba-02%252C_by_Marco_Senche.jpg&tbnid=3nSbVsrrqeMnKM&vet=12ahUKEwiWvZjJk53_AhUlCdQKHRYuDRAQMygBegQIARBq..i&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ARita_Lee_in_Aracatuba-02%2C_by_Marco_Senche.jpg&docid=cqEXtx5ir-DVlM&w=1920&h=1080&q=rita%20lee&hl=pt-BR&ved=2ahUKEwiWvZjJk53_AhUlCdQKHRYuDRAQMygBegQIARBq",
              width: 800,
              height: 420,
              alt: "Rita Lee",
            },
          ],
        }}
      />

      <div>
        <main className="content">
          <div className="timespan">
            <p>from Mon, May 30, 2023 to</p>
            <p id="date">Sat, Dec 9, 2023</p>
          </div>
          <RitaLeeComponent />{" "}
          <div className="testimonial">
            <p>
              A small tribute to our queen of Brazilian rock, Rita Lee. Despite
              the fact that the lyrics are supposedly about the ending of
              relationship between couples, I couldn&apos;t help but think about
              her death, my parents&apos; and my sister&apos;s death... after
              all, a parting is a parting...
            </p>
          </div>
        </main>
      </div>
    </Layout>
  );
}
