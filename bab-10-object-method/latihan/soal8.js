// soal 8.

const lampu = {
  warna: "putih",
  nyalakan: function () {
    console.log("lampu berwarna", this.warna + " menyala");
  },
};

lampu.nyalakan();
