'use client';

import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

export const OnTrigger = ({children}:{children:React.ReactNode}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: '-100px', // adjust as needed
    once: true,       // animate only once
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
 {children}
    </motion.div>
  );
};
