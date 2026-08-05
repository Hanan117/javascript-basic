//nomor 15

function hitungBMI(berat, tinggi) {
    return berat / (tinggi * tinggi);
}

let berat = 65;
let tinggi = 1.7;

let bmi = hitungBMI(berat, tinggi);

console.log("BMI : " + bmi);