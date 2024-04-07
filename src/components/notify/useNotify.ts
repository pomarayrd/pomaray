"use client";

import { create } from "zustand";
import type { NotifyStore } from "./types";

const useNotify = create<NotifyStore>()((set) => ({
	isOpen: false,
	close: () => set({ isOpen: false }),
	open: () => set({ isOpen: true }),
}));

export default useNotify;
