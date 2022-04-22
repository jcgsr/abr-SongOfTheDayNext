import Link from "next/link";
import React from "react";

export default function Previous(props) {
  const { artist, song, page } = props;
  return (
    <>
      <Link href={page}>
        <article className="previous-song">
          <h3>{artist}</h3>
          <h4>{song}</h4>
        </article>
      </Link>
    </>
  );
}
