import { useEffect, useState } from "react";

export interface usePaginationOptions {
	queryParam?: string;
}

export const usePagination = (
	total: number,
	initialPage: number,
	{ queryParam = "page" }: usePaginationOptions,
	onPageChange: (page: number) => void,
) => {
	const [currentPage, setCurrentPage] = useState<number>(initialPage);
	const [totalPages, setTotalPages] = useState<number>(total);

	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const searchPage = Number.parseInt(urlParams.get(queryParam) ?? "1");
		setCurrentPage(searchPage);
	}, [queryParam]);

	const handleChangePage = (page: number) => {
		setCurrentPage(page);
		onPageChange(page);
		const urlParams = new URLSearchParams(window.location.search);
		urlParams.set(queryParam, page.toString());
		const newUrl = `${window.location.pathname}?${urlParams.toString()}`;
		window.history.replaceState({}, "", newUrl);
	};

	return {
		currentPage,
		totalPages,
		handleChangePage,
		setTotalPages,
		setCurrentPage,
	};
};
