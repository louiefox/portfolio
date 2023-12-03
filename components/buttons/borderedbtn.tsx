"use client";

import { Button, Link } from "@nextui-org/react";

interface BorderedBtnProps {
  title: string;
  link: string;
}

export default function BorderedBtn(props: BorderedBtnProps) {
  return (
    <Link
    href={props.link}
    >
      <Button color="primary" variant="bordered">
        {props.title}
      </Button>
    </Link>
  );
}
