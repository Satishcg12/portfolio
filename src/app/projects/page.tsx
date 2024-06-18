import AnimatedText from "@/components/AnimatedText";
import ProjectCard from "@/components/ProjectCard";

type Props = {};
// [
//   {
//     title: 'ZeroWaste: A record keeping app for waste management',
//     imageUrl: '/images/project1.jpeg',
//     techStack: [ 'Laravel', 'MySQL', 'TailwindCSS', 'Babel' ],
//     sourceUrl: 'https://github.com/Satishcg12/waste_management/settings'
//   }
// ]
type Project = {
  title: string;
  imageUrl: string;
  techStack: string[];
  demoUrl?: string;
  sourceUrl?: string;
};

const Projects = async (props: Props) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_CDN_URL}/projectList.json`
  );
  const project: Project[] = await data.json();

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

      <div className="relative scroll-smooth">
        {project.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            imageUrl={process.env.NEXT_PUBLIC_CDN_URL + project.imageUrl}
            techStack={project.techStack}
            demoUrl={project.demoUrl}
            sourceUrl={project.sourceUrl}
          />
        ))}
      </div>
    </main>
  );
};

export default Projects;
