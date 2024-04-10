import { buildUrl } from "@/lib/utils";
import type { ResultResponse } from "@/types/api";
import { useEffect, useState } from "react";

export interface UseFetchOptions<T> {
	initialState?: T;
	searchParams?: URLSearchParams;
	onFetch?: (body: T) => void;
}

export const useFetch = <T>(path: string, options: UseFetchOptions<T> = {}) => {
	const [results, setResults] = useState(options.initialState);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<
		| {
				status: number;
				message: string;
		  }
		| undefined
	>();

	const resetsState = () => {
		setError(undefined);
		setResults(undefined);
	};

	const fetchData = async () => {
		try {
			setIsLoading(true);
			resetsState();
			const response = await fetch(buildUrl(path, options.searchParams), {
				method: "GET",
				headers: {
					"content-type": "application/json",
				},
			});

			const body = (await response.json()) as ResultResponse<T>;
			if (!response.ok) {
				setError({
					message:
						body.message ?? "Hubo un error, por favor inténtelo de nuevo.",
					status: body.status ?? 500,
				});
			}

			if (body) {
				setResults(body as T);
			}

			options.onFetch?.(body);
		} catch (error) {
			setResults(undefined);
			setError({
				status: 500,
				message: "Hubo un error, por favor inténtelo de nuevo.",
			});
		} finally {
			setIsLoading(false);
		}
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [path, options.searchParams]);

	return {
		results,
		isLoading,
		error,
		refetch: fetchData, // Renombrado a 'refetch'
	};
};
