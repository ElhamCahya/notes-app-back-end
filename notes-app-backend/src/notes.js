const { nanoid } = require('nanoid');

const notes = [];

// Fungsi untuk menambahkan catatan
const addNote = (title, tags, body) => {
    const note = {
        id: nanoid(16), // Menggunakan nanoid untuk menghasilkan ID unik
        title,
        tags,
        body,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    };
    notes.push(note);
    return note.id; // Mengembalikan ID dari catatan yang baru dibuat
};

// Fungsi untuk mendapatkan semua catatan
const getAllNotes = () => {
    return notes;
};

// Fungsi untuk mendapatkan catatan berdasarkan ID
const getNoteById = (id) => {
    return notes.find(note => note.id === id);
};

module.exports = {
    addNote,
    getAllNotes,
    getNoteById,
};
