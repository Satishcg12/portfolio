"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
};

const mapRange = (
  value: number,
  low1: number,
  high1: number,
  low2: number,
  high2: number
) => {
  return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
};

const Button = (props: Props) => {
  const [xValue, setXValue] = useState(0);
  const [yValue, setYValue] = useState(0);

  return (
    <motion.button
      animate={{ 
        x: xValue, 
        y: yValue 
      }}
      transition={{ 
        type: "spring", 
        stiffness: 250, 
        damping: 10 
      }}
      onPointerMove={(e) => {
        const x = e.clientX;
        const y = e.clientY;
        const button = e.currentTarget;
        const buttonBox = button.getBoundingClientRect();
        const xInside = x - buttonBox.left;
        const yInside = y - buttonBox.top;
        setXValue(mapRange(xInside, 0, buttonBox.width, -10, 10));
        setYValue(mapRange(yInside, 0, buttonBox.height, -10, 10));
      }}
      onPointerLeave={() => {
        setXValue(0);
        setYValue(0);
      }}
      className="bg-blue-500 text-white px-4 py-2 rounded-3xl hover:bg-blue-600 shadow-md"
    >
      <span>{props.children}</span>
    </motion.button>
  );
};

export default Button;