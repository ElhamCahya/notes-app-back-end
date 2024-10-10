const Hapi = require('@hapi/hapi');
const routes = require('./routes'); // Pastikan file routes berada di folder yang tepat

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
    });

    // Daftarkan rute ke server
    server.route(routes);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
