// nomor 14

function hitungNilaiAkhir(tugas, uts, uas) {
    return (tugas + uts + uas) / 3;
}

const nilaiAkhir = hitungNilaiAkhir(80, 85, 81);
const status = nilaiAkhir >= 75 ? "Lulus" : "Tidak Lulus";

console.log("Nilai Akhir : " + nilaiAkhir);
console.log("Status      : " + status);