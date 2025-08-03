import { useState, useMemo, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface UsePaginationProps {
  data: any[];
  defaultItemsPerPage: number;
}

interface UsePaginationReturn {
  currentData: any[];
  currentPage: number;
  totalPages: number;
  goToPage: (page: number) => void;
  nextPage: () => void;
  prevPage: () => void;
  canGoNext: boolean;
  canGoPrev: boolean;
  startIndex: number;
  endIndex: number;
  totalItems: number;
  itemsPerPage: number;
  setItemsPerPage: (itemsPerPage: number) => void;
}

export function usePagination({
  data,
  defaultItemsPerPage,
}: UsePaginationProps): UsePaginationReturn {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get values from URL params or use defaults
  const getPageFromUrl = (): number => {
    const page = searchParams.get("page");
    return page ? parseInt(page, 10) : 1;
  };

  const getItemsPerPageFromUrl = (): number => {
    const perPage = searchParams.get("per_page");
    return perPage ? parseInt(perPage, 10) : defaultItemsPerPage;
  };

  const [currentPage, setCurrentPage] = useState(getPageFromUrl);
  const [itemsPerPage, setItemsPerPageState] = useState(getItemsPerPageFromUrl);

  // Update URL when pagination state changes
  const updateUrl = (page: number, perPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    params.set("per_page", perPage.toString());
    router.push(`?${params.toString()}`, { scroll: false });
  };

  // Sync state with URL params
  useEffect(() => {
    const urlPage = getPageFromUrl();
    const urlPerPage = getItemsPerPageFromUrl();

    if (urlPage !== currentPage) {
      setCurrentPage(urlPage);
    }

    if (urlPerPage !== itemsPerPage) {
      setItemsPerPageState(urlPerPage);
    }
  }, [searchParams]);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const totalItems = data.length;

  // Reset to page 1 if current page is out of bounds
  useEffect(() => {
    if (totalPages > 0 && currentPage > totalPages) {
      goToPage(1);
    }
  }, [totalPages, currentPage]);

  const currentData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  }, [data, currentPage, itemsPerPage]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, data.length);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      updateUrl(page, itemsPerPage);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      updateUrl(newPage, itemsPerPage);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      updateUrl(newPage, itemsPerPage);
    }
  };

  const setItemsPerPage = (newItemsPerPage: number) => {
    setItemsPerPageState(newItemsPerPage);
    // Reset to first page when changing items per page
    setCurrentPage(1);
    updateUrl(1, newItemsPerPage);
  };

  const canGoNext = currentPage < totalPages;
  const canGoPrev = currentPage > 1;

  return {
    currentData,
    currentPage,
    totalPages,
    goToPage,
    nextPage,
    prevPage,
    canGoNext,
    canGoPrev,
    startIndex,
    endIndex,
    totalItems,
    itemsPerPage,
    setItemsPerPage,
  };
}
