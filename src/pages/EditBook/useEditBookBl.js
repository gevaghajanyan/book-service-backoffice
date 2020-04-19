import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import httpService from '../../services/HttpService';
import { getBookUrl } from '../../core/urls';

export const useEditBookBl = props => {

  const [book, setBook] = useState(null);
  const { bookId } = useParams();

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