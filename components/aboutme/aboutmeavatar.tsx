'use client'
import { Avatar } from "@nextui-org/react";
interface AboutMeAvatarProps {
  src:string,
}

export default function AboutMeAvatar(props: AboutMeAvatarProps) {
  const { src } = props;
  return (
    <div>
       <Avatar isBordered color="default" radius="lg" src={src} className="w-72 h-72 text-large" />
    </div>
  )
}