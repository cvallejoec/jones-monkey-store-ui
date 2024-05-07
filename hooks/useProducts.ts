import { useCallback } from 'react';
import querystring from 'query-string';

import { useApi, useFetch, useForm } from 'hooks';
import { Page, Product } from '~/utils/types';

type UseProductProps = {
  proceedToRequest?: boolean;
  take?: number;
  page?: number;
  random?: boolean;
};

const initialProps: UseProductProps = {
  proceedToRequest: true,
  random: false,
};

type QueryParams = {
  take?: number;
  page?: number;
  random?: boolean;
};

export const useProducts = (
  props = {
    ...initialProps,
  }
) => {
  const { values: queryParams, onChange } = useForm<QueryParams>({
    take: props.take,
    page: props.page,
    random: props.random,
  });
  const { get } = useApi();
  const getProducts = useCallback(async () => {
    // Wait 3 seconds for testing purposes
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    const query = querystring.stringify(queryParams);
    return await get(`/products/store?${query}`);
  }, [queryParams]);
  const { loading, data: productsData } = useFetch<Page<Product>>({
    getData: getProducts,
    initialData: [],
  });

  return {
    products: productsData.data || [],
    meta: productsData.meta || null,
    loading,
    onParamsChange: onChange,
  };
};
