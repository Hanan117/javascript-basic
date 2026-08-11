//

function buatAkun(nama, saldoAwal) {
  let _nama = nama;
  let _saldo = saldoAwal;

  return {
    lihatProfil: function () {
      console.log("===== PROFIL =====");
      console.log(`Nama: ${_nama}\n`);
    },
    cekSaldo: function () {
      console.log(`Saldo: Rp${_saldo}`);
    },
    tambahSaldo: function (jumlah) {
      _saldo += jumlah;
      console.log("Saldo berhasil ditambahkan.");
      console.log(`Saldo sekarang: Rp${_saldo}`);
    },
    kurangiSaldo: function (jumlah) {
      if (_saldo < jumlah) {
        console.log("Saldo tidak mencukupi.");
      } else {
        _saldo -= jumlah;
        console.log("Saldo berhasil dikurangi.");
        console.log(`Saldo sekarang: Rp${_saldo}`);
      }
    },
  };
}

const akunBudi = buatAkun("Budi", 100000);
akunBudi.lihatProfil();
akunBudi.cekSaldo();
console.log("");
akunBudi.tambahSaldo(50000);
console.log("");
akunBudi.kurangiSaldo(25000);
console.log("");
akunBudi.cekSaldo();

console.log("\n--------------------\n");

const akunAni = buatAkun("Ani", 500000);
akunAni.lihatProfil();
akunAni.cekSaldo();
console.log("");
akunAni.kurangiSaldo(100000);
