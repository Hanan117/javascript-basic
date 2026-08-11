// nomor 12

const hargaBarang = 125000.50;
const jumlah = 3;

const harga = parseFloat(hargaBarang);
const jml = Number(jumlah);
const subtotal = harga * jml;

console.log(`Harga   : Rp${harga.toFixed(2)}`);
console.log(`Jumlah  : ${jml}`);
console.log(`Subtotal: Rp${subtotal.toFixed(2)}`);
