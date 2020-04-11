class EasyHTTP {
  async get(url) {
    const response = await fetch(url);
    const responseData = await response.json();
    return responseData;
  }

  async post(url, data) {
    const response = await fetch(url, { method: 'POST', headers: { 'Content-type': 'Application/json' }, body: JSON.stringify(data) });
    const responseData = response.json();
    return responseData;
  }

  async put(url, data) {
      const response = await fetch(url, { method: 'PUT', headers: { 'Content-type': 'Application/json' }, body: JSON.stringify(data) });
      const responseData = await response.json();
      return responseData;
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
