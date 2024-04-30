"use client";

import { type Notify, getNotify } from "@/app/_actions/notify";
import { cn } from "@/lib/utils";
import { Button } from "@nextui-org/button";
import { Link as NextLink } from "@nextui-org/react";
import { CloseIcon } from "@nextui-org/shared-icons";
import Link from "next/link";
import { forwardRef, useEffect, useState } from "react";
import type { PomarayComponent } from "../types";
import useNotify from "./useNotify";

const NavbarNotify = forwardRef<HTMLDivElement, PomarayComponent>(
	({ className, children, ...rest }, ref) => {
		const { isOpen, close, open } = useNotify();
		const handleClose = () => close();
		const [message, setMessage] = useState(
			{
				value: "",
				link: {
					href: "",
					value: "",
				},
			} || undefined,
		);

		// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
		useEffect(() => {
			const updateMessage = async () => {
				const message = await getNotify();
				setMessage(message as Notify);
				open();
			};

			updateMessage();
		}, []);

		return (
			isOpen &&
			message && (
				<div
					ref={ref}
					className={cn(
						"print:hidden flex flex-col flex-center w-screen bg-primary py-2 px-12 text-sm font-medium z-10 text-white",
						className,
					)}
					{...rest}
				>
					<span className="inline-flex gap-2">
						{message.value}
						<NextLink
							as={Link}
							href={message.link.href}
							underline="hover"
							size="sm"
							className="text-white"
						>
							{message.link.value}
						</NextLink>
					</span>

					<Button
						aria-label="Cerrar notificación"
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
