"use client";
import Pomaray from "@/icons/Pomaray";
import { cn } from "@/lib/utils";
import locale from "@/locales/root.json";
import {
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
	NavbarBrand,
	NavbarContent,
	Navbar as NextNavbar,
} from "@nextui-org/react";
import { ChevronIcon } from "@nextui-org/shared-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";
import NavbarItem from "./NavbarItem";
import type { NavbarProps } from "./types";

const Navbar = forwardRef<HTMLDivElement, NavbarProps>(
	({ className, children, as, ...rest }, ref) => {
		const path = usePathname();

		return (
			<header className="fixed w-screen z-50" ref={ref}>
				{children}
				<NextNavbar
					isBordered
					position="sticky"
					isBlurred={false}
					className={cn("bg-default-100", className)}
					{...rest}
					classNames={{
						item: [
							"flex",
							"relative",
							"h-full",
							"items-center",
							"data-[active=true]:after:content-['']",
							"data-[active=true]:after:absolute",
							"data-[active=true]:after:bottom-0",
							"data-[active=true]:after:left-0",
							"data-[active=true]:after:right-0",
							"data-[active=true]:after:h-[2px]",
							"data-[active=true]:after:rounded-[2px]",
							"data-[active=true]:after:bg-primary",
						],
					}}
				>
					<NavbarBrand>
						<Link href="/" type="button" className="flex flex-center">
							<Pomaray className="fill-primary w-9" />{" "}
							<p className="text-inherit text-primary font-medium text-2xl">
								POMARAY
							</p>
						</Link>
					</NavbarBrand>
					<NavbarContent justify="center">
						{locale.NAVBAR.ITEMS.map((item) => {
							if (item.LINK) {
								const itemIsActive = item.LINK === path;
								return (
									<NavbarItem
										isActive={itemIsActive}
										isImportant={item.IMPORTANT}
									>
										<Link key={item.LINK} href={item.LINK} scroll={false}>
											{item.TEXT}
										</Link>
									</NavbarItem>
								);
							}

							if (item.SUB_ITEMS) {
								const itemIsActive = item.SUB_ITEMS?.some(
									(subItem) => subItem.LINK === path,
								);

								return (
									<Dropdown size="sm" key={item.TEXT}>
										<NavbarItem isActive={itemIsActive}>
											<DropdownTrigger>
												<Button
													disableRipple
													className="p-0 bg-transparent data-[hover=true]:bg-transparent font-medium text-md"
													endContent={<ChevronIcon className="-rotate-90" />}
													radius="sm"
													variant="light"
												>
													{item.TEXT}
												</Button>
											</DropdownTrigger>
										</NavbarItem>
										<DropdownMenu
											aria-label={item.TEXT}
											items={item.SUB_ITEMS}
											className="max-w-[300px]"
										>
											{(sub) => (
												<DropdownItem
													description={sub.DESCRIPTION}
													as={Link}
													key={sub.LINK}
													href={sub.LINK}
												>
													{sub.TEXT}
												</DropdownItem>
											)}
										</DropdownMenu>
									</Dropdown>
								);
							}
						})}
					</NavbarContent>
					<NavbarContent justify="end">
						<Button size="sm" variant="bordered" color="primary">
							Enviar excusa.
						</Button>
					</NavbarContent>
				</NextNavbar>
			</header>
		);
	},
);

Navbar.displayName = "Pomaray.Navbar";

export default Navbar;
