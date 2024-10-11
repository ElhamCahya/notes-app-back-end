const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByIdHandler, deleteNoteByIdHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler, // Route untuk mendapatkan semua catatan
  },
  {
    method: 'GET',
    path: '/notes/{id}', // Route untuk mendapatkan catatan berdasarkan ID
    handler: getNoteByIdHandler, // Handler untuk mendapatkan catatan berdasarkan ID
  },
  {
    method: 'PUT',
    path: '/notes/{id}', // Route untuk mengubah catatan berdasarkan ID
    handler: editNoteByIdHandler, // Handler untuk mengubah catatan
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler
  },
];

module.exports = routes;
