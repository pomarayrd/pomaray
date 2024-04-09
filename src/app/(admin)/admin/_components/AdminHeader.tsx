"use client";

import { UserAvatar } from "@/components/user"
import useSession from "@/hooks/custom/useSessions"
import { Button, Skeleton, Tooltip } from "@nextui-org/react"
import { useEffect } from "react";
import { FaRightFromBracket } from "react-icons/fa6"

function AdminHeader() {
    const {
        getUserSession,
        logout,
        user
    } = useSession()

    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    useEffect(() => {
        const fetchData = async () => getUserSession()

        fetchData();
    }, [])
    return (
        <div className="flex items-center justify-between w-full mt-24">
            <div>
                {user ? (<UserAvatar user={user} />
                ) : (
                    <div className="max-w-[300px] w-full flex items-center gap-3">
                        <div>
                            <Skeleton className="flex rounded-full w-12 h-12" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Skeleton className="h-3 w-[200px] rounded-lg" />
                            <Skeleton className="h-3 w-[100px] rounded-lg" />
                        </div>
                    </div>
                )}
            </div>
            <div>
                <Tooltip content="Cerrar session" color="primary">
                    <Button
                        onPress={logout}
                        isIconOnly
                        color="primary"
                        variant="bordered"
                    >
                        <FaRightFromBracket />
                    </Button>
                </Tooltip>
            </div>
        </div>
    )
}

export default AdminHeader