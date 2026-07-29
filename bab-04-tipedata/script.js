console.log("===BAB 4===")


// nomor 1
console.log("===Defined===")

let nama = "Hanan"; //string
let umur = 24;      //number
let sudahLulus = true; //boolean
let alamat = null; //null
let nomorTelepon; //undefined

console.log("Nama:", nama)
console.log("Umur:", umur)
console.log("Sudah Lulus:", sudahLulus)
console.log("Alamat:", alamat)
console.log("Nomor Telepon:", nomorTelepon)



//nomor 2
console.log("===Array===")

const hobi = [
    "Membaca",
    "Ngoding",
    "Gaming",
    "Olahraga",
    "Memasak"
];


console.log(hobi[0]);
console.log(hobi[2]);
console.log(hobi[4]);



//nomor3
console.log("===Profile===")

const profil = {
  namaLengkap: "Hanan",
  umur: 24,
  sekolah: "pondok it",
  jurusan: "IT",
  aktif: true,
};

console.log(profil. namaLengkap);
console.log(profil. umur);
console.log(profil. sekolah);
console.log(profil. jurusan);
console.log("Status : " + (profil.aktif ? "Aktif" : "Tidak Aktif"));


//nomor4
console.log("====Typeof=====")


console.log(typeof nama); 
console.log(typeof umur); 
console.log(typeof sudahLulus); 
console.log(typeof alamat); 
console.log(typeof nomorTelepon); 
console.log(typeof hobi); 
console.log(typeof profil); 



//nomor5
console.log("===Tipe Data===")

console.log(typeof "Hello"); // string
console.log(typeof 100); // number
console.log(typeof true); // boolean
console.log(typeof null); // object
console.log(typeof []); // object
console.log(typeof {}); // object
console.log(typeof undefined); // undefined


//nomor6

console.log("===Analisis===")


/*
 1. string 
 2. karena variabelnya string = (penggabungan) bukan penjumlahan aritmatika 
 3. number
 4. 18
 5. bertujuan untuk mengetahui tipe suatu data
 */ 


//challenge

console.log("===challenge===")

const kelas = {
  namaKelas: "IT C",
  jumlahSiswa: 8,
  ketuaKelas: "Radit",
  daftarMapel: ["HTML", "CSS", "Pemrograman Web", "Javascript"]
};

console.log("Nama Kelas : " + kelas.namaKelas);
console.log("Jumlah Siswa : " + kelas.jumlahSiswa);
console.log("Ketua Kelas : " + kelas.ketuaKelas);
console.log("Mapel Pertama : " + kelas.daftarMapel[0]);
console.log("Mapel Terakhir : " + kelas.daftarMapel[kelas.daftarMapel.length - 1]);









