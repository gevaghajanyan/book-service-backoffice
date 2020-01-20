import { serializeQueryParams } from '../helpers/queryHelpers';

export const API_URL = 'http://localhost:4321/api';

export const signUpUrl = `${API_URL}/auth/signUp`;
export const signInUrl = `${API_URL}/auth/signIn`;

export const getBooksUrl = params => `${API_URL}/books/?${serializeQueryParams(params)}`;