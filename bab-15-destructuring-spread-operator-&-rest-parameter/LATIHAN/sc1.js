const pengguna = {
  nama: "Budi Santoso",
  email: "budi@email.com",
  umur: 20,
  kota: "Jakarta",
};

const profilBaru =  {
    ...pengguna,
  
  kota: "Bandung",
  status : "Aktif",

}

const {nama, email, status} = profilBaru;

console.log("Nama :" + nama);
console.log("email :" + email);
console.log("status :" + status);
