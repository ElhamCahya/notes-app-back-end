const { addNoteHandler } = require("./handler");

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return h.response({
        message: 'Halo, selamat datang di server by Elham Cahya Rahmadani!'
      }).code(200);
    },
  },
];

module.exports = routes;
