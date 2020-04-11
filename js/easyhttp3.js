class EasyHTTP {
  async get(url) {
    const response = await fetch(url);
    const responseData = await response.json();
    return responseData;
  }

  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, { method: 'POST', headers: { 'Content-type': 'Application/json' }, body: JSON.stringify(data) })
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error))
    });
  }

  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, { method: 'PUT', headers: { 'Content-type': 'Application/json' }, body: JSON.stringify(data) })
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error))
    });
  }

  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, { method: 'DELETE', headers: { 'Content-type': 'Application/json' } })
        .then(response => response.json())
        .then(() => resolve('Resource deleted'))
        .catch(error => reject(error))
    });
  }
}
