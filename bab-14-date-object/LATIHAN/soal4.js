const namaHari = [
  "Minggu",
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
  "Sabtu",
];

const tanggal = new Date("2026-08-17");
const hari = namaHari[tanggal.getDay()];

console.log(hari);
