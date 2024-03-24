class Api {
  constructor({ baseUrl, headers }) {
    // constructor body
    this.baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    // if the server returns an error, reject the promise
    return Promise.reject(`Error ${res.status}`);
  }

  getCards() {
    return fetch(this.baseUrl + "/items", {
      method: "GET",
    }).then(this._checkResponse);
  }

  addItem({ name, imageUrl, weather }) {
    return fetch(this.baseUrl + "/items", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name,
        imageUrl,
        weather,
      }),
    }).then(this._checkResponse);
  }

  deleteItem() {
    return fetch(this.baseUrl + "/items/:id", {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }
}

export default Api;
