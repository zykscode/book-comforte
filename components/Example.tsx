'use client';

import React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useDimensions } from "@/hooks/use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigations";
import { useMenu } from "@/contexts/MenuContext";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 50% 50%)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(40px at 50% 50%)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

export const Example = () => {
  const { isOpen, toggleOpen } = useMenu();
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      className="flex bg-yellow-900 h-80"
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div className="absolute  opacity-100 bg-yellow-400 top-0 right-0 bottom-0 w-72 h-full" variants={sidebar} />
    
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
