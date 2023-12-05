import config from "@/app-config/projects.json";
import { title } from "@/components/primitives";
import ProjectPictureLeft from "@/components/projects/leftimage";
import ProjectPictureRight from "@/components/projects/rightimage";


export default function Projects() {

  return (
    <section className="flex flex-col items-center justify-center gap-8 py-8 md:py-10 sm:px-10 mt-16">
      <div className="inline-block max-w-xlg text-center justify-center">
        <h1 className={title({ size: "xlg", color: "foreground" })}>{config.heading}</h1>
      </div>
      {Object.values(config.projects).map((project, index) => {// Add this line to check the format of tags
        if (index % 2 === 0) {
          return (
            //@ts-ignore
            <ProjectPictureRight key={index} name={project.name} description={project.description} githubLink={project.github} tags={project.tags} images={project.image} />
          );
        } else {
          return (
            //@ts-ignore
            <ProjectPictureLeft key={index} name={project.name} description={project.description} githubLink={project.github} tags={project.tags} images={project.image} />
          );
        }
      })}
    </section>
  );
}
