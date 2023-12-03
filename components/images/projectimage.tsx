"use client";
import { Image } from "@nextui-org/react";

interface ImageProps {
  isZoomed: boolean;
  width: number;
  alt: string;
  src: string;

  onClick?: () => void;
}

export default function ProjectImage(props: ImageProps) {
  return (
    <Image
      isZoomed={props.isZoomed}
      width={props.width}
      alt={props.alt}
      src={props.src}
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
    />
  );
}
