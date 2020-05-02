import httpService from '../../services/HttpService';
import { useAuth } from '../../hooks/useAuthBl';
import { getFormValues } from '../../helpers/formHelpers';
import { errorToast } from '../../helpers/errorToast';
import { signInUrl } from '../../core/urls';

export const useSignInBl = props => {
  const { setJwt } = useAuth();
  const signIn = (event) => {
    event.persist();
    event.preventDefault();
    const data = getFormValues(event, {
      email: '',
      password: '',
    });

    httpService.post(signInUrl, data)
      .then(({ data }) => {
        if (data.hasOwnProperty('accessToken')) {
          setJwt(data.accessToken);
        }
      }).catch(errorToast);
  };

  return {
    signIn,
    ...props,
  };
};
