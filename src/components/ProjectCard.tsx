"use client";

import { useInView, useScroll, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Props = {
  title: string;
  imageUrl: string;
  techStack: string[];
  demoUrl?: string;
  sourceUrl?: string;
};

const ProjectCard = ({
  title,
  imageUrl,
  techStack,
  demoUrl,
  sourceUrl,
}: Props) => {
  const verticalMargin = 5; // in vh
  const container = useRef<HTMLDivElement>(null);
  const [maxScrollY, setMaxScrollY] = useState(Infinity);
  const [dynamicStyles, setDynamicStyles] = useState({
    scale: 1,
    filter: "blur(0px)",
  });
  const { scrollY } = useScroll({
    target: container,
  });
  const isInView = useInView(container, {
    margin: `0px 0px -${100 - verticalMargin * 2}% 0px`,
    once: true,
  });
  scrollY.on("change", (v) => {
    let animationValue = 1;
    if (v > maxScrollY) {
      animationValue = Math.max(0, 1 - (v - maxScrollY) / 1000);
    }
    setDynamicStyles({
      scale: animationValue,
      filter: `blur(${(1 - animationValue) * 10}px)`,
    });
  });
  useEffect(() => {
    if (isInView) {
      setMaxScrollY(scrollY.get());
    }
  }, [isInView]);
  return (
    <div
      ref={container}
      className="shadow-lg  border dark:border-gray-700 sticky h-[80vh] w-full  bg-neutral-200/70 dark:bg-gray-800 
       backdrop-blur rounded-xl overflow-hidden flex flex-col gap-4 p-4"
      style={{
        top: `${verticalMargin}vh`,
        height: ` ${100 - verticalMargin * 2}vh)`,
        marginBottom: `${verticalMargin * 2}vh`,
        scale: dynamicStyles.scale,
        filter: dynamicStyles.filter,
      }}
    >
      <div className="relative h-full w-full rounded-lg overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          loading="lazy"
          fill
          className="object-cover object-top hover:object-bottom transition-all hover:duration-[4s]"
          sizes="90vw"
        />
      </div>
      <div>
        <h2 className="text-lg font-bold line-clamp-2">{title}</h2>
        <ul className="flex gap-2 overflow-x-scroll"
          style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none"}}
        >
        {techStack.map((tech) => (
            <li
              key={tech}
              className="text-sm font-light bg-white  p-2 rounded-lg dark:bg-gray-700"
            >
              {tech}
            </li>
          ))}
        </ul>
        <div className="flex gap-2 justify-end pt-2">
          {demoUrl && (
            <motion.a
              whileTap={{ scale: 0.9, backgroundColor: "#f3f4f6"}}
              whileHover={{ scale: 1.1 }}
              transition={{type: "spring", stiffness: 300, damping: 30}}
              href={demoUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-light bg-white p-2 rounded-lg dark:bg-gray-700"
            >
              Demo
            </motion.a>
          )}
          {sourceUrl && (
            <motion.a
              whileTap={{ scale: 0.9, backgroundColor: "#f3f4f6"}}
              whileHover={{ scale: 1.1 }}
              transition={{type: "spring", stiffness: 300, damping: 30}}
              href={sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-light bg-white p-2 rounded-lg dark:bg-gray-700 ring ring-gray-300 dark:ring-blue-600"
            >
              Source
            </motion.a>
          )}
          </div>
      </div>
    </div>
  );
};

export default ProjectCard;
