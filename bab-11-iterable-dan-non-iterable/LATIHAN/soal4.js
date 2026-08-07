// nomor4


const nilaiUjian = [90, 80, 85, 100, 95];
let total = 0;

for (let nilai of nilaiUjian) {
  total += nilai;
}

const rataRata = total / nilaiUjian.length;
console.log("Total   :", total);
