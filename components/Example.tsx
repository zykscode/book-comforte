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
      className="rounded-full flex justify-center items-center size-12 md:size-16 bg-yellow-900"
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
   
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
