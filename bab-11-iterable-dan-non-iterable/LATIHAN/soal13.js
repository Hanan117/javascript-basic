// Nomor 13


const biodata = {
  nama: "Andi",
  umur: 20,
  pekerjaan: "Programmer",
  kota: "Yogyakarta",
};

console.log("=== BIODATA ===");
for (let ciri in biodata) {
  console.log("-", ciri + ":",biodata[ciri]);
}