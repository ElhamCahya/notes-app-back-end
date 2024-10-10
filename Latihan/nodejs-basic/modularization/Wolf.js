class Wolf {
    constructor() {
        this.strength = Math.floor(Math.random() * 100); // Perbaikan typo "strenght" menjadi "strength"
    }

    howl() {
        console.log('awooo');
    }
}

module.exports = Wolf; // Ekspor kelas Wolf langsung, tanpa menggunakan objek {}
