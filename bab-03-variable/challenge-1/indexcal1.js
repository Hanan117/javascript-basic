console.log("===challange==")

const namaProduk = "pulpen";
const hargaSatuan = 10000;
const jumlahDibeli = 5;
const tarifPajak = 0.11;

const subtotal = hargaSatuan * jumlahDibeli;
const pajak = subtotal * tarifPajak;
const totalBayar = subtotal + pajak;

console.log(`Produk : ${namaProduk}`);
console.log(`Harga  : ${hargaSatuan}`);
console.log(`Jumlah : ${jumlahDibeli}`);
console.log(`Subtotal : ${subtotal}`);
console.log(`Pajak  : ${pajak}`);
console.log(`Total  : ${totalBayar}`);
