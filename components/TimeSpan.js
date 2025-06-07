import React from "react";

export default function TimeSpan() {
  const DATE_OPTIONS = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return (
    <div>
      {" "}
      <div className="timespan">
        <p>from Sat, Jun 7, 2025 to</p>
        <p id="date">{new Date().toLocaleDateString("en-US", DATE_OPTIONS)}</p>
      </div>
    </div>
  );
}
