const sekarang = new Date("2026-08-13");

const tugas = [
  { nama: "Membuat Website Portfolio", deadline: "2026-08-20" },
  { nama: "Mengerjakan Latihan JavaScript", deadline: "2026-08-10" }, // Tanggal sudah lewat dari tanggal 13
  { nama: "Presentasi Project", deadline: "2026-09-01" },
];

console.log("===== DAFTAR TUGAS =====\n");

tugas.forEach((item, index) => {
  const tanggalDeadline = new Date(item.deadline);

  // Menghitung selisih hari menggunakan getTime()
  const selisihMs = tanggalDeadline.getTime() - sekarang.getTime();
  const selisihHari = Math.round(selisihMs / (1000 * 60 * 60 * 24));

  // Format tanggal deadline
  const formatDeadline = tanggalDeadline.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric"
  });

  // Menentukan status
  let status;
  if (selisihHari > 0) {
      status = `${selisihHari} hari lagi`;
  } else {
      status = "Deadline sudah terlewat.";
  }

  // Menampilkan hasil
  console.log(`${index + 1}. ${item.nama}`);
  console.log(`   Deadline: ${formatDeadline}`);
  console.log(`   Status  : ${status}\n`);
});