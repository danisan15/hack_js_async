const axios = require("axios");
/*
- Mediante la libreria: axios
- Hacer una petición de tipo: POST
- Endpoint: https://jsonplaceholder.typicode.com/posts
- Return: "response" global de la petición 
*/

async function fnTest() {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  const REQUEST = { id: 101 };
  let response = await axios.post(URL, REQUEST);
  return response;
}

module.exports = fnTest;
