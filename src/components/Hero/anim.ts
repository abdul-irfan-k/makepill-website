import { Variants } from "framer-motion";

export const slideUp: Variants = {
  initial: {
    translateY: "100%",
    opacity: 0,
  },
  active(i) {
    return { translateY: "0%", opacity: 1, transition: {ease:"easeOut", delay: i } };
  },
};
