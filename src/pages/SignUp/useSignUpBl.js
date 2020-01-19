import { getFormValues } from '../../helpers/formHelpers';
import httpService from '../../services/HttpService';
import { signUpUrl } from '../../core/urls';

export const useSignUpBl = (props) => {
  const signUp = event => {
    event.persist();
    event.preventDefault();
    const data = getFormValues(event, {
      firstName: '',
      lastName: '',
      password: '',
      email: ''
    });

    httpService.post(signUpUrl, data).then(data => {
      console.log(data, 'data');
    }).catch(console.error)
  };

  return {
    signUp,
    ...props
  }
};