"use client";

import { motion, HTMLMotionProps } from 'motion/react';
import { ReactNode } from 'react';

type AnimationProps = HTMLMotionProps<"div"> & {
    children: ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
    delayChildren?: number;
    staggerChildren?: number;
};

export const FadeIn = ({ children, delay = 0, duration = 0.5, className, ...props }: AnimationProps) => (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration, delay, ease: "easeOut" }}
        className={className}
        {...props}
    >
        {children}
    </motion.div>
);

export const SlideUp = ({ children, delay = 0, duration = 0.5, className, ...props }: AnimationProps) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={className}
        {...props}
    >
        {children}
    </motion.div>
);

export const SlideInRight = ({ children, delay = 0, duration = 0.5, className, ...props }: AnimationProps) => (
    <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={className}
        {...props}
    >
        {children}
    </motion.div>
);

export const StaggerContainer = ({ children, delayChildren = 0, staggerChildren = 0.1, className, ...props }: AnimationProps) => (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        variants={{
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: {
                    delayChildren,
                    staggerChildren
                }
            }
        }}
        className={className}
        {...props}
    >
        {children}
    </motion.div>
);

export const StaggerItem = ({ children, className, ...props }: AnimationProps) => (
    <motion.div
        variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }
            }
        }}
        className={className}
        {...props}
    >
        {children}
    </motion.div>
);
