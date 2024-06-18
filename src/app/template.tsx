"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
  };
  const transitionSpringPhysics = {
    type: "spring",
    stiffness: 200,
    damping: 15,
  };
  return (
    <motion.div
      variants={variants}
      initial={{ y: 20, opacity: 0}}
      animate={{ y: 0, opacity: 1 }}
      transition={transitionSpringPhysics}
      className="h-full w-full overflow-x-clip"
    >
      {children}
    </motion.div>
  );
}
