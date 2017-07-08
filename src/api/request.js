const API_VERSION = 'mars-api-v1';

export const GET = 'GET';
export const POST = 'POST';
export const UPDATE = 'UPDATE';
export const PUT = 'PUT';

export const formatParams = data => {
  // remove keys point to undefined value
  const keys = Object.keys(data).filter(key => undefined !== data[key]);
  if(keys.length) {
    return '?' + keys.map(key => `${key}=${data[key]}`).join('&')
  }else {
    return ''
  }
};

const headers = {
  'Content-Type': 'application/json'
};

export default (url, method = GET) => {
  return (data, ...appendToUrl) => {
    if(method === GET && data) { // convert object to url parameters & append to extra urls
      appendToUrl.push(formatParams(data));
    }

    if(window.token) {
      headers.token = window.token;
    }
    return new Promise((f, r) => {
      fetch(`/${window.env}${url}${appendToUrl.join('')}`, {
        method,
        body: method === GET ? undefined : JSON.stringify(data),
        headers
      }).then(res => {
        if(res.ok) {
          return res.json();
        }else {
          console.log('else res')
          throw new Error(res);
        }
      }).then(res => {
      console.log('f before catch')
        f(res);
      }).catch(res => {
        console.log('catch')
        f({status: 500})
      });
    });
  };
};
