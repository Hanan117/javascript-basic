// final

const namaProduk = "   keyboard mechanical   ";
const hargaProduk = "750000.50";
const kodeProduk = "PROD-2026-001";

// 1. Validasi Data
const namaBersih = namaProduk.trim();
const isNamaValid = namaBersih !== "";
const hargaNum = Number(hargaProduk);
const isHargaValid = !isNaN(hargaNum);
const isKodeValid = kodeProduk.startsWith("PROD") && kodeProduk.endsWith("001");

if (!isNamaValid || !isHargaValid || !isKodeValid) {
    console.log("Validasi gagal! Periksa kembali data produk.");
} else {
    // Format Nama (Title Case)
    const namaFinal = namaBersih
        .toLowerCase()
        .split(" ")
        .map(kata => kata.charAt(0).toUpperCase() + kata.slice(1))
        .join(" ");

    // Format Harga
    const hargaFinal = `Rp${hargaNum}`;

    // Output Hasil
    console.log("===== DATA PRODUK =====\n");
    console.log(`Nama  : ${namaFinal}`);
    console.log(`Harga : ${hargaFinal}`);
    console.log(`Kode  : ${kodeProduk}\n`);
    console.log("=======================");
}