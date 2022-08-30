const http = require('http');
const { parse } = require('path');
const url = require('url');
const port = 1337;
const host = 'localhost';

const server = http.createServer(function (req, res) {
    const parsedURL = url.parse(req.url, true);
    console.log(parsedURL.pathname)
    if (parsedURL.pathname == '/echo' && parsedURL.query.message) {
        res.statusCode = 200;
        res.setHeader('Cache-control', 'no-cache');
        res.end(parsedURL.query.message);
    } else
    if (parsedURL.pathname == "/echoechoecho" && parsedURL.query.message){
        res.statusCode = 200;
        res.setHeader('Cache-control', 'no-cache');
        let message = parsedURL.query.message;
        let msg = `${message} ${message} ${message}`
        res.end(msg);
    } else {
        res.statusCode = 404;
        res.end("Page not found");
    }
});

server.listen(port, host, function () {
    console.log('Web server is running on port 1337');
});