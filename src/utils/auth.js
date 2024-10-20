class Auth {
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

  _addToStorage(res) {
    localStorage.setItem("jwt", res.token);
  }

  registerUser({ name, avatar, email, password }) {
    return fetch(this.baseUrl, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name,
        avatar,
        email,
        password,
      }),
    }).then(this._checkResponse);
  }

  loginUser({ email, password }) {
    return fetch(this.baseUrl, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then(this._addToStorage)
      .then(this._checkResponse);
  }
}

export default Auth;
