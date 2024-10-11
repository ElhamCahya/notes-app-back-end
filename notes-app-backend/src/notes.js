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

// Fungsi untuk memperbarui catatan berdasarkan ID
const updateNoteById = (id, { title, tags, body, updatedAt }) => {
    const noteIndex = notes.findIndex(note => note.id === id);

    if (noteIndex !== -1) {
        notes[noteIndex] = {
            ...notes[noteIndex], // Menggabungkan nilai lama dan yang baru
            title,
            tags,
            body,
            updatedAt,
        };
        return true; // Berhasil memperbarui catatan
    }

    return false; // Gagal memperbarui catatan (ID tidak ditemukan)
};

// Fungsi untuk menghapus catatan berdasarkan ID
const deleteNoteById = (id) => {
    const noteIndex = notes.findIndex(note => note.id === id);

    if (noteIndex !== -1) {
        notes.splice(noteIndex, 1); // Menghapus catatan berdasarkan indeks
        return true; // Berhasil menghapus catatan
    }

    return false; // Gagal menghapus catatan (ID tidak ditemukan)
};

module.exports = {
    addNote,
    getAllNotes,
    getNoteById,
    updateNoteById,
    deleteNoteById, // Export fungsi deleteNoteById
};
