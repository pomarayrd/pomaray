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
	NavbarMenuToggle,
	Navbar as NextNavbar,
} from "@nextui-org/react";
import { ChevronIcon } from "@nextui-org/shared-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef, useMemo, useState } from "react";
import NavbarItem from "./NavbarItem";
import NavbarMenu from "./NavbarMenu";
import type { NavbarProps } from "./types";

const Header = forwardRef<HTMLDivElement, NavbarProps>(
	({ className, children, as, ...rest }, ref) => {
		const path = usePathname();
		const [isMenuOpen, setIsMenuOpen] = useState(false);

		// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
		useMemo(() => {
			if (isMenuOpen) setIsMenuOpen(false);
		}, [path]);

		return (
			<div className="fixed w-screen z-50" ref={ref}>
				{children}
				<NextNavbar
					isMenuOpen={isMenuOpen}
					onMenuOpenChange={setIsMenuOpen}
					isBordered
					position="sticky"
					isBlurred={false}
					className={cn("bg-default-100", className)}
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
					{...rest}
				>
					<NavbarBrand>
						<Link href="/" type="button" className="flex flex-center">
							<Pomaray className="fill-primary w-9" />{" "}
							<p className="text-inherit text-primary font-medium text-2xl">
								POMARAY
							</p>
						</Link>
					</NavbarBrand>
					<NavbarMenu />
					<NavbarContent justify="center" className="hidden lg:flex gap-x-8">
						{locale.NAVBAR.ITEMS.map((item) => {
							if (item.LINK) {
								const itemIsActive = item.LINK === path;
								return (
									<NavbarItem
										key={item.LINK}
										isActive={itemIsActive}
										isImportant={item.IMPORTANT}
									>
										<Link href={item.LINK} scroll={false}>
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
									<Dropdown
										showArrow
										shouldCloseOnBlur
										radius="sm"
										size="sm"
										key={item.TEXT}
										className="bg-default-100"
									>
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
											disabledKeys={item.SUB_ITEMS.filter(
												(sub) => sub.IS_DISABLED === true,
											).map((sub) => sub.LINK)}
										>
											{(sub) => (
												<DropdownItem
													description={sub.DESCRIPTION}
													as={Link}
													key={sub.LINK}
													href={sub.LINK}
												>
													<span className="text-primary font-semibold capitalize text-ellipsis overflow-hidden text-nowrap">
														{sub.TEXT}
													</span>
												</DropdownItem>
											)}
										</DropdownMenu>
									</Dropdown>
								);
							}
						})}
					</NavbarContent>
					<NavbarContent justify="end">
						<NavbarMenuToggle
							aria-label={isMenuOpen ? "Cerrar menu" : "Abrir menu"}
							className="lg:hidden"
						/>
						<Button
							as={Link}
							href={locale.NAVBAR.LINK}
							className="hidden lg:inline-flex"
							size="sm"
							variant="bordered"
							color="primary"
						>
							{locale.NAVBAR.BUTTON}
						</Button>
					</NavbarContent>
				</NextNavbar>
			</div>
		);
	},
);

Header.displayName = "Pomaray.Navbar";

export default Header;
