// nomor 12

function buatPenghitung() {
  let hitungan = 0; // dibuat di function scoop

  return function () {
    hitungan++;
    console.log(hitungan); // Diakses melalui closure dari dalam function
  };
}

const penghitung = buatPenghitung(); //buatPenghitung

penghitung(); 
penghitung();
penghitung();