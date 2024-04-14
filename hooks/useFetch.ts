import { useState, useEffect } from 'react';

type FetchProps = {
  getData: () => Promise<any>;
  proceedToRequest?: boolean;
  beforeRequest?: () => void;
  initialData?: any;
  effectDependencies?: any[];
  onError?: (error: any) => void;
  onSuccess?: (data: any) => void;
  formatResponse?: (data: any) => any;
};

export const useFetch = <T>({
  getData,
  proceedToRequest = true,
  beforeRequest = () => {},
  initialData = null,
  effectDependencies = [],
  onError = () => {},
  onSuccess = () => {},
  formatResponse = (data: any) => data,
}: FetchProps) => {
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [data, setData] = useState<T>(initialData);
  const [error, setError] = useState<string | null>(null);

  async function loadData() {
    try {
      setStatus('loading');
      beforeRequest();
      if (!proceedToRequest) {
        setStatus('idle');
        return;
      }
      const response = await getData();
      setData(formatResponse(response));
      setStatus('success');
      onSuccess(response);
    } catch (error) {
      setError(error);
      setStatus('error');
      onError(error);
    } finally {
      setStatus('idle');
    }
  }

  useEffect(() => {
    loadData();
  }, [proceedToRequest, getData, ...effectDependencies]);

  return {
    loading: status === 'loading',
    error,
    data,
    loadData,
  };
};
