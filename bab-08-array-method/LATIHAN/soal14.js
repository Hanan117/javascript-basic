// nomor 14


let antrian = [];

antrian.push("budi")
antrian.push("ani")
antrian.push("citra")

let dilayani = antrian.shift();
console.log("Sedang dilayani:", dilayani);
console.log("Sisa antrian:", antrian);

antrian.push("Dedi")

antrian.unshift ("eka")

console.log("ANTRIAN");
for (let i = 0; i < antrian.length; i++) {
  console.log(i + 1 + ".", antrian[i]);}