/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */


/*
//Jawaban 1
const fs = require('fs');
 
const data = fs.readFileSync('input.txt', 'UTF-8');
console.log(data);
 
const writableStream = fs.createWriteStream('output.txt');
*/

/*
//Jawaban 2
const fs = require('fs');

// Membuat readable stream untuk membaca data dari 'input.txt'
const readableStream = fs.createReadStream('input.txt', 'utf-8');

// Membuat writable stream untuk menulis data ke 'output.txt'
const writableStream = fs.createWriteStream('oatput.txt');

// Menyambungkan readable stream dengan writable stream
readableStream.pipe(writableStream);

// Untuk menangani error jika terjadi
readableStream.on('error', (err) => {
    console.error('Error reading the file:', err);
});

writableStream.on('error', (err) => {
    console.error('Error writing to the file:', err);
});
*/

//Jawaban 3
const fs = require('fs');

// Membuat readable stream dengan highWaterMark 15 karakter
const readableStream = fs.createReadStream('input.txt', {
    encoding: 'utf-8',
    highWaterMark: 15
});

// Membuat writable stream untuk menulis ke output.txt
const writableStream = fs.createWriteStream('output.txt');

// Membaca setiap bagian dari stream
readableStream.on('data', (chunk) => {
    // Menulis setiap bagian teks ke writable stream dengan tambahan '\n'
    writableStream.write(chunk + '\n');
});

// Menangani error yang mungkin terjadi pada readable stream
readableStream.on('error', (err) => {
    console.error('Error reading the file:', err);
});

// Menangani error yang mungkin terjadi pada writable stream
writableStream.on('error', (err) => {
    console.error('Error writing to the file:', err);
});

