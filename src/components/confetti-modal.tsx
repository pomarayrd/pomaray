"use client";
import { createConfetti } from "@/lib/confetti";
import { cn } from "@/lib/utils";
import {
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
} from "@nextui-org/react";
import type { PomarayComponent } from "./types";

interface ConfirmModalProps extends PomarayComponent {
    buttonLabel?: string;
    title: string;
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    onOpenChange: () => void;
    onConfirm: () => void;
}


export default function ConfettiModal({
    title,
    buttonLabel = "Ok",
    children,
    className,
    isOpen,
    onOpenChange,
    onConfirm
}: ConfirmModalProps) {
    return (
        <>
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
                                        onConfirm?.();
                                        Array.from({ length }, () => {
                                            // Agregar un temporizador de 500ms antes de llamar a createConfetti
                                            setTimeout(() => {
                                                createConfetti(1000);
                                            }, 500);
                                        });
                                        onClose();
                                    }}
                                    className="flex w-full gap-4"
                                >
                                    <Button type="submit" fullWidth radius="sm" variant="solid" color="primary" onPress={onClose}>
                                        {buttonLabel}
                                    </Button>
                                    <Button fullWidth radius="sm" onPress={onClose}>
                                        Volver
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
