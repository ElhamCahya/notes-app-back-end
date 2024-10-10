const http = require('http');
 
const requestListener = (request, response) => {
    // Tentukan respons tipe konten sesuai kebutuhan
    const { method, url } = request;

    if (url === '/') {
        if (method === 'GET') {
            response.setHeader('Content-Type', 'text/html');
            response.statusCode = 200;
            response.end(JSON.stringify({
                message: 'Ini adalah homepage',
            }));
        } else {
            response.setHeader('Content-Type', 'text/html');
            response.statusCode = 400;
            response.end(JSON.stringify({
                message: `Halaman tidak dapat diakses dengan ${method}`
            }));
        }
    } else if (url === '/about') {
        if (method === 'GET') {
            response.setHeader('Content-Type', 'text/html');
            response.statusCode = 200;
            response.end(JSON.stringify({
                message: 'Halo! ini adalah halaman about'
            }));
        } else if (method === 'POST') {
            let body = [];
    
            request.on('data', (chunk) => {
                body.push(chunk);
            });
 
            request.on('end', () => {
                body = Buffer.concat(body).toString();
                try {
                    const { name } = JSON.parse(body);
                    response.setHeader('Content-Type', 'text/html');
                    response.statusCode = 200;
                    response.end(JSON.stringify({
                        message: `halo, ${name}! Ini adalah halaman about`
                    }));
                } catch (error) {
                    response.setHeader('Content-Type', 'application/json');
                    response.statusCode = 400;
                    response.end(JSON.stringify({ message: 'Bad Request: Invalid JSON' }));
                }
            });
        } else {
            response.setHeader('Content-Type', 'text/html');
            response.statusCode = 400;
            response.end(JSON.stringify({
                message: `Halaman tidak dapat diakses menggunakan ${method} request`,
        }));
        }
    } else {
        response.setHeader('Content-Type', 'application/json');
        response.statusCode = 404;
        response.end(JSON.stringify({
            message: 'Halaman tidak ditemukan!',
        }));
    }
};
 
const server = http.createServer(requestListener);
 
const port = 5000;
const host = 'localhost';
 
server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});
