class Api {
  constructor(baseUrl) {
    // constructor body
    this.baseUrl = baseUrl;
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

  addItem(item) {
    return fetch(this.baseUrl + "/items", {
      method: "POST",
      body: JSON.stringify({
        name: item.name,
        imageUrl: item.imageUrl,
        weather: item.weather,
      }),
    }).then(this._checkResponse);
  }

  deleteItem() {
    return fetch(this.baseUrl + "/items/:id", {
      method: "DELETE",
    }).then(this._checkResponse);
  }
}

export default Api;
