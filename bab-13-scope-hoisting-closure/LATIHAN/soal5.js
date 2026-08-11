//nomor 5

const pajak = 10;  // di global scoop (nomor 1)

function hitungHarga(harga) {
  const totalPajak = harga * (pajak / 100);  // di function scoop (nomor 2)

  return harga + totalPajak; // tidak bisa dikarenakan hanya bisa dilakukan di wilayah function scoop (nomor 4)
}

console.log(hitungHarga(100000)); // karena masih di wilayah global scoop yg bisa dimana" diakses (nomor 3)