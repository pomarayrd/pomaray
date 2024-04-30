import { CONNECTION_ERROR } from "@/lib/constants";
import { kv } from "@vercel/kv";
import { z } from "zod";

const NotifySchema = z.object({
	value: z.string(),
	link: z.object({
		href: z.string(),
		value: z.string(),
	}),
});

export type Notify = z.infer<typeof NotifySchema>;

export type SaveNotifyResponse = {
	error?:
		| {
				link?: string;
				value?: string;
		  }
		| string;
};

export const getNotify = async (): Promise<Notify | undefined> => {
	try {
		const response = (await kv.get("notify")) as Notify;
		return response;
	} catch (err) {
		return;
	}
};

export const saveNotify = async (
	notification: Notify,
): Promise<SaveNotifyResponse> => {
	try {
		const validation = NotifySchema.safeParse(notification);
		if (!validation.success) {
			const validationErrors = validation.error.flatten().fieldErrors;
			return {
				error: {
					link: validationErrors.link?.at(0),
					value: validationErrors.value?.at(0),
				},
			};
		}

		await kv.set("notify", notification);

		return {};
	} catch (error) {
		return {
			error: CONNECTION_ERROR,
		};
	}
};
