

function buatKeranjang() {
  let items = [];

  return {
    tambah(nama, harga) {
      items.push({
        nama: nama,
        harga: harga,
      });
    },

    hapus(nama) {
      const jumlahAwal = items.length;

      items = items.filter((item) => item.nama !== nama);

      if (items.length < jumlahAwal) {
        console.log(`${nama} berhasil dihapus.`);
      } else {
        console.log(`${nama} tidak ditemukan.`);
      }
    },

    lihatKeranjang() {
      console.log("===== KERANJANG =====");

      items.forEach((item, index) => {
        console.log(`${index + 1}. ${item.nama} - Rp${item.harga}`);
      });
    },

    hitungTotal() {
      let total = 0;

      for (const item of items) {
        total += item.harga;
      }

      return total;
    },

    jumlahItem() {
      return items.length;
    },
  };
}



// ==========================
// CARA MENGGUNAKAN
// ==========================

const keranjang = buatKeranjang();

keranjang.tambah("Keyboard", 250000);
keranjang.tambah("Mouse", 150000);

keranjang.lihatKeranjang();

keranjang.hapus("Mouse");

console.log("");

keranjang.lihatKeranjang();

console.log("Total:", keranjang.hitungTotal());

console.log("Jumlah item:", keranjang.jumlahItem());


// Mencoba mengakses data private
console.log(keranjang.items);
