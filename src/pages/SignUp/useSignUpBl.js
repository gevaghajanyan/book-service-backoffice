import { useHistory } from 'react-router-dom';

import httpService from '../../services/HttpService';
import { getFormValues } from '../../helpers/formHelpers';
import { errorToast } from '../../helpers/errorToast';
import { signUpUrl } from '../../core/urls';

export const useSignUpBl = (props) => {
  const history = useHistory();

  const signUp = event => {
    event.persist();
    event.preventDefault();
    const data = getFormValues(event, {
      firstName: '',
      lastName: '',
      password: '',
      email: '',
    });

    httpService.post(signUpUrl, data).then(data => {
      history.push('/sign-in');
    }).catch(errorToast);
  };

  return {
    signUp,
    ...props,
  };
};
