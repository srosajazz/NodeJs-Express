const http = require('http');
const url = require('url');

function handler(req, res) {

    // console.log(req.url);
    const parsedUrl = url.parse(req.url, true);
    // console.log(parsedUrl);


    if(parsedUrl.pathname === '/'){
        res.writeHead(200, {'Content-type': 'text/plain'});
        res.write('Hello, I am a webserver!');
        res.end();
    } else {
        //HTTP ERROR 400
        res.writeHead(400, {'Content-type': 'text/plain'});
        res.end();
    }
}

const server = http.createServer(handler);
server.listen(3000);