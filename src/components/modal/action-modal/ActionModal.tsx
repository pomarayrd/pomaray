"use client";
import useModal from "@/components/modal/useModal";
import { cn } from "@/lib/utils";
import {
	Button,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
} from "@nextui-org/react";
import type { ChangeEvent } from "react";
import type { ConfirmModalProps } from "./types";

export default function ConfettiMo({
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
	const { isOpen, onOpen, onClose, onOpenChange } = useModal();

	const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		await onConfirm();
		onClose();
	};

	return (
		<>
			<Button onPress={onOpen} {...triggerVariants}>
				{buttonLabel}
			</Button>
			<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
							<ModalBody className={cn("flex flex-col gap-6", className)}>
								{children}
							</ModalBody>
							<ModalFooter>
								<form onSubmit={handleSubmit} className="flex w-full gap-4">
									<Button
										type="submit"
										fullWidth
										radius="sm"
										variant="solid"
										color={intensity === "hard" ? "danger" : "warning"}
										onPress={onClose}
									>
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
			</Modal>
		</>
	);
}
