const { addNote, getAllNotes, getNoteById, deleteNoteById, updateNoteById,  } = require('./notes');

// Handler untuk menambahkan catatan
const addNoteHandler = (request, h) => {
  try {
      const { title, tags, body } = request.payload;
      const noteId = addNote(title, tags, body);

      return h.response({
          status: 'success',
          message: 'Catatan berhasil ditambahkan',
          data: { noteId },
      }).code(201);
  } catch (error) {
      console.error(error); // Log error untuk debugging
      return h.response({
          status: 'fail',
          message: 'Terjadi kesalahan pada server',
      }).code(500);
  }
};

// Handler untuk menampilkan semua catatan
const getAllNotesHandler = (request, h) => {
    try {
        const notes = getAllNotes();
        return h.response({
            status: 'success',
            message: 'Selamat datang di notes',
            data: { notes },
        }).code(200);
    } catch (error) {
        console.error(error); // Log error untuk debugging
        return h.response({
            status: 'fail',
            message: 'Terjadi kesalahan pada server',
        }).code(500);
    }
};

// Handler untuk mendapatkan catatan berdasarkan ID
const getNoteByIdHandler = (request, h) => {
    try {
        const { id } = request.params;
        const note = getNoteById(id);

        if (note) {
            return h.response({
                status: 'success',
                data: { note },
            }).code(200);
        }

        return h.response({
            status: 'fail',
            message: 'Catatan tidak ditemukan',
        }).code(404);
    } catch (error) {
        console.error(error); // Log error untuk debugging
        return h.response({
            status: 'fail',
            message: 'Terjadi kesalahan pada server',
        }).code(500);
    }
};

// Handler untuk memperbarui catatan berdasarkan ID
const editNoteByIdHandler = (request, h) => {
    try {
        const { id } = request.params;
        const { title, tags, body } = request.payload;
        const updatedAt = new Date().toISOString();

        const isUpdated = updateNoteById(id, { title, tags, body, updatedAt });

        if (isUpdated) {
            return h.response({
                status: 'success',
                message: 'Catatan berhasil diperbarui',
            }).code(200);
        }

        return h.response({
            status: 'fail',
            message: 'Gagal memperbarui catatan. ID tidak ditemukan',
        }).code(404);
    } catch (error) {
        console.error(error); // Log error untuk debugging
        return h.response({
            status: 'fail',
            message: 'Terjadi kesalahan pada server',
        }).code(500);
    }
};

// Handler untuk menghapus catatan berdasarkan ID
const deleteNoteByIdHandler = (request, h) => {
    try {
        const { id } = request.params;
        const isDeleted = deleteNoteById(id);

        if (isDeleted) {
            return h.response({
                status: 'success',
                message: 'Catatan berhasil dihapus',
            }).code(200);
        }

        return h.response({
            status: 'fail',
            message: 'Gagal menghapus catatan. ID tidak ditemukan',
        }).code(404);
    } catch (error) {
        console.error(error); // Log error untuk debugging
        return h.response({
            status: 'fail',
            message: 'Terjadi kesalahan pada server',
        }).code(500);
    }
};

module.exports = {
    addNoteHandler,
    getAllNotesHandler,
    getNoteByIdHandler,
    editNoteByIdHandler,
    deleteNoteByIdHandler,  // Handler untuk DELETE
};
