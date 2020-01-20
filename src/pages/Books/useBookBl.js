import { useEffect, useState } from 'react';
import httpService from '../../services/HttpService';
import { getBooksUrl } from '../../core/urls';

export const useBookBl = props => {
  const [books, setBooks] = useState({
    totalCount: 0,
    data: [],
  });

  useEffect(() => {
    httpService.get(getBooksUrl())
      .then(({ data }) => setBooks(data));
  }, []);

  return {
    books,
    ...props,
  };
};