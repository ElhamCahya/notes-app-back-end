const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5000, // Atur port sesuai kebutuhan
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',  // Bedakan host untuk dev dan production
    routes: {
        cors: {
            origin: ['*'],
        },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
