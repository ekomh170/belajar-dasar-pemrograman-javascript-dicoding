// Variable
//  Variabel umumnya digunakan untuk menyimpan informasi atau nilai yang akan dikelola dalam sebuah program.

// Pada JavaScript setidaknya ada tiga cara untuk mendeklarasikan sebuah variabel, yaitu menggunakan keyword var, let, dan const. Pada versi ECMAScript 2015 (ES6) dikenalkan deklarasi variabel dengan let dan const untuk menggantikan var yang dinilai kontroversial dan rawan menimbulkan bug.

// Let & Var
let lastNameShort1;
// Kode untuk mendeklarasikan variabel seperti di atas juga dikenal dengan declaration statement.
lastNameShort1 = "Haryono";
console.log(lastNameShort1);

/* output
Haryono
*/

// langsung menginisialisasi nilai variabel setelah mendeklarasikannya
var lastNameShort2 = "Haryono";
// menginisialisasikan nilai ke dalam sebuah variabel dengan tanda sama dengan (=) ini disebut dengan assignment expression.
console.log(lastNameShort2);

/* output
Haryono
*/
// Let & Var


// merupakan expression 
// Kita kembali bertemu dengan istilah statement dan expression. Karena expression pasti menghasilkan nilai, sehingga mereka bisa muncul di mana pun dalam program JavaScript. Sementara itu, statement merujuk pada aksi. Sehingga, pada bagian kode tertentu yang membutuhkan nilai tidak bisa kita isi dengan sebuah statement. 

// let fullName = let lastName; 
// Error karena let lastName adalah sebuah statement untuk deklarasi variabel. Statement tidak bisa berada di posisi expression.

// let fullName = (lastName = "Skywalker"); 
// (lastName = "Skywalker") merupakan expression, sehingga kode ini tidak error.

// let fullName = "Luke" + "Skywalker"; 
// "Luke" + "Skywalker" juga merupakan expression, sehingga kode ini tidak error.
// merupakan expression


// Const merupakan kependekan dari constant kita akan mendeklarasikan sebuah variabel dengan const ketika ingin variabel bernilai konstan dan tidak bisa diubah setelah diinisialisasi nilainya. 

const z = 100;
console.log(z);
z = 200;
console.log(z)

// Jika menginisialisasi kembali nilai variabel yang menggunakan const, kita akan mendapati eror “TypeError: Assignment to constant variable.”
/* TypeError: Assignment to constant variable. */