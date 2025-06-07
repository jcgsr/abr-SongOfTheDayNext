import React from "react";

import { BsTwitter, BsWhatsapp, BsTelegram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function Social() {
  return (
    <section className="social">
      <p>Or you can contact me through:</p>
      <div data-aos="fade-up" className="social-box">
        <a
          href="https://twitter.com/teufel8?ref_src=twsrc%5Etfw"
          target="__blank"
        >
          <i>
            <BsTwitter />
          </i>
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5579988284730&text=Hey! I'd like to talk to you about Song of the Day"
          target="__blank"
        >
          <i>
            <BsWhatsapp />
          </i>
        </a>
        <a href="https://telegram.me/jcgsr" target="__blank">
          <i>
            <BsTelegram />
          </i>
        </a>
        <a href="mailto:cabralguerra@gmail.com" target="__blank">
          <i>
            <MdEmail />
          </i>
        </a>
      </div>
    </section>
  );
}
