const keranjangA = [
  "Keyboard",
  "Mouse",
];

const keranjangB = [
  "Monitor",
  "Headset",
];

const kerangjangGabungan = [...keranjangA, ...keranjangB]
console.log(kerangjangGabungan);


const keranjangGabungan = ["Keyboard", "Mouse","Monitor","Headset"]
const [pertama,kedua,,keempat] = kerangjangGabungan;

console.log("Kejanjang Pertama :" + pertama);
console.log("Keranjang kedua :" + kedua);
console.log("Keranjang Terakhir :" + keempat);