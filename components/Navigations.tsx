import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const itemIds = [0, 1, 2, 3, 4];

export const Navigation = () => (
  <motion.ul className=" bg-yellow-700  p-6" variants={variants}>
    {itemIds.map(i => (
      <MenuItem i={i} key={i} />
    ))}
  </motion.ul>
);
