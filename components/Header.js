import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header>
      <Link href="/">Song of the Day</Link>
      <Link href="#previous">Previous Songs</Link>
    </header>
  );
}
