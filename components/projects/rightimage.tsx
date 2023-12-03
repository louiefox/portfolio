'use client';
import { Link } from "@nextui-org/react";
import CustomBtn from "../buttons/customButton";
import { useEffect, useRef, useState } from "react";
import InformationModal from "../modal/information";
import PictureModal from "../modal/picture";
import ProjectImage from "../images/projectimage";
import { CustomChip } from "@/components/cchip";
import { title } from "../primitives";

type ChipColor = "primary" | "secondary" | "success" | "warning" | "default" | "danger" | undefined;

interface Tag {
  name: string;
  colour: ChipColor;
}
interface Image {
  name: string;
  url: string;
}

interface PictureRightProps {
  name: string;
  description: string;
  githubLink: string;
  tags: { [key: string]: Tag };
  images: { [key: string]: Image };
}

export default function ProjectPictureRight(props: PictureRightProps) {
  const { name, description, githubLink, tags, images } = props;
  const [isReadMoreOpen, setReadMoreOpen] = useState(false);
  const [isPictureOpen, setPictureOpen] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  const checkOverflow = () => {
    if (textRef.current && textRef.current.scrollHeight > textRef.current.clientHeight) {
      setIsOverflowing(true);
    } else {
      setIsOverflowing(false);
    }
  };

  useEffect(() => {
    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, []);

  function setReadMoreModal(isOpen: boolean) {
    return () => setReadMoreOpen(isOpen);
  }

  function setPictureModal(isOpen: boolean) {
    return () => setPictureOpen(isOpen);
  }

  return (
    <>
      <InformationModal
        isOpen={isReadMoreOpen}
        setReadMoreModal={setReadMoreOpen}
        title={name}
        description={description}
      />
      <PictureModal
        title={name}
        images={images}
        isOpen={isPictureOpen}
        setPictureModal={setPictureOpen}
      />

      <div className="flex lg:flex-row flex-col gap-10 mt-20 md:mt-32 mx-5 lg:space-x-32">
        <div className="max-w-lg text-center md:text-left">
          <h1 className={title({ size: "sm", color: "foreground" })}>{name}</h1>
          <div className="flex flex-row gap-3 mt-4 justify-center md:justify-start">
            {Object.values(tags).map((tag, index) => (
              <CustomChip key={index} text={tag.name} color={tag.colour} />
            ))}
          </div>
          <p
            ref={textRef}
            className="text-white text-lg mt-4 mb-4"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 5,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >{description}
          </p>
          <div className="flex flex-row space-x-5 justify-center md:justify-start">
            {githubLink &&
              <Link isExternal href={githubLink}>
                <CustomBtn title="View Github" icon="Github" variant="bordered" />
              </Link>
            }


            {isOverflowing &&
              <CustomBtn
                title="Read More"
                icon="none"
                variant="solid"
                onClick={setReadMoreModal(true)}
              />
            }
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <ProjectImage
            width={550}
            src={images[0].url}
            alt="image"
            isZoomed={true}
            onClick={setPictureModal(true)}
          />
        </div>

      </div>
    </>
  );
}
