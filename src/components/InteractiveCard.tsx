"use client";

import Image from "next/image";
import { ReactNode, SyntheticEvent } from "react";

interface Props {
  children?: ReactNode;
}

export default function InteractiveCard({ children }: Props) {
  return (
    <div
      className="w-64 h-full min-h-fit bg-white shadow-lg rounded-lg p-4 transition-all duration-300 ease-in-out transform hover:scale-105"
      onMouseOver={onCardMouseAction}
      onMouseOut={onCardMouseAction}
    >
      {children}
    </div>
  );
}

function onCardMouseAction(event: SyntheticEvent) {
  const currentTarget = event.currentTarget as HTMLElement;

  if (event.type === "mouseover") {
    currentTarget.classList.remove("shadow-lg", "bg-white");
    currentTarget.classList.add("shadow-2xl", "bg-neutral-200");
  } else {
    currentTarget.classList.remove("shadow-2xl", "bg-neutral-200");
    currentTarget.classList.add("shadow-lg", "bg-white");
  }
}
