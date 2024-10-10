class Tiger {
    constructor() {
      this.strength = Math.floor(Math.random() * 100);
    }
   
    growl() {
      console.log('RAWWWWRRRRRRR!')
    }
  }

module.exports = Tiger; // Ekspor kelas Tiger langsung, tanpa menggunakan objek {}
