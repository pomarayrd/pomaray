import { fetchFromServer } from "@/app/actions/fetch";
import { buildUrl } from "@/lib/utils";
import type { ResultResponse } from "@/types/api";
import { useEffect, useState } from "react";

export interface UseFetchOptions<T> {
	initialState: T;
	searchParams?: URLSearchParams;
}

export const useFetch = <T>(path: string, options?: UseFetchOptions<T>) => {
	const [results, setResults] = useState<T | undefined>(options?.initialState);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | undefined>(undefined);

	const resetsState = () => {
		setIsLoading(false);
		setError(undefined);
		setResults(undefined);
	};

	const fetchData = async () => {
		try {
			resetsState();
			const response = await fetchFromServer(
				buildUrl(path, options?.searchParams),
				{
					method: "GET",
					headers: {
						"content-type": "application/json",
					},
				},
			);

			const body = (await response.json()) as ResultResponse<T>;
			if (!response.ok) {
				throw new Error(body.message || "Ha ocurrido un error.");
			}

			if (body.results) {
				setResults(body.results);
			}
		} catch (error) {
			setResults(undefined);
			setError("Hubo un error, por favor inténtelo de nuevo.");
		} finally {
			setIsLoading(false);
		}
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		fetchData();
	}, [path, options?.searchParams]);

	return {
		results,
		isLoading,
		error,
		refetch: fetchData, // Renombrado a 'refetch'
	};
};
