// console.log("Hello NodeJs");

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    // res.setHeader('content-type', 'text/plain');
    res.setHeader('content-type', 'text/html');
    res.end(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            body {
                background-color: black;
            }
    
            .container {
                color: white;
                border: 1px solid white;
                background-color: #d6aefa;
                width: 640px;
                margin: auto;
                padding: 26px;
                text-align: center;
            }
    
            h1 {
                background-color: rgba(162, 150, 173, 0.267);
            }
    
            .btn1,
            .btn2 {
                width: 100px;
                height: 34px;
            }
            .btn1:hover, .btn2:hover{
                cursor:pointer;
            }
        </style>
    </head>
    
    <body>
        <div class="container">
            <h1>This is heading</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, odio. Magni repellat aperiam labore dolorum
                at quos vero sint illum modi, ipsum repudiandae id eius reprehenderit minima, natus dignissimos ipsa maiores
                molestias reiciendis quo doloremque nisi distinctio. Eveniet atque explicabo vel, error veniam incidunt
                impedit?</p>
            <button class="btn1">Submit</button>
            <button class="btn2">Help</button>
        </div>
    </body>
    <script src="/node.js"></script>
    
    </html>`);
});

server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}/`);
});

