console.log("==Data Nilai==")

//nomor 13

const nilai = [80, 95, 60, 75, 100];

let total = 0;

for (let i = 0; i < nilai.length; i++) {
  total += nilai[i];
}

let rataRata = total / nilai.length;

console.log("Total = " + total);
console.log("Rata-rata = " + rataRata);

