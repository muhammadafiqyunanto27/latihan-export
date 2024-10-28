// app.js
const { tambah, kurang } = require('./mathOperations.js');

const kali = require("./mathOperations.js").kali

const hasilTambah = tambah(5, 3);
const hasilKurang = kurang(10, 4);
const hasilKali = kali(6, 2);

console.log("Hasil tambah:", hasilTambah); // Hasil tambah: 8
console.log("Hasil kurang:", hasilKurang); // Hasil kurang: 6
console.log("Hasil kali:", hasilKali); // Hasil kali: 12
