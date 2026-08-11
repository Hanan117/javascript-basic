// nomor 4

const nama = "Global";

function luar() {
  const nama = "Luar";

  function dalam() {
    const nama = "Dalam";

    console.log(nama);
  }

  dalam();
  console.log(nama);
}

luar();
console.log(nama);


/* Hasil :
DALAM
LUAR
GLOBA
*/

// DIKARENAKAN JS MANCARI YG TERDEKAT DARI YG TERLUAR
