const nilai = [80, 90, 75, 95, 85];

function prosesNilai(...nilai) {

const tertinggi = Math.max(...nilai);
const terendah = Math.min(...nilai);

console.log("Nilai Tertinggi :" + " " + tertinggi); 
console.log("Nilai terendah :" + " " + terendah); 


function jumlahkan(...nums) {
  return nums.reduce((total, n) => total + n, 0); }

console.log("Total Nilai :" + " " + jumlahkan(80, 90, 75, 95, 85)); 

}

const hasil = prosesNilai(...nilai);



