const fetch = require("cross-fetch");
/*
- Mediante la libreria: fetch
- Hacer una petición de tipo: POST
- Endpoint: https://jsonplaceholder.typicode.com/posts
- Return: el total del "response"
*/

async function fnTest() {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  const REQUEST = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: 101 }),
  };

  let response = await fetch(URL, REQUEST);
  let data = await response.json();

  return data;
}

module.exports = fnTest;
