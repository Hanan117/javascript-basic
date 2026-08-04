//nomor 15

let inventaris = [
  "Laptop",
  "Mouse",
  "Keyboard",
  "Monitor",
];

console.log(inventaris.indexOf("Keyboard"));
console.log(inventaris.includes("printer"));

let dihapus = inventaris.splice(1, 1)
console.log(inventaris);

inventaris.splice (1, 0, "Headset");
console.log(inventaris)
console.log(inventaris.slice(-2));



