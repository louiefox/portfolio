'use client';
import config from "@/app-config/aboutme.json";
import { title } from "@/components/primitives";
import CustomBtn from "@/components/buttons/customButton";
import AboutMeAvatar from "@/components/aboutme/aboutmeavatar";
import InformationModal from "@/components/modal/information";
import { useEffect, useRef, useState } from "react";


export default function AboutMe() {
  const [isReadMoreOpen, setReadMoreOpen] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, []);

  const checkOverflow = () => {
    if (textRef.current && textRef.current.scrollHeight > textRef.current.clientHeight) {
      setIsOverflowing(true);
    } else {
      setIsOverflowing(false);
    }
  };

  function setReadMoreModal(isOpen: boolean) {
    return () => setReadMoreOpen(isOpen);
  }

  return (
    <section className="flex flex-col items-center justify-center gap-8 py-8 md:py-10 mt-16">
      <div className="inline-block max-w-xlg text-center justify-center">
        <h1 className={title({ size: "xlg", color: "foreground" })}>{config.heading}</h1>
      </div>

      <InformationModal
        isOpen={isReadMoreOpen}
        setReadMoreModal={setReadMoreOpen}
        title={config.heading}
        description={config.about_me_description}
      />

      <div className="flex lg:flex-row flex-col gap-10 mt-32 md:space-x-20 lg:space-x-32 xl:px-60 lg:px-50 px-10 ">
        <div className="flex flex-col lg:w-2/5 items-center justify-center">
          <AboutMeAvatar src={config.profile_image_src} />
        </div>
        <div>
          <p
            ref={textRef}
            className="text-white text-lg mt-4 mb-4"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: config.description_line_clamp,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
          {config.about_me_description}
          </p>
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

      <div>
        <h1 className="text-white text-4xl mt-10 text-center font-semibold">Education</h1>
        <div className="grid grid-cols-1 gap-20 md:grid-cols-3 md:gap-40 mt-10 xl:px-60 lg:px-50 px-10 ">
          {Object.values(config.education).map((education,index) => {
            return (
              
              <div key={index}  className="flex flex-col w-full text-center">
                <h1 className="text-white text-xl font-semibold">{education.institution}</h1>
                <h1 className="text-white text-md">{education.start_date + " - " + education.end_date}</h1>
                <h1 className="text-white text-lg mt-5 font-semibold">{education.course}</h1>
                {Object.values(education.subjects).map((subject, index) => {
                  return (<h1 key={index} className="text-white text-md">{subject}</h1>);
                })}
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
