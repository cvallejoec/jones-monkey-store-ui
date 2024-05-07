import { useCallback } from 'react';
import querystring from 'query-string';

import { useApi, useFetch, useForm } from 'hooks';
import { Page, Product } from '~/utils/types';

type QueryParams = {
  take?: number;
  page?: number;
  random?: boolean;
  catalogueSlug?: string;
};

type UseProductProps = {
  proceedToRequest?: boolean;
  beforeRequest?: () => void;
  formatResponse?: (data: any) => any;
  query?: QueryParams;
};

const initialProps: UseProductProps = {
  proceedToRequest: true,
  query: {
    random: false,
  },
};

export const useProducts = (
  props = {
    ...initialProps,
  }
) => {
  const {
    values: queryParams,
    onChange,
    onMultiChange,
  } = useForm<QueryParams>({
    ...props.query,
  });
  const { get } = useApi();
  const getProducts = useCallback(async () => {
    console.log('Buscando');
    // Wait 3 seconds for testing purposes
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    const query = querystring.stringify(queryParams);
    console.log('query', query);
    return await get(`/products/store?${query}`);
  }, [queryParams]);
  const { loading, data: productsData } = useFetch<Page<Product>>({
    getData: getProducts,
    initialData: [],
    ...props,
  });

  return {
    products: productsData.data || [],
    meta: productsData.meta || null,
    loading,
    onParamsChange: onChange,
    onMultiChange,
  };
};
