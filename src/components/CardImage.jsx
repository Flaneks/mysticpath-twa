import React from "react";

export default function CardImage({ number, reversed, ...props }) {
  const imgName = `${number}${reversed ? "_r" : ""}.jpg`;
  return (
    <img
      src={`/cards/${imgName}`}
      alt={`card-${number}${reversed ? "-r" : ""}`}
      className="w-16 h-24 object-contain rounded shadow"
      {...props}
    />
  );
}
