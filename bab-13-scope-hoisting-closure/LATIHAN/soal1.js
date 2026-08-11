// nomor 1

const nama = "Budi"; // global scope // karena bisa diakses dimana aja

function belajar() {
  const bahasa = "JavaScript"; // function scope // karena hanya bisa diakses didalam fungsi

  if (true) {
    let level = "Pemula";
    console.log(level); // block scope //karena diakses di dalam {}
  }
}