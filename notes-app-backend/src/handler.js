const { nanoid } = require("nanoid");
const notes = require("./notes");

const addNoteHandler = (request, h) => {
    const { title, tags, body } = request.payload;
    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const newNote = {
        title, tags, body, id, createdAt, updatedAt,
    };

    notes.push(newNote);

    const isSuccess = notes.filter((note) => note.id === id).length > 0;
    if (isSuccess) {
        const response = h.response({
          status: 'success',
          message: 'Catatan berhasil ditambahkan. Halo, selamat datang di server!',  // Tambahkan pesan di sini
          data: {
            noteId: id,
          },
        });
        response.code(201); // Set response code 201 untuk sukses
        return response;
    }
    
    const response = h.response({
        status: 'fail',
        message: 'Catatan gagal ditambahkan',
    });
    response.code(500); // Set response code 500 untuk kegagalan
    return response;
};

module.exports = { addNoteHandler };
