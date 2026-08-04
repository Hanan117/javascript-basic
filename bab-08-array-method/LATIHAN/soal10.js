//soal10

let buah = [
  "Apel",
  "Jeruk",
  "Mangga",
  "Anggur",
];


let dihapus = buah.splice(1, 1);
console.log(dihapus);
console.log(buah)

buah.splice(1,0, "Semangka");
console.log(buah);
