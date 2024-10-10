const { addNoteHandler, getAllNotesHandler } = require("./handler");

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
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler, // Tambahkan route untuk mendapatkan semua catatan
  },
];

module.exports = routes;
