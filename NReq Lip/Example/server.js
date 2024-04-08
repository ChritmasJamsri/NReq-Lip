const http = require('http');
const NReq = require('./NReq');

const PORT = process.env.PORT || 9818;

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/hi') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hi, this is your call in GET method.');
    } else if (req.method === 'POST' && req.url === '/hi') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hi, this is your call in POST method.');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`Server started listening on port ${PORT}`);
});
