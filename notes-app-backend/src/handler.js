const { nanoid } = require('nanoid');
const { addNote, getAllNotes, getNoteById } = require('./notes');

// Handler untuk menambahkan catatan
const addNoteHandler = (request, h) => {
    const { title, tags, body } = request.payload;
    const noteId = addNote(title, tags, body);

    const response = h.response({
        status: 'success',
        message: 'Catatan berhasil ditambahkan',
        data: {
            noteId,
        },
    });
    response.code(201);
    return response;
};

// Handler untuk menampilkan semua catatan
const getAllNotesHandler = (request, h) => {
    const notes = getAllNotes();
    const response = h.response({
        status: 'success',
        data: {
            notes,
        },
    });
    response.code(200);
    return response;
};

// Handler untuk mendapatkan catatan berdasarkan ID
const getNoteByIdHandler = (request, h) => {
    const { id } = request.params;
    const note = getNoteById(id);

    if (note) {
        return {
            status: 'success',
            data: {
                note,
            },
        };
    }

    const response = h.response({
        status: 'fail',
        message: 'Catatan tidak ditemukan',
    });
    response.code(404);
    return response;
};

module.exports = {
    addNoteHandler,
    getAllNotesHandler,
    getNoteByIdHandler,
};
