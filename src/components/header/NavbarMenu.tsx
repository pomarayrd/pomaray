"use client";

import { useNotify } from "@/components/notify";
import { Text } from "@/components/text";
import locale from "@/locales/root.json";
import { Button, NavbarItem, NavbarMenu as NextNavbarMenu } from "@nextui-org/react"
import { ForwardIcon } from "@nextui-org/shared-icons"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useEffect } from "react";

function NavbarMenu() {
    const { NAVBAR: { ITEMS } } = locale
    const path = usePathname()
    const { isOpen } = useNotify()

    return (
        <NextNavbarMenu key={"navbar-menu-mobile"} className="gap-2">
            <div key={"spacing"} style={{
                paddingTop: isOpen ? "2rem" : "0px"
            }} />
            {ITEMS.map((item) => {
                if (item.LINK) {
                    const itemIsActive = item.LINK === path;
                    return (
                        <NavbarItem
                            key={item.TEXT}
                            isActive={itemIsActive}
                            className="h-max w-max inline-flex gap-1 items-center"
                        >
                            <Link href={item.LINK} scroll={false}>
                                {item.TEXT}
                            </Link>
                            {item.IMPORTANT && (
                                <span
                                    aria-label="Nuevo contenido!"
                                    className="size-1.5 bg-primary-500 rounded-full animate-pulse"
                                />
                            )}
                        </NavbarItem>
                    );
                }

                if (item.SUB_ITEMS) {
                    const itemIsActive = item.SUB_ITEMS?.some(
                        (subItem) => subItem.LINK === path,
                    );
                    return (
                        <div key={item.TEXT}>
                            <div style={{
                                opacity: itemIsActive ? 1 : 0.55,
                                fontStyle: itemIsActive ? "italic" : "normal"
                            }} className="inline-flex items-center gap-1 text-xs">
                                <ForwardIcon />
                                <Text className="py-1 text-foreground">{item.TEXT}</Text>
                            </div>
                            <div className="pl-4 border-l-1 border-default-300">
                                {item.SUB_ITEMS.map(sub => (
                                    <NavbarItem
                                        style={{
                                            opacity: sub.IS_DISABLED ? 0.3 : 1,
                                            pointerEvents: sub.IS_DISABLED ? "none" : "visible"
                                        }}
                                        aria-disabled={sub.IS_DISABLED}
                                        isActive={sub.LINK === path}
                                        className="items-center gap-1 h-max w-max !list-disc opacity-60"
                                        key={sub.TEXT}
                                    >
                                        <Link href={sub.LINK} scroll={false}>
                                            {sub.TEXT}
                                        </Link>
                                        {sub.IS_DISABLED && <Text size="label-xs">Próximamente</Text>}
                                    </NavbarItem>
                                ))}
                            </div>
                        </div>
                    )
                }
            })}
        </NextNavbarMenu>
    )
}

export default NavbarMenu