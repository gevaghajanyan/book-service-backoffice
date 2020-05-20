import { useCallback, useEffect, useState } from 'react';

import httpService from '../../services/HttpService';
import { addBookUrl, getCategoriesUrl } from '../../core/urls';
import { getFormValues } from '../../helpers/formHelpers';
import { toBase64 } from '../../helpers/imageHelpers';
import moment from 'moment';

export const useAddBookBl = (props) => {

  const [published, setPublished] = useState(moment().format('M/DD/YYYY'));

  const [file, setFile] = useState(null);

  const [categories, setCategories] = useState([]);

  const [image, setImage] = useState(null);

  const rate = new Array(100).fill(null).map((
    _,
    index,
  ) => index);

  const uploadImage = useCallback(async (event) => {
    event.persist();
    const { target: { files: [file] } } = event;
    const image = await toBase64(file);
    setImage(image);
  }, []);

  const uploadFile = useCallback((event) => {
    event.persist();
    const { target: { files: [file] } } = event;
    setFile(file?.name);
  }, []);

  const addBookSubmit = useCallback((event) => {
    event.persist();
    event.preventDefault();
    httpService.post(addBookUrl(), new FormData(), {
      body: new FormData(event.target),
    });
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
    uploadImage,
    image,
    file,
    uploadFile,
    ...props,
  };
};
