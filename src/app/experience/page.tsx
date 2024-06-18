import AnimatedText from "@/components/AnimatedText";

type Tech = {
  name: string;
  expLevel: "Beginner" | "Intermediate" | "Experienced" | "Expert";
};

type ExperienceData = {
  title: string;
  techs: Tech[];
};

const Experience = async () => {
  let experience: ExperienceData[] | string = [];
  try {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_CDN_URL}/experience.json`
    );
    experience = await data.json();
  } catch (error) {
    console.error("Failed to fetch experience:", error);
    experience = "Failed to fetch experience";
  }
  return (
    <main className="flex flex-col items-center text-base px-4 h-full">
      <div className="text-center mb-8 h-1/4 grid place-content-center">
        <p className="text-gray-500 dark:text-gray-400">
          <AnimatedText text="Explore_My" />
        </p>
        <h1 className="text-4xl font-bold space-x-1">
          <AnimatedText text="Experience" />
        </h1>
      </div>
      <div className=" grid sm:grid-cols-2 gap-4">
        {typeof experience === "string" ? (
          <div className="w-full text-center">{experience}</div>
        ) : (
          experience.map((exp) => (
            <div
              key={exp.title}
              className="border-2 border-gray-500 rounded-3xl p-8 flex flex-col gap-4 mb-4"
            >
              <h2 className="text-2xl font-bold">{exp.title}</h2>
              <ul className=" grid lg:grid-cols-2 gap-4 ">
                {exp.techs.map((tech) => (
                  <li key={tech.name} className="flex items-center gap-2">
                    <svg
                      className=" min-w-6 max-w-min aspect-square  inline-block mr-2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M21.6,9.84A4.57,4.57,0,0,1,21.18,9,4,4,0,0,1,21,8.07a4.21,4.21,0,0,0-.64-2.16,4.25,4.25,0,0,0-1.87-1.28,4.77,4.77,0,0,1-.85-.43A5.11,5.11,0,0,1,17,3.54a4.2,4.2,0,0,0-1.8-1.4A4.22,4.22,0,0,0,13,2.21a4.24,4.24,0,0,1-1.94,0,4.22,4.22,0,0,0-2.24-.07A4.2,4.2,0,0,0,7,3.54a5.11,5.11,0,0,1-.66.66,4.77,4.77,0,0,1-.85.43A4.25,4.25,0,0,0,3.61,5.91,4.21,4.21,0,0,0,3,8.07,4,4,0,0,1,2.82,9a4.57,4.57,0,0,1-.42.82A4.3,4.3,0,0,0,1.63,12a4.3,4.3,0,0,0,.77,2.16,4,4,0,0,1,.42.82,4.11,4.11,0,0,1,.15.95,4.19,4.19,0,0,0,.64,2.16,4.25,4.25,0,0,0,1.87,1.28,4.77,4.77,0,0,1,.85.43,5.11,5.11,0,0,1,.66.66,4.12,4.12,0,0,0,1.8,1.4,3,3,0,0,0,.87.13A6.66,6.66,0,0,0,11,21.81a4,4,0,0,1,1.94,0,4.33,4.33,0,0,0,2.24.06,4.12,4.12,0,0,0,1.8-1.4,5.11,5.11,0,0,1,.66-.66,4.77,4.77,0,0,1,.85-.43,4.25,4.25,0,0,0,1.87-1.28A4.19,4.19,0,0,0,21,15.94a4.11,4.11,0,0,1,.15-.95,4.57,4.57,0,0,1,.42-.82A4.3,4.3,0,0,0,22.37,12,4.3,4.3,0,0,0,21.6,9.84Zm-4.89.87-5,5a1,1,0,0,1-1.42,0l-3-3a1,1,0,1,1,1.42-1.42L11,13.59l4.29-4.3a1,1,0,0,1,1.42,1.42Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <div className="flex flex-col">
                      <span className="truncate font-semibold">
                        {tech.name}
                      </span>
                      <span>{tech.expLevel}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>
    </main>
  );
};

export default Experience;
