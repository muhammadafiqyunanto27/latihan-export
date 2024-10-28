const { kali, bagi } = require('./utils/calculator.js');
const { capitalize } = require('./utils/stringUtils.js');

const hasilKali = kali(5, 3);
const hasilBagi = bagi(10, 2);
const teks = "halo dunia";
const teksCapitalized = capitalize(teks);

console.log("Hasil kali:", hasilKali); // Hasil kali: 15
console.log("Hasil bagi:", hasilBagi); // Hasil bagi: 5
console.log("Teks setelah capitalize:", teksCapitalized); // Teks setelah capitalize: Halo dunia
