import { useParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import httpService from '../../services/HttpService';
import { getBookUrl } from '../../core/urls';

export const useBookBl = props => {

  const [book, setBook] = useState(null);
  const { bookId } = useParams();

  const deleteBook = useCallback(() => {

  }, [bookId]);

  useEffect(() => {
    httpService
      .get(getBookUrl(bookId))
      .then(({ data }) => setBook(data));
  }, []);


  return {
    book,
    ...props,
  };
};