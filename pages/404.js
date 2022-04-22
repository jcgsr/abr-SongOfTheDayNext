import Link from "next/link";
import React from "react";

export default function h1() {
  return (
    <div id="error">
      <h2>404 - Essa página não existe...</h2>
      <p>
        Voltar para{" "}
        <Link href="/">
          <button className="btn">Home</button>
        </Link>
      </p>
    </div>
  );
}
