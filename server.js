const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001')
  res.setHeader('Access-Control-Allow-Methods', 'PUT')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,X-Auth-Token');
  res.setHeader('Access-Control-Max-Age', 10);
  res.end('123');
});

server.listen(3000, () => {
  console.log('server is listening on port: 3000...');
});