import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { HttpService } from '../services/HttpService';

export const useAuth = () => {
  const getCookie = (cname) => {
    const name = cname + '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  };

  const [jwt, setJwt] = useState(getCookie('jwt'));
  const history = useHistory();
  useEffect(() => {
    if (jwt) {
      history.push('/dashboard');
      HttpService.token = jwt;
      document.cookie = `jwt=${jwt}`
    } else {
      history.push('/sign-in')
    }
  }, [jwt]);

  return {
    jwt,
    setJwt
  }
};