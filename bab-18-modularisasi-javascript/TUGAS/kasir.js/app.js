import { produk, cariProduk } from './produk.js';
import { hitungSubtotal, hitungTotal } from './transaksi.js';
import formatRupiah from './transaksi.js';


let teksDaftarProduk = "==============================\n";
teksDaftarProduk    += "        DAFTAR PRODUK         \n";
teksDaftarProduk    += "==============================\n\n";

produk.forEach((item, index) => {
  
  let nomor = index + 1;
  let spasiNama = item.nama.padEnd(10, ' ');
  teksDaftarProduk += `${nomor}. ${spasiNama} - ${formatRupiah(item.harga)}\n`;
});

document.getElementById("daftar-produk").textContent = teksDaftarProduk;



const produkDibeli1 = cariProduk(1); // Keyboard
const jumlahBeli1 = 2;
const subtotal1 = hitungSubtotal(produkDibeli1.harga, jumlahBeli1);

let teksStruk1 = "==============================\n";
teksStruk1    += "        STRUK TRANSAKSI       \n";
teksStruk1    += "==============================\n\n";
teksStruk1    += `Produk   : ${produkDibeli1.nama}\n`;
teksStruk1    += `Harga    : ${formatRupiah(produkDibeli1.harga)}\n`;
teksStruk1    += `Jumlah   : ${jumlahBeli1}\n`;
teksStruk1    += `Subtotal : ${formatRupiah(subtotal1)}\n`;

document.getElementById("struk-transaksi").textContent = teksStruk1;



const keranjang = [
  { produk: cariProduk(1), jumlah: 2 }, 
  { produk: cariProduk(2), jumlah: 1 }, 
  { produk: cariProduk(3), jumlah: 1 }  
];

let teksStrukTotal = "==============================\n";
teksStrukTotal    += "      STRUK TOTAL BELANJA     \n";
teksStrukTotal    += "==============================\n\n";

keranjang.forEach(item => {
  let sub = hitungSubtotal(item.produk.harga, item.jumlah);
  teksStrukTotal += `${item.produk.nama.padEnd(8, ' ')} x ${item.jumlah} = ${formatRupiah(sub)}\n`;
});

const totalBelanja = hitungTotal(keranjang);

teksStrukTotal += "\n------------------------------\n";
teksStrukTotal += `Total    = ${formatRupiah(totalBelanja)}\n`;

document.getElementById("struk-total").textContent = teksStrukTotal;