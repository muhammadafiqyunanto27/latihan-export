// app.js
const { celsiusToFahrenheit, fahrenheitToCelsius } = require('./conversion.js');
const { kuadrat } = require('./mathUtils.js');

const suhuCelsius = 30;
const suhuFahrenheit = celsiusToFahrenheit(suhuCelsius);
const suhuCelsiusAfterConvert = fahrenheitToCelsius(suhuFahrenheit) 
const hasilKuadrat = kuadrat(suhuFahrenheit);

console.log("Suhu dalam Fahrenheit:", suhuFahrenheit); // Contoh: Suhu dalam Fahrenheit: 86
console.log("Suhu dalam Celsius:", suhuCelsiusAfterConvert);
console.log("Kuadrat dari suhu Fahrenheit:", hasilKuadrat); // Contoh: Kuadrat dari suhu Fahrenheit: 7396
