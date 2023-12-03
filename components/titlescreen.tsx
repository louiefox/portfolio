"use client";
import { useState } from "react";
import { title } from "./primitives";
import {
  faYoutube,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Projects from "@/app/projects/page";
import NaviBtn from "./buttons/navibtn";
import Skills from "@/app/skills/page";
import AboutMe from "@/app/aboutme/page";
import config from "@/app-config/main.json";
import Careers from "@/app/careers/page";
import Link from "next/link";

export default function TitleScreen() {

  const [activeTab, setActiveTab] = useState("Home");

  function clickAboutMe() {
    if (activeTab === "AboutMe") {
      setActiveTab("Home");
    } else {
      setActiveTab("AboutMe");
    }
  }

  function clickProjects() {
    if (activeTab === "Projects") {
      setActiveTab("Home");
    } else {
      setActiveTab("Projects");
    }
  }

  function clickCareer() {
    if (activeTab === "Career") {
      setActiveTab("Home");
    } else {
      setActiveTab("Career");
    }
  }

  function clickSkills() {
    if (activeTab === "Skills") {
      setActiveTab("Home");
    } else {
      setActiveTab("Skills");
    }
  }
  return (
    <section className="flex flex-col items-center justify-center gap-8 py-8 md:py-10 mt-48">
      <div className="inline-block max-w-xlg text-center justify-center">
        <h1 className={title({ size: "xxlg", color: "yellow" })}>{"{"} </h1>
        <h1 className={title({ size: "xxlg", color: "foreground" })}>Louie&nbsp;</h1>
        <h1 className={title({ size: "xxlg", color: "blue" })}>
          Waterfall&nbsp;
        </h1>
        <h1 className={title({ size: "xxlg", color: "yellow" })}>{"}"}</h1>
      </div>
      <div className="flex gap-6 mt-2">
        <Link href={"mailto:" + config.links.email}>
          <FontAwesomeIcon
            icon={faEnvelope}
            color="white"
            size="2xl"
            className="hover:animate-bounce"
          />
        </Link>
        <Link href={config.links.youtube}>
          <FontAwesomeIcon
            icon={faYoutube}
            color="white"
            size="2xl"
            className="hover:animate-bounce"
          />
        </Link>
        <Link href={config.links.github}>
          <FontAwesomeIcon
            icon={faGithub}
            color="white"
            size="2xl"
            className="hover:animate-bounce"
          />
        </Link>
        <Link href={config.links.linkedin}>
          <FontAwesomeIcon
            icon={faLinkedin}
            color="white"
            size="2xl"
            className="hover:animate-bounce"
          />
        </Link>
      </div>

      <div className="flex gap-6 mt-2">
        <NaviBtn
          title="About Me"
          icon="none"
          variant={activeTab === "AboutMe" ? "solid" : "bordered"}
          onClick={clickAboutMe}
        />
        <NaviBtn
          title="Projects"
          icon="none"
          variant={activeTab === "Projects" ? "solid" : "bordered"}
          onClick={clickProjects}
        />
        <NaviBtn
          title="Careers"
          icon="none"
          variant={activeTab === "Career" ? "solid" : "bordered"}
          onClick={clickCareer}
        />
        <NaviBtn
          title="Skills"
          icon="none"
          variant={activeTab === "Skills" ? "solid" : "bordered"}
          onClick={clickSkills}
        />
      </div>



      {(() => {
        switch (activeTab) {
          case "Home":
            return null;
          case "AboutMe":
            return <AboutMe />;
          case "Projects":
            return <Projects />;
          case "Career":
            return <Careers/>;
          case "Skills":
            return <Skills />;
          default:
            return null;
        }
      })()}

    </section>
  );
}
