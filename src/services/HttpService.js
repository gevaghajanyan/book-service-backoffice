export class HttpService {
  static token = null;

  _request(
    url,
    method,
    option,
  ) {
    return fetch(url, {
      method,
      mode: 'cors',
      ...option,
    }).then(res => {
      if (res.ok) {
        return res?.json();
      } else {
        return res?.json().then(({
          statusCode,
          timestamp,
          path,
          message,
        }) => {
          const error = JSON.stringify({
            statusCode,
            timestamp,
            path,
            message
          });
          throw new Error(error);
        });
      }
    });
  }

  get(url) {
    return this._request(url, 'GET', {
      headers: HttpService.defaultHeaders()
    });
  }

  post(
    url,
    body,
    options,
  ) {
    return this._request(url, 'POST', {
      headers: HttpService.defaultHeaders(body),
      body: JSON.stringify(body),
      ...options,
    });
  }

  delete(url) {
    return this._request(url, 'DELETE', null);
  }

  static defaultHeaders(body) {
    let headers = {};
    if (!(body instanceof FormData)) {
      headers = {
        'Content-Type': 'application/json',
        'Accept-Charset': 'utf-8',
        'Accept': 'application/json',
      };
    }

    if (HttpService.token) {
      headers['Authorization'] = `Bearer ${HttpService.token}`;
    }

    return new Headers(headers);
  }
}

const httpService = new HttpService();

export default httpService;
