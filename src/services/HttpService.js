export class HttpService {
  token = null;

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
      if (res.status) {
        return res.json();
      }
      return res.ok;
    });
  }

  get(url) {
    return this._request(url, 'GET', null);
  }

  post(url, body) {
    return this._request(url, 'POST', {
      headers: HttpService.defaultHeaders(),
      body: JSON.stringify(body),
    });
  }

  delete(url) {
    return this._request(url, 'DELETE', null);
  }

  static defaultHeaders() {
    const headers = {
      'Content-Type': 'application/json',
      'Accept-Charset': 'utf-8',
      'Accept': 'application/json',
    };

    if (HttpService.token) {
      headers['Authorization'] = `Bearer ${HttpService.token}`;
    }

    return new Headers(headers);
  }
}

const httpService = new HttpService();

export default httpService;