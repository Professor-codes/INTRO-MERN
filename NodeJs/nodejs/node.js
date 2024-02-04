const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const index = fs.readFileSync('index.html');
const home = fs.readFileSync('home.html');
const about = fs.readFileSync('about.html');
const contact = fs.readFileSync('contact.html');
const more = fs.readFileSync('more.html');

const server = http.createServer((req, res) => {
    console.log(req.url);
    url = req.url;

    res.statusCode = 200;
    res.setHeader('content-type', 'text/html');
    if (url == '/') {
        res.end(index);
    }
    else if (url == '/home') {
        res.end(home)
    }
    else if(url == '/about'){
        res.end(about);
    }
    else if (url == '/contact') {
        res.end(contact);
    }
    else if (url == '/more') {
        res.end(more);
    }
    else {
        res.statusCode = 404;
        res.end("<h1>404 Page not found!</h1>")
    }
});

server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}`);
});