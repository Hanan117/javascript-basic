const namaEvent = "JavaScript Bootcamp";
const tanggalEvent = new Date("2026-09-05");


const daftarHari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
const daftarBulan = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni", 
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
];


const namaHari = daftarHari[tanggalEvent.getDay()];
const tanggal = tanggalEvent.getDate();
const namaBulan = daftarBulan[tanggalEvent.getMonth()];
const tahun = tanggalEvent.getFullYear();


console.log("=============================");
console.log("     INFORMASI EVENT");
console.log("=============================\n");
console.log(`Nama Event : ${namaEvent}`);
console.log(`Hari       : ${namaHari}`);
console.log(`Tanggal    : ${tanggal} ${namaBulan} ${tahun}\n`);
console.log("=============================");
