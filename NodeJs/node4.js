const http = require('http');
const fs = require('fs');
const fileContent = fs.readFileSync('read.html');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end(fileContent);
});

const port = 80;
const hostname = '127.0.0.1';
// server.listen(80, '127.0.0.1', () => {
server.listen(port, hostname, () => {
    // console.log("Listening on port 80 - ");
    console.log(`server runnig at http://${hostname}:${port}`);
});