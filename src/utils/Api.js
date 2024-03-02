const Api = ({ baseUrl }) => {
  baseUrl = "http://localhost:3001";
}

  _checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  // if the server returns an error, reject the promise
  return Promise.reject(`Error ${res.status}`);
};

getCards();
return fetch(baseUrl + "/items", {
  method: "GET",
}).then(checkResponse);

addCards();
return fetch(baseUrl + "/items", {
  method: "POST",
  body: JSON.stringify({
    name: name,
    imageUrl: about,
    weather: weather,
  }),
}).then(checkResponse);

deleteCards();
return fetch(baseUrl + "/items/:id", {
  method: "DELETE",
}).then(checkResponse);

export default Api;
