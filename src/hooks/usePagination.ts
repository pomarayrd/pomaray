import { useEffect, useState } from "react";

export interface usePaginationOptions {
	queryParam?: string;
}

export const usePagination = (
	initialPage = 1,
	limit = 20,
	{ queryParam = "page" }: usePaginationOptions = {},
	onPageChange: (page: number) => void = () => {},
) => {
	const [currentPage, setCurrentPage] = useState<number>(initialPage);
	const [totalPages, setTotalPages] = useState<number>(0);

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
		skip: (currentPage - 1) * limit,
		handleChangePage,
		setTotalPages,
		setCurrentPage,
	};
};
