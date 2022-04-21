import Header from "../components/Header";
import Explain from "../components/Explain";
// import Comments from "../components/Comments";
import Social from "../components/Social";
import Footer from "../components/Footer";
import Artist from "../components/Artist";
import NinaSimone from "../components/NinaSimone";

// import "animate.css";
export default function Home() {
  return (
    <body>
      <Header />
      <main>
        <div className="hero">
          <span id="google_translate_element"></span>
          <h1 className="shine">Song of the Day</h1>
        </div>
        <p id="credits">
          Foto de Elijah O'Donnell no
          <a href="https://www.pexels.com/pt-br/foto/envelhecido-curtido-maturado-antiguidade-8038906/">
            Pexels
          </a>
        </p>
        <NinaSimone />
      </main>
      <Explain />
      {/* <Comments /> */}
      <Social />
      <Footer />
    </body>
  );
}
