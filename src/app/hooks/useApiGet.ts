import { useState, useEffect, useCallback } from 'react';

interface Pagination {
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

interface UseApiGetResult<T> {
  loading: boolean;
  data: T[] | undefined;
  error: string | null;
  pagination: Pagination | undefined;
  refetch: () => Promise<void>;
}

export default function useApiGet<T>({ url }: { url: string }): UseApiGetResult<T> {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<T[]>();
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState<Pagination>();

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setData(result.data);
      setPagination(result.pagination);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { loading, data, error, pagination, refetch: fetchData };
} 