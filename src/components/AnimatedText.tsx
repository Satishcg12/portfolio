"use client"

import { motion } from "framer-motion";

type Props = {
  text: string;
  duration?: number;
};

const AnimatedText = ({ text = "", duration =0.5 }: Props) => {
  const textArray = text.split(""); // Convert duration to milliseconds

  return (
    <>
      {textArray.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: duration, // 0.5 seconds
            delay: (i* duration) / textArray.length ,
          }}
          key={i}
          className=" "
        >
          {el === "_" ? " " : el}
        </motion.span>
      ))}
    </>
  );
};

export default AnimatedText;
