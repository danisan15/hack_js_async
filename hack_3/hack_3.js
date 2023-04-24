const axios = require("axios");
/*
- Mediante la libreria: axios
- Hacer una petición de tipo: PUT
- Endpoint: https://jsonplaceholder.typicode.com/posts/1
- Return: "response" global de la petición 
*/

async function fnTest() {
  const URL = "https://jsonplaceholder.typicode.com/posts/1";
  const REQUEST = { id: 1 };

  let response = await axios.put(URL, REQUEST);

  return response;
}

module.exports = fnTest;
