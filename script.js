var fs = require('fs');
var http = require('http');

var server = http.createServer();
server.on('request', function (request, response) {
    response.setHeader('Content-Type', 'text/html; charset = utf-8');
    if (request.method === 'GET' && request.url === '/') {
        fs.readFile('./index.html', 'utf-8', function (err, data) {
            if (err) {
                response.statusCode = 500;
                response.write('Wewnętrzny błąd serwera.');
            } else {
                response.statusCode = 200;
                response.write(data);
            }
            response.end();
        })

    } else {
        response.statusCode = 404;
        response.write('Nieprawidłowa ścieżka dostępu. ');
        response.end();
    }
})

server.listen(9000, function () {
    console.log('Serwer pracuje bez zarzutu.');
});