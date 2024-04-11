/**
 * TODO:
 * Buatlah sebuah variabel dengan nama evenNumber yang merupakan sebuah array dengan ketentuan:
 *   - Array tersebut menampung bilangan genap dari 1 hingga 100
 *
 * Catatan:
 *   - Agar lebih mudah, gunakanlah for loop dan logika if untuk mengisi bilangan genap pada array.
 */

// Tulis kode di bawah ini

// Membuat array evenNumber untuk menampung bilangan genap
let evenNumber = [];

// Loop dari 1 sampai 100 untuk menemukan bilangan genap
for (let i = 1; i <= 100; i++) {
    // Memeriksa apakah bilangan tersebut genap
    if (i % 2 === 0) {
        // Jika genap, tambahkan ke dalam array evenNumber
        evenNumber.push(i);
    }
}

// Menampilkan array evenNumber
console.log(evenNumber);

