import { useState, useEffect, useCallback } from 'react';
import httpService from '../../services/HttpService';
import { getCategoriesUrl, addCategoryUrl, deleteCategoryUrl } from '../../core/urls';
import { getFormValues } from '../../helpers/formHelpers';

export const useCategoriesBl = (props) => {
  const [modalState, setModalState] = useState(false);

  const [categories, setCategories] = useState({
    totalCount: 0,
    data: [],
  });

  const [params, setParams] = useState({
    page: 0,
    count: 10,
  });

  const resetParams = useCallback(() => {
    setParams({
      page: 0,
      count: 10,
    });
  }, []);

  const addCategory = useCallback((event) => {
    event.persist();
    event.preventDefault();
    const data = getFormValues(event, {
      name: '',
    });
    httpService.post(addCategoryUrl(), data).then(({ data }) => {
      setModalState(false);
      resetParams();
    });
  }, []);

  const deleteCategory = useCallback((event, id) => {
    event.persist();
    event.preventDefault();
    httpService.delete(deleteCategoryUrl(id)).then(({ data }) => {
      setModalState(false);
      resetParams();
    });
  }, []);

  const toggleAddModalState = useCallback(() => {
    setModalState(!modalState)
  }, [modalState]);

  useEffect(() => {
    httpService.get(getCategoriesUrl(params))
      .then(({ data }) => setCategories(data));
  }, [params]);

  return {
    params,
    setParams,
    categories,
    modalState,
    addCategory,
    deleteCategory,
    toggleAddModalState,
    ...props,
  };
};