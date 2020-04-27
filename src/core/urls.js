import { serializeQueryParams } from '../helpers/queryHelpers';

export const API_URL = 'http://localhost:3000';

export const signUpUrl = `${API_URL}/auth/signUp`;
export const signInUrl = `${API_URL}/auth/signIn`;

export const getBooksUrl = params => `${API_URL}/books/?${serializeQueryParams(params)}`;

export const getBookUrl = bookId => `${API_URL}/books/${bookId}`;

export const deleteBookUrl = bookId => `${API_URL}/books/${bookId}`;

export const addBookUrl = () => `${API_URL}/books`;

export const getCategoriesUrl = (params) => `${API_URL}/categories/?${serializeQueryParams(params)}`;

export const addCategoryUrl = () => `${API_URL}/categories`;

export const deleteCategoryUrl = (id) => `${API_URL}/categories/${id}`;

export const getImgUrl = name => `/assets/${name}`;

export const getFileUrl = id => `${API_URL}/files/${id}`;
