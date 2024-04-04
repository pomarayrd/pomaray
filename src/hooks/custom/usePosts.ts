import { API } from "@/lib/constants";
import {
	buildUrl,
	fastFetch,
	getStatusError,
	objectToUrlParams,
} from "@/lib/utils";
import {
	type Post,
	type SearchPostsRequest,
	SearchPostsRequestSchema,
} from "@/types/scheme/posts";
import { create } from "zustand";

export const INITIAL_PAGE = 1;
export const LIMIT = 20;
const localeFile = "posts";

interface usePostsStoreState {
	request: SearchPostsRequest;
	maxResults: number;
	skip: number;
	total: number;
	isLoading: boolean;
	error?: {
		message?: string;
		text?: string;
	};
	posts: Post[];
	setText: (text: string) => void;
	setOnlyNews: (onlyNews: boolean) => void;
	setSkip: (skip: number) => void;
	fetchData: () => Promise<number | undefined>;
	resetState: () => void;
}

const usePostsStore = create<usePostsStoreState>((set, get) => ({
	request: {
		limit: LIMIT,
		skip: 0,
		text: "",
		short_by: "views",
	},
	total: 0,
	maxResults: 0,
	skip: 0,
	isLoading: false,
	error: undefined,
	posts: [],

	setText: (text) => set({ request: { ...get().request, text } }),
	setOnlyNews: (onlyNews) =>
		set({
			request: {
				...get().request,
				short_by: onlyNews ? "created_at" : "views",
			},
		}),
	setSkip: (skip) => set({ skip }),
	resetState: () => {
		set({ isLoading: true, error: undefined, posts: [], maxResults: 0 });
	},
	fetchData: async () => {
		try {
			const { request, skip, resetState } = get();
			resetState();

			const validatedFields = SearchPostsRequestSchema.safeParse(request);
			if (!validatedFields.success) {
				const errors = validatedFields.error.flatten().fieldErrors.text;
				const lastError = errors?.[errors.length - 1];

				set({
					error: {
						text: lastError,
					},
				});
				return;
			}

			const params = objectToUrlParams(request);
			const url = API.getEndpoint("/posts/search");

			const res = await fastFetch(
				`${buildUrl(url, params)}&skip=${skip}`,
				"GET",
			);
			if (!res.ok) {
				set({
					error: {
						message: await getStatusError(localeFile, res.status),
					},
				});
				return;
			}

			const { max_results: total, posts } = (await res.json()) as {
				readonly max_results: number;
				readonly posts: Post[];
			};

			if (total < 0 || posts.length < 0) {
				set({
					error: {
						message: await getStatusError(localeFile, 404),
					},
				});
			}

			set({ posts, total: Math.ceil(total / LIMIT), isLoading: false });
			return Math.ceil(total / LIMIT);
		} catch (error) {
			set({
				error: {
					message: await getStatusError(localeFile, 500),
				},
			});
		} finally {
			set({ isLoading: false });
		}
	},
}));

export default usePostsStore;
