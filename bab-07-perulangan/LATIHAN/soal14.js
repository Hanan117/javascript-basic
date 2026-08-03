console.log("==Continue==")

//nomor 14

const angka = [10, -5, 20, -8, 15, -1];

for (let i = 0; i < angka.length; i++) {
  if (angka[i] < 0) {
    continue;
  }
  console.log(angka[i]);
}