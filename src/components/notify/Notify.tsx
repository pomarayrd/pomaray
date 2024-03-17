"use client";

import { getNotify } from "@/app/actions/notify";
import { cn } from "@/lib/utils";
import { Button } from "@nextui-org/button";
import { CloseIcon } from "@nextui-org/shared-icons";
import { forwardRef, useEffect, useState } from "react";
import type { PomarayComponent } from "../types";
import useNotify from "./useNotify";

const NavbarNotify = forwardRef<HTMLDivElement, PomarayComponent>(
	({ className, children, ...rest }, _) => {
		const { isOpen, close, open } = useNotify();
		const handleClose = () => close();
		const [message, setMessage] = useState("");

		// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
		useEffect(() => {
			const updateMessage = async () => {
				const message = await getNotify();
				setMessage(message.value);
				open();
			};

			updateMessage();
		}, []);

		return (
			isOpen && (
				<div
					className={cn(
						"print:hidden flex flex-col flex-center w-screen bg-primary text-white py-2 px-12 text-sm font-medium z-10",
						className,
					)}
					{...rest}
				>
					<span className="text-center text-sm xss:text-tiny">{message}</span>

					<Button
						aria-label="Cerrar notificacion"
						name="close"
						isIconOnly
						variant="light"
						color="primary"
						className="text-white absolute right-4 mr-0 xss:sm:mr-10 max-h-full rounded-full"
						onClick={handleClose}
					>
						<CloseIcon />
					</Button>
				</div>
			)
		);
	},
);

NavbarNotify.displayName = "Pomaray.NavbarNotify";

export default NavbarNotify;
