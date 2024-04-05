"use client";

import { useState } from "react";

const useNotify = (initial = false) => {
	const [isOpen, setIsOpen] = useState(initial);

	const open = () => setIsOpen(true);
	const close = () => setIsOpen(false);

	return {
		isOpen,
		close,
		open,
	};
};

export default useNotify;
