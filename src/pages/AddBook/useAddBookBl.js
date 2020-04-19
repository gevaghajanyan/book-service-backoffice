import { useCallback, useEffect, useState } from 'react';
import httpService from '../../services/HttpService';
import { getCategoriesUrl } from '../../core/urls';
import { getFormValues } from '../../helpers/formHelpers';

export const useAddBookBl = (props) => {

  const [published, setPublished] = useState(new Date());

  const [categories, setCategories] = useState([]);

  const rate = new Array(100).fill(null).map((_, index) => index);

  const addBookSubmit = useCallback((event) => {
    event.persist();
    event.preventDefault();
    const data = getFormValues(event, {
      title: '',
      pageCount: '',
      published: '',
      shortDescription: '',
      longDescription: '',
      categories: '',
      rate: '',
    });
    console.log(data);
  }, []);

  useEffect(() => {
    httpService.get(getCategoriesUrl({})).then(({
      data: { data },
    }) => {
      setCategories(data);
    });
  }, []);

  return {
    published,
    setPublished,
    categories,
    addBookSubmit,
    rate,
    ...props,
  };
};