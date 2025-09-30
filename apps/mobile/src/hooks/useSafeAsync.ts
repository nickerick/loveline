import { useState, useEffect, useCallback } from 'react';

export function useSafeAsync<T>(asyncFunc: () => Promise<T>, deps: any[] = []) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const run = useCallback(() => {
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
      ignore = true; // cancel updates if unmounted
    };
  }, deps);

  useEffect(() => {
    const cancel = run();
    return cancel;
  }, [run]);

  return { data, loading, error, refetch: run };
}
