import { useEffect, useState } from "react";

type ApiGetProps = {
  url: string;
};

export type Pagination = {
  currentPage: number;
  totalPages?: number;
  totalItems?: number;
  itemsPerPage?: number;
  hasNextPage?: boolean;
  hasPrevPage?: boolean;
};

function useApi<T>({ url }: ApiGetProps) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<T[]>();
  const [pagination, setPagination] = useState<Pagination>();
  const [page, setPage] = useState<number | undefined>(pagination?.currentPage);
  const [error, setError] = useState<string | null>(null);

  const statePage = (page: number) => {
    setPage(page);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Fetch Error Api status ${response.status}`);
        }

        const result = await response.json();
        const data: T[] = result.data;
        const pagined: Pagination = result.pagination;
        setPagination(pagined);
        setData(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  return {
    loading,
    data,
    error,
    pagination,
    statePage
  };
}

export default useApi;
