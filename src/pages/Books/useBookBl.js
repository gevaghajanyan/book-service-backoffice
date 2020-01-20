import { useEffect, useState } from 'react';
import httpService from '../../services/HttpService';
import { getBooksUrl } from '../../core/urls';

export const useBookBl = props => {
  const [books, setBooks] = useState({
    totalCount: 0,
    data: [],
  });

  const [params, setParams] = useState({
    page: 0,
    count: 10,
  });


  useEffect(() => {
    httpService.get(getBooksUrl(params))
      .then(({ data }) => setBooks(data));
  }, [params]);

  return {
    books,
    params,
    setParams,
    ...props,
  };
};