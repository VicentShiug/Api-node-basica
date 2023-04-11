// import http from 'http';
const http = require('http')

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    if (req.url === '/produto') {
      res.end(JSON.stringify({
        message: 'Rota dos produtos aqui'
      }));
    }
    console.log('Olá')

    if (req.url === '/usuarios') {
      res.end(JSON.stringify({
        message: 'Rota dos Usuário'
      }));
    }

    // res.end(JSON.stringify({
    //   message: 'Olá mundo!'
    // }));
  })
  .listen(3333, () => console.log('Ta raondo na porta 3333')) 