console.log("===BAB 5===")

//Nomor 1
console.log("Aritmatika")

const panjang = 15;
const lebar = 8;

const luas = panjang * lebar;
const keliling = 2* (panjang + lebar)

console.log("Luas      : " + luas);
console.log("Keliling  : " + keliling);



//Nomor 2
console.log("Modulus")


const angka = 29;

console.log("29 % 2 = " + (angka % 2));
console.log("29 % 4 = " + (angka % 4));
console.log("29 % 5 = " + (angka % 5));



//nomor 3
console.log("increment dan decrement")

let stok = 20;

stok += 5; 

stok -= 5;

console.log(stok);



//nomor 4
console.log("Assignment Operator")

let saldo = 100000;

saldo += 50000;

saldo -= 25000;

saldo /= 5;

saldo *= 2;

console.log(saldo);



//nomor 5
console.log("Kasir")

console.log("====Halo Kasir====")

const harga = 18000;
const jumlah = 6;
const diskon = 10000;

let subtotal = harga * jumlah;
let total = subtotal - diskon;

console.log("Subtotal :", subtotal);
console.log("Total    :", total);

console.log("====THANK YOUU====")

//nomor 6
console.log("Comparison")

console.log(10 > 5); //true
console.log(10 < 5); //false
console.log(10 >= 10); //true
console.log(5 <= 3); //false
console.log(8 != 8); //false
console.log(12 !== "12"); //true


//Nomor 7
console.log("== vs ===")

console.log(10 == "10"); // true
console.log(10 === "10"); // false
console.log(false == 0); // true
console.log(false === 0); // false
console.log(null == undefined); // true
console.log(null === undefined); // false


//Nomor 8
console.log("==LOGIC==")

let sudahLogin = true;
let sudahVerifikasi = false;
let premium = true;

let bolehMasuk;
console.log(sudahLogin && sudahVerifikasi);


let dapatFiturPremium;
console.log(premium || sudahVerifikasi);



//Nomor 9
console.log("==OP NOT==")

let lampuNyala = true;

console.log(!lampuNyala); 




//Nomor 10
console.log("==Prioritas OP==" )

console.log(8 + 4 * 2); // 16
console.log((8 + 4) * 2); //24
console.log(20 / 5 + 3 * 2); // 10



// Nomor 11
console.log("==Debugging==")

let number = 20;  //outpunya 25

number += 5; //dikarenakan 20 ditambah dengan 5

console.log(number); //dengan memberikan =



//Nomor 12
console.log("==CODE==")

let umur = "18";

console.log(umur > 17); // true : karena 18 lebih besar dari 17 
console.log(umur === 18); // false : karena berbeda type yaitu string dan number


//Nomor 13
console.log("==CASE==")

let age = 20;
let punyaKTP = true;
let sudahDaftar = true;

let lolos = (punyaKTP && sudahDaftar);

console.log(lolos);


// nomor 14
console.log("==MINI KASIR==")

const hargaBuku = 45000;
const jumlahBeli = 4;
const discount = 15000;

let beftotal = harga * jumlah; // 180
let result = beftotal - discount; // 165

console.log("Beftotal :", beftotal);
console.log("result    :", result);

console.log("====THANK YOUU====")


// nomor 15
console.log("==LAST==")


let x = 12;

x += 8; // 20
x *= 2;// 40
x--; // 39
x /= 3; //13

console.log(x);


// nomor 16
console.log("==CHALLENGE==")

const tugas = 80;
const uts = 75;
const uas = 90;

let NilaiAkhir = (tugas + uts + uas) / 3; // 245 : 3 = 81

const lulus = NilaiAkhir >= 75;

console.log("Nilai Akhir : " + NilaiAkhir);
console.log("Lulus       : " + lulus);















