const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const html = fs.readFileSync('./index.html', 'utf-8');
  res.end(html);
});

server.listen(3001, () => {
  console.log('server is listening on port: 3001...');
});