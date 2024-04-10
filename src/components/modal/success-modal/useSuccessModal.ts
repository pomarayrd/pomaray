import { createConfetti } from "@/lib/confetti";
import useModal from "../useModal";

const useSuccessModal = (confettiTime = 2000) => {
	const { onOpen, isOpen, onOpenChange } = useModal();

	const openModal = () => {
		createConfetti(confettiTime);
		onOpen();
	};

	return {
		isSuccessOpen: isOpen,
		openSuccessModal: openModal,
		openSuccessModalChange: onOpenChange,
	};
};

export default useSuccessModal;
