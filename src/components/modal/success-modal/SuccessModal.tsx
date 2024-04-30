"use client";

import { cn } from "@/lib/utils";
import {
	Button,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
} from "@nextui-org/react";
import type { ConfirmModalProps } from "./type";

export default function ConfettiModal({
	title = "Acción realizada exitosamente",
	buttonLabel = "Ok",
	children,
	className,
	isOpen,
	onConfirm,
	onOpenChange,
}: ConfirmModalProps) {
	const handleOpenChange = onOpenChange;

	const handleClose = () => {
		onConfirm?.();
	};

	return (
		<>
			<Modal isOpen={isOpen} onOpenChange={handleOpenChange}>
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
										handleClose();
										onClose();
									}}
									className="flex w-full gap-4"
								>
									<Button
										type="submit"
										fullWidth
										radius="sm"
										variant="solid"
										color="primary"
									>
										{buttonLabel}
									</Button>
									<Button fullWidth radius="sm" onClick={onClose}>
										Volver
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
