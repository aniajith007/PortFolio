import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

// Left Reveal for sideElements

export const RevealLeft = ({ children,delay,duration }) => {
  const ref = useRef(null); //to get a div ref for check div is in-view or not
  const isInview = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInview) {
      console.log("the div is in view...");
      // Fire the animation when the div is in-view
      mainControls.start("visible");      
    }
  }, [isInview]);
  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -75 },
          visible: { opacity: 1, x: 0 },
        }} //define
        initial={"hidden"}
        animate={mainControls} // true when the div is in-view
        transition={{ duration: duration, delay: delay }}
      >
        {children}
      </motion.div>      
    </div>
  );
};
