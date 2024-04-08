import { logout as actionLogout, getTokenUser } from "@/app/_actions/auth";
import type { User } from "@/types/scheme/user";
import { create } from "zustand";

interface useSessionStore {
	user?: User | undefined;
	logout: () => Promise<void>;
	getUserSession: () => void;
}

const useSession = create<useSessionStore>((set) => ({
	user: undefined,
	logout: async () => {
		await actionLogout();
	},
	getUserSession: async () => {
		const user = await getTokenUser();
		set({
			user,
		});
	},
}));

export default useSession;
