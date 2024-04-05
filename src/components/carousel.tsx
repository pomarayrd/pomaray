"use client";

import type { PomarayComponent } from "@/components/types";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface CarouselProps extends PomarayComponent {
	imagesSrc: Array<string>;
}

function Carousel({ children, className, imagesSrc }: CarouselProps) {
	const [backgroundIndex, setBackgroundIndex] = useState(0);
	const [direction, setDirection] = useState(0);
	const [firstRender, setFirstRender] = useState(true); // Variable de estado para rastrear la primera vez que se muestra la imagen

	useEffect(() => {
		const interval = setInterval(() => {
			setBackgroundIndex((prevIndex) => (prevIndex + 1) % imagesSrc.length);
			setFirstRender(false); // Después de la primera aparición, establecer firstRender en falso
		}, 5000);

		return () => clearInterval(interval);
	}, [imagesSrc]);

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

	return (
		<section
			className={cn(
				"relative grid place-content-center max-w-screen min-h-[100vh] p-10 bg-primary/45 !overflow-x-hidden",
				className,
			)}
		>
			{imagesSrc.length > 0 && (
				<AnimatePresence initial={true} custom={direction}>
					<motion.img
						aria-label="Imagen de campus del Politécnico."
						key={backgroundIndex}
						className="absolute inset-0 object-cover w-screen h-full bg-no-repeat bg-center -z-10"
						src={imagesSrc[backgroundIndex]}
						custom={direction}
						variants={imageVariants}
						initial={
							firstRender ? (direction > 0 ? "enter" : "center") : "enter"
						} // Si es la primera vez, use la dirección proporcionada, de lo contrario, use "enter"
						animate="center"
						exit="exit"
						transition={{ ease: "easeInOut", duration: 1 }}
						onAnimationComplete={() => setDirection(0)}
					/>
				</AnimatePresence>
			)}
			{children}
		</section>
	);
}

export default Carousel;
