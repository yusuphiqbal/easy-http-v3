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

  async delete(url) {
    const response = await fetch(url, { method: 'DELETE', headers: { 'Content-type': 'Application/json' } });
    const responseData = await 'Resourse deleted';
    return responseData;
  }
}
