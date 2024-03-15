"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion"
import { forwardRef, useEffect, useState } from "react";

export interface CarouselProps {
    className?: string;
    children?: React.ReactNode;
    images?: string[];
}

const imageVariants = {
    enter: (direction: number) => {
        return {
            x: direction > 0 ? "100%" : "-100%",
            opacity: 0,
        };
    },
    center: {
        x: "0%",
        opacity: 1,
    },
    exit: (direction: number) => {
        return {
            x: direction > 0 ? "-100%" : "100%",
            opacity: 0,
        };
    },
};

const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
    (
        {
            className,
            children,
            images = [],
            ...rest
        },
        ref
    ) => {
        const [index, setIndex] = useState(0)
        const [direction, setDirection] = useState(0)

        useEffect(() => {
            const interval = setInterval(() => {
                setIndex(
                    (prevIndex) => (prevIndex + 1) % images.length,
                );
            }, 5000);

            return () => clearInterval(interval);
        }, [images]);

        return (
            <AnimatePresence initial={true} custom={direction}>
                <motion.img
                    key={index}
                    className="absolute inset-0 object-cover w-screen h-full bg-no-repeat bg-center -z-10"
                    src={images[index]}
                    custom={direction}
                    variants={imageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ ease: "easeInOut", duration: 1 }}
                    onAnimationComplete={() => setDirection(0)}
                />
                <section ref={ref as React.RefObject<HTMLDivElement>} className={className} {...rest}>
                    {children}
                </section>

            </AnimatePresence>
        );
    });

Carousel.displayName = "Pomaray.Carousel";

export default Carousel;
