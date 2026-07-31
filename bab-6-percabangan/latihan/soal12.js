//nomor 12

console.log("==DISKON==")

let totalBelanja = 320000;
let persentaseDiskon = 0;

if (totalBelanja >= 500000) {
    persentaseDiskon = 0.20;
} else if (totalBelanja >= 250000) {
    persentaseDiskon = 0.10;
} else {
    persentaseDiskon = 0;
}

let jumlahDiskon = totalBelanja * persentaseDiskon;
let totalBayar = totalBelanja - jumlahDiskon;

console.log(`Diskon : ${persentaseDiskon * 100}%`);
console.log(`Potongan : ${jumlahDiskon}`);
console.log(`Total Bayar : ${totalBayar}`);