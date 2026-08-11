// nomor 13


function buatPenghitung() {
  let hitungan = 0;

  return function () {
    hitungan++;
    console.log(hitungan);
  };
}

const penghitungA = buatPenghitung();
const penghitungB = buatPenghitung();

penghitungA();
penghitungA();

penghitungB();

penghitungA();
penghitungB();

// jaawabannya : 1,2,1,3,2 // karen a dipanggil 3 kali dan b dipanggil 2 kali
