"use client";
import { cn } from "@/lib/utils";
import {
    Button,
    type ButtonVariantProps,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    useDisclosure
} from "@nextui-org/react";
import type { PomarayComponent } from "./types";

interface ConfirmModalProps extends PomarayComponent {
    buttonLabel?: string;
    onConfirm: (() => void) | (() => Promise<void>);
    title: string;
    triggerVariants?: ButtonVariantProps
    intensity?: "medium" | "hard"
}

export default function ConfirmModal({
    triggerVariants = {
        color: "primary",
        radius: "sm",
        fullWidth: true,
    },
    onConfirm,
    title,
    buttonLabel = "Confirmar",
    intensity = "medium",
    children,
    className,
}: ConfirmModalProps) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button onPress={onOpen} {...triggerVariants}>{buttonLabel}</Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
                            <ModalBody className={cn("flex flex-col gap-6", className)}>
                                {children}
                            </ModalBody>
                            <ModalFooter>
                                <form
                                    onSubmit={async (e) => {
                                        e.preventDefault();
                                        await onConfirm();
                                        onClose();
                                    }}
                                    className="flex w-full gap-4"
                                >
                                    <Button type="submit" fullWidth radius="sm" variant="solid" color={intensity === "hard" ? "danger" : "warning"} onPress={onClose}>
                                        Confirmar
                                    </Button>
                                    <Button fullWidth radius="sm" onPress={onClose}>
                                        Cancelar
                                    </Button>
                                </form>

                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal >
        </>
    );
}
