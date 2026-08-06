//cl 1

const biodata = {
    nama: "ahmad",
    umur: 30,
    pekerjaan: "penipu",
    kota: "jakarta",

tampilkanBiodata: function () {
    console.log("=== BIODATA ===");
    console.log("Nama :", this.nama);
    console.log("Umur :", this.umur);
    console.log("Pekerjaan :", this.pekerjaan);
    console.log("Kota :", this.kota);
    console.log("===========");
}
}


biodata.tampilkanBiodata();

