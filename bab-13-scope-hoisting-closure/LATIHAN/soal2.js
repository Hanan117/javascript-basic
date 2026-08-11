//nomor 2

const nama = "Budi"; // bisa diakses (global scoop)

function tampilkanNama() {
  const umur = 17;

  console.log(nama); // bisa diakses (function scoop)
  console.log(umur); // dan juga berada di dalam function sehingga bisa diakses
}

tampilkanNama();  //error // berada di luar fungsi  

console.log(nama); //error //sehingga memnyebabkan error its not defined
console.log(umur); //error //