import { useCallback, useEffect, useState } from 'react';
import httpService from '../../services/HttpService';
import { getBooksUrl, deleteBookUrl } from '../../core/urls';

export const useBooksBl = props => {
  const [books, setBooks] = useState({
    totalCount: 0,
    data: [],
  });

  const [params, setParams] = useState({
    page: 0,
    count: 10,
  });


  const deleteBook = useCallback((event, id) => {
    event.preventDefault();
    event.stopPropagation();
    httpService.delete(deleteBookUrl(id)).then(resetParams);
  }, []);

  const resetParams = useCallback(() => {
    setParams({
      page: 0,
      count: 10,
    });
  }, []);

  useEffect(() => {
    httpService.get(getBooksUrl(params))
      .then(({ data }) => setBooks(data));
  }, [params]);

  return {
    books,
    params,
    setParams,
    deleteBook,
    ...props,
  };
};