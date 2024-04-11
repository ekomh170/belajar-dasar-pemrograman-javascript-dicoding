/**
 * TODO:
 * 1. Buatlah variabel currency yang merupakan Map dengan kriteria:
 *   - key "USD", value 14000
 *   - key "JPY", value 131
 *   - key "SGD", value 11000
 *   - key "MYR", value 3500
 * 2. Buatlah variabel priceInIDR yang bernilai dari hasil perkalian:
 *     - priceInJPY dengan nilai currency JPY
 */

const priceInJPY = 5000;

// Tulis kode di bawah ini

// 1. Membuat variabel currency sebagai Map dengan kriteria yang ditentukan
let currency = new Map([
    ["USD", 14000],
    ["JPY", 131],
    ["SGD", 11000],
    ["MYR", 3500]
]);

// 2. Menghitung nilai priceInIDR dengan memperkalian priceInJPY dengan nilai currency JPY
let priceInIDR = priceInJPY * currency.get("JPY");

// Menampilkan nilai priceInIDR
console.log("Price in IDR:", priceInIDR);

