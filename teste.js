const http = require('http')


http.get('http://localhost:3333', (resp) => {
  let data = '';

  // Um bloco de dados foi recebido.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // Toda a resposta foi recebida. Exibir o resultado.
  resp.on('end', () => {
    console.log(JSON.parse(data).explanation);
  });


})