import { useCallback } from 'react';
import querystring from 'query-string';

import { useApi, useFetch, useForm } from 'hooks';
import { Catalogue } from '~/utils/types';

type useCataloguesProps = {
  formatResponse?: (data: any) => any;
};

const initialProps: useCataloguesProps = {
  formatResponse: (data: any) => data,
};

type QueryParams = {
  take?: number;
  page?: number;
  random?: boolean;
};

export const useCatalogues = (
  props = {
    ...initialProps,
  }
) => {
  const { values: queryParams, onChange } = useForm<QueryParams>({});
  const { get } = useApi();
  const getCatalogues = useCallback(async () => {
    const query = querystring.stringify(queryParams);
    return await get(`/catalogues/store?${query}`);
  }, [queryParams]);
  const { loading, data } = useFetch<Catalogue[]>({
    getData: getCatalogues,
    initialData: [],
    ...props,
  });

  return {
    catalogues: data,
    // meta: productsData.meta || null,
    loading,
    onParamsChange: onChange,
  };
};
