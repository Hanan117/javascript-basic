
const timFrontend = ["Budi", "Andi", "Citra"];
const timBackend = ["Doni", "Eko"];

const seluruhTim = [...timFrontend, ...timBackend, "Fajar"];

function tampilkanTim(namaTim, ...anggota) {
  console.log("=============================");
  console.log(`${namaTim.toUpperCase()}`);
  console.log("=============================\n");

  for (let i = 0; i < anggota.length; i++) {
    const [nama] = [anggota[i]];
    console.log(`${i + 1}. ${nama}`);
  }
}

tampilkanTim("Developer Team", ...seluruhTim);





