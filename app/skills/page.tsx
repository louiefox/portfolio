"use client";
import { title } from "@/components/primitives";
import { Progress } from "@nextui-org/react";
import config from "@/app-config/skills.json"


export default function Skills() {
  return (
    <section className="flex flex-col items-center justify-center gap-8 py-8 md:py-10 mt-16 min-h-screen">
      <div className="inline-block max-w-xlg text-center justify-center">
        <h1 className={title({ size: "xlg", color: "foreground" })}>{config.heading}</h1>
      </div>
      <div className="max-w-lg">
        <h2 className="text-white text-center">
          {config.subheading}
        </h2>
        <div className="mt-12">
          {Object.values(config.info).map((item, index) => (
            <div key={index}>
              <h2 className="text-white text-xl mt-12">{item.heading}</h2>
              {Object.values(item.skills).map((skill, index) => (
                <Progress
                key={index}
                  label={skill.name}
                  size="sm"
                  value={skill.percentage}
                  maxValue={100}
                  color="primary"
                  formatOptions={{ style: "percent" }}
                  showValueLabel={true}
                  className="max-w-lg mt-8 text-white"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
