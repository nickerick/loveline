import { useState, useEffect } from 'react';

export function useSafeAsync<T>(asyncFunc: () => Promise<T>, deps: any[] = []) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    let ignore = false;

    setLoading(true);
    setError(null);

    asyncFunc()
      .then((result) => {
        if (!ignore) setData(result);
      })
      .catch((err) => {
        if (!ignore) setError(err);
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => {
      ignore = true; // prevent stale update if unmounted or deps change
    };
  }, deps);

  return { data, loading, error };
}
