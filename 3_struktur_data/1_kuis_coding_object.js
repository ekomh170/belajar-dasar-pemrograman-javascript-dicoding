/**
 * TODO
 * 1. Buatlah variabel dengan nama restaurant yang bertipe object dengan ketentuan berikut:
 *    - Memiliki properti bernama "name"
 *       - Bertipe data string
 *       - Bernilai "Bakso Mang Dicoding".
 *    - Memiliki properti bernama "city"
 *       - Bertipe data string
 *       - Bernilai "Bandung".
 *    - Memiliki properti "favorite drink"
 *       - Bertipe data string
 *       - Bernilai "Es Teh".
 *    - Memiliki properti "favorite food"
 *       - Bertipe data string
 *       - Bernilai "Bakso".
 *    - Memiliki properti "isVegan"
 *       - Bertipe data boolean
 *       - Bernilai false.
 *
 * 2. Buatlah variabel bernama name.
 *    Kemudian isi dengan nilai name dari properti object restaurant
 * 3. Buatlah variabel bernama favoriteDrink.
 *    Kemudian isi dengan nilai "favorite drink" dari properti object restaurant
 */

// Tulis kode di bawah ini

// 1. Membuat variabel restaurant dengan tipe object
let restaurant = {
    name: "Bakso Mang Dicoding",
    city: "Bandung",
    "favorite drink": "Es Teh",
    "favorite food": "Bakso",
    isVegan: false
};

// 2. Membuat variabel name dan mengisi dengan nilai name dari properti object restaurant
let name = restaurant.name;

// 3. Membuat variabel favoriteDrink dan mengisi dengan nilai "favorite drink" dari properti object restaurant
let favoriteDrink = restaurant["favorite drink"];

// Melakukan pengecekan dengan menampilkan nilai variabel name dan favoriteDrink
console.log(name); // Output: Bakso Mang Dicoding
console.log(favoriteDrink); // Output: Es Teh


