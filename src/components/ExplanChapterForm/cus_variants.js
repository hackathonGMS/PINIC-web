import { Box, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const MotionBox = motion(Box);
export const MotionButton = motion(Button);

export const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3
      }
    }
  };
  
export const item = {
   hidden: { y: 20, opacity: 0 },
   visible: {
     y: 0,
     opacity: 1
   }
};
  