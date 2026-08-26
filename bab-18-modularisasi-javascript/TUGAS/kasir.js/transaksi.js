
export function hitungSubtotal(harga, jumlah) {
  return harga * jumlah;
}


export function hitungTotal(transaksiList) {
  let total = 0;
  for (let i = 0; i < transaksiList.length; i++) {
    total += hitungSubtotal(transaksiList[i].produk.harga, transaksiList[i].jumlah);
  }
  return total;
}


export default function formatRupiah(angka) {
  return "Rp" + angka.toLocaleString("id-ID");
}