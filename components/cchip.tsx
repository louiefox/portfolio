"use client";
import { Chip } from "@nextui-org/react";

interface ChipProps {
  text: string;
  color: "primary" | "secondary" | "success" | "warning" | "default" | "danger" | undefined;
}

export function CustomChip(props: ChipProps) {
  return <Chip color={props.color}>{props.text}</Chip>;
}
