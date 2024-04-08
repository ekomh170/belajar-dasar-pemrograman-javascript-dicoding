// Tipe Data
// Tipe data merupakan pengklasifikasian data berdasarkan jenisnya. Pada JavaScript terdapat beberapa tipe data sebagai berikut:


// 1. Undefined
// Tipe data ini terbentuk ketika sebuah variabel tidak memiliki nilai. Artinya, ketika kita mendeklarasikan variabel tanpa menginisialisasikan nilainya, variabel tersebut menjadi undefined.

let x_undefined;
console.log(typeof(x_undefined));

/* output: undefined */
// Fungsi typeof() digunakan untuk memastikan tipe data pada variabel dengan mengembalikan tipe data tersebut dalam bentuk teks.
// 1. Undefined


// 2. Numbers
// Nilai dari tipe data number adalah angka.

let x_number = 10;
console.log(typeof(x_number))

/* output: number */

let y_number = 17.25;
console.log(typeof(y_number))

/* output: number */
// 2. Numbers



// 3. Operator Data - Perhitungan Aritmatika 
// Pada tipe data number, kita juga dapat melakukan perhitungan aritmatika seperti penjumlahan, pengurangan, perkalian, dsb. Berikut operator yang dapat kita gunakan dalam perhitungan aritmatika pada tipe data number:

let a = 12;
let b = 9;

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)
// 3. Operator Data - Perhitungan Aritmatika 


// 4. Operator Data - Increment dan Decrement
// Pada operator aritmatika juga terdapat operator increment (++) dan decrement (--). Operator increment dan decrement digunakan untuk menambahkan atau mengurangi nilai 1 pada nilai variabel yang ada sekarang.

let postfix = 5;
console.log(postfix++);
/* output: 5 */
console.log(postfix);
/* output: 6 */

let prefix = 5;
console.log(++prefix);
/* output: 6 */
// 4. Operator Data - Increment dan Decrement


// 5. BigInt
// Untuk membedakan tipe BigInt dan Number, tambahkan karakter n di akhir angka. Contohnya adalah seperti kode di bawah ini. Bandingkan dengan yang bertipe Number.

const bigNumber = 1234567890123456789012345678901234567890n;
const myInt = 1234567890123456789012345678901234567890;

console.log(bigNumber);
console.log(myInt);

/* output
1234567890123456789012345678901234567890n
1.2345678901234568e+39
*/

// Meskipun digunakan untuk menyimpan angka dengan nilai besar, namun BigInt tetap bisa digunakan untuk nilai yang lebih kecil.

const bigIntButSmall = 7n;

// BigInt untuk operasi aritmatika pada umumnya. Yang membedakan adalah pada operasi pembagian, hasilnya akan dibulatkan ke bawah dan tanpa mengandung nilai desimal. 

console.log(5n + 2n);
console.log(5n - 2n);
console.log(5n * 2n);
console.log(5n / 2n);
console.log(5n % 2n);

/* output
7n
3n
10n
2n; Bukan 2.5n
1n
*/
// 5. BigInt


// 6. String
// string yang merupakan sebuah teks. Untuk menetapkan nilai sebagai string pada variabel gunakan tanda petik satu (‘) atau petik dua (“) di antara teksnya. 

let greet2 = "Hello";
console.log(typeof(greet2))

/* output: string */

// Tidak ada perbedaan antara menggunakan petik satu atau petik dua. Anda dapat menggunakan tanda petik secara bergantian, khususnya jika Anda memiliki teks yang mengandung tanda petik.

const question = '"What do you think of JavaScript?" I asked';
console.log(question)

/* output: "What do you think of JavaScript?" I asked */

// const answer = '"I think it's awesome!" he answered confidently';
const answer = '"I think it\'s awesome!" he answered confidently';
console.log("Windows path: C:\\Program Files\\MyProject");
// kode di atas akan menghasilkan eror. Solusinya, gunakan backslash(\) untuk mengurangi ambiguitas dalam tanda petik. 

console.log(answer);

// String, kita juga dapat menggunakan operator plus (+). Operator tersebut berfungsi untuk menggabungkan dua teks yang terpisah menjadi satu buah teks.

let greet = "Hello";
let moreGreet = greet + greet;
console.log(moreGreet);

/* output: HelloHello */

// Ingat, string concatenation seperti di atas akan menggabungkan string apa adanya, sehingga jika Anda ingin menggabungkan dua kata atau lebih perlu menambahkan spasi sendiri.

// Selain concatenation, string pada JavaScript juga mendukung string interpolation. Sederhananya, kita bisa memasukkan variabel ke dalam sebuah string template. Contohnya adalah seperti berikut:

const myName = "Luke";
console.log(`Hello, my name is ${myName}.`);

/* output: Hello, my name is Luke. */
// 6. String

// 7. Boolean

// Boolean hanya memiliki dua nilai, yaitu true atau false. Tipe data ini menjadi kunci utama dalam penentuan logika. Kita akan banyak menggunakannya nanti dalam materi if/else statement. Untuk menetapkan nilai boolean pada variabel, gunakan keyword true atau false seperti di bawah ini.

let x = true;
let y = false;

console.log(typeof(x))
console.log(typeof(y))

/* output: 
boolean
boolean
*/

// Kita juga bisa menggunakan operator komparasi seperti lebih dari (>) atau kurang dari (<). Contohnya:

const c = 10;
const d = 12;

let isGreater = c > d;
let isLess = c < d;

console.log(isGreater);
console.log(isLess);

/* output:
false
true
*/

// 7. Boolean


// 8. Null

// Tipe berikutnya adalah null. Serupa dengan undefined, namun null perlu diinisialisasikan pada variabel. Null biasa digunakan sebagai nilai sementara pada variabel, tapi sebenarnya nilai tersebut “tidak ada”.

let someLaterData = null;
console.log(someLaterData);

/* output:
null
*/

// 8. Null


// 9. Symbol
// Symbol adalah tipe data baru yang dikenalkan pada ES6. Tipe data Symbol digunakan untuk menunjukkan identifier yang unik. Ketika membuat Symbol.

const id = Symbol("id");

console.log(id);

/* output
Symbol(id)
*/

// Symbol disebut sebagai identifier yang unik karena meskipun kita membuat dua variabel symbol dengan nama atau deskripsi yang sama, kedua nilainya tetap dianggap berbeda.

const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 == id2);

/* output
false
*/


// 9. Symbol

// Tipe Data