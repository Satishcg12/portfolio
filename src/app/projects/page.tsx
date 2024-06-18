import AnimatedText from "@/components/AnimatedText";
import ProjectCard from "@/components/ProjectCard";

type Props = {};
type Project = {
  title: string;
  imageUrl: string;
  techStack: string[];
  demoUrl?: string;
  sourceUrl?: string;
};

const Projects = async (props: Props) => {
  let project: Project[] | string = [];

  try {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_CDN_URL}/projectList.json`
    );
    project = await data.json();
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    project = "Failed to fetch projects";
  }

  return (
    <main className="relative h-full px-4 snap-proximity">
      <div className=" h-1/3 flex flex-col items-center text-center justify-center gap-x-4">
        <p className="text-gray-500 dark:text-gray-400">
          <AnimatedText text="Browse_My_Recent" />
        </p>
        <h1 className="relative text-4xl font-bold  space-x-1">
          <AnimatedText text="Projects" />
        </h1>
      </div>

      <div className="relative scroll-smooth ">
        {typeof project === "string" ? (
          <div className="w-full text-center">{project}</div>
        ) : (
          project.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              imageUrl={process.env.NEXT_PUBLIC_CDN_URL + project.imageUrl}
              techStack={project.techStack}
              demoUrl={project.demoUrl}
              sourceUrl={project.sourceUrl}
            />
          ))
        )}
      </div>
    </main>
  );
};

export default Projects;
