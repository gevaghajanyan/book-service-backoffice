import { useHistory } from 'react-router-dom';

import { getFormValues } from '../../helpers/formHelpers';
import httpService from '../../services/HttpService';
import { signInUrl } from '../../core/urls';
import { useAuth } from '../../hooks/useAuthBl';

export const useSignInBl = props => {
  const { setJwt } = useAuth();
  const signIn = (event) => {
    event.persist();
    event.preventDefault();
    const data = getFormValues(event, {
      email: '',
      password: ''
    });

    httpService.post(signInUrl, data).then(({ data }) => {
      if (data.hasOwnProperty('token')) {
        setJwt(data.token);
      }
    });
  };

  return {
    signIn,
    ...props
  }
};
