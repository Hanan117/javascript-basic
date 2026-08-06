//cl2

const produk = {
    nama : "handuk",
    harga : "50000",
    stok : 10,

tambahStok: function (jumlah) {
    this.stok += jumlah;
    console.log("Stok bertambah sebanyak",  this.stok);
},

kurangiStok: function (jumlah) {
    this.stok -= jumlah;
    console.log("Stok berkurang sebanyak",  this.stok);
},

tampilkanInfo() {
    console.log("Nama  :", this.nama);
    console.log("Harga :", this.harga);
    console.log("Stok :", this.stok);
}
}

produk.tambahStok(5);
produk.kurangiStok(2);
produk.tampilkanInfo();

