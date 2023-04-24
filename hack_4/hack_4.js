const axios = require("axios");
/*
- Mediante la libreria: axios
- Hacer una petición de tipo: PATCH
- Endpoint: https://jsonplaceholder.typicode.com/posts/1
- Return: "response" global de la petición 
*/

async function fnTest() {
  const URL = "https://jsonplaceholder.typicode.com/posts/1";

  let response = await axios.patch(URL);

  return response;
}

module.exports = fnTest;
